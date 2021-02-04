import React, { useCallback, useMemo, useState } from 'react';
import { Alert, Descriptions, Layout, Row, Col, Input, Card, Spin, Statistic, Tag, Pagination, Result } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import { gql, useLazyQuery } from '@apollo/client';
import { addHours, subDays, subMonths, setDate, getMonth } from 'date-fns';

import _ from 'lodash';

import { Header } from '../../components/Header';

import './Search.less';

const latestMonth = subDays(new Date(), 27);
const dayOneDate = addHours(setDate(latestMonth, 1), 1);
const lastDayDate = addHours(setDate(latestMonth, 28), 1);

const getBorrowerOverleverages = gql`
query overLeveragesGroupedByBorrowers ($employeeNumber: String! $startDate: Date $endDate: Date) {
  overLeveragesGroupedByBorrowers( where: { employeeNumber: $employeeNumber, startDate: $startDate, endDate: $endDate }) {
    overLeveragesGroupedByBorrowers {
      borrower {
        id
        name
        employment {
          companyName
          employeeNumber
          isGovernment
        }
      }
      overleverages {
        id
        amount
        over
        date
        lender {
          id
          name
        }
      }
      totalAmount
      totalOver
    }
  }
}`;

const getBorrowerInfo = gql`
query borrowers ($employeeNumber: String!) {
  borrowers( where: { employeeNumber: $employeeNumber}) {
    borrowers {
      id
      name
      employment {
        companyName
        employeeNumber
        isGovernment
      }
    }
  }
}`;

export const Search:React.FC = () => {
  const [overleverages, { loading, data, error }] = useLazyQuery(getBorrowerOverleverages);
  const [getBorrower, {  data: borrowerData }] = useLazyQuery(getBorrowerInfo);
  const [paginatedValue, setPaginatedValue] = useState(1);
  const [ippis, setIppis] = useState<string>('');
  const [startDate, setStartDate] = useState(dayOneDate);
  const [endDate, setEndDate] = useState(lastDayDate);

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    
  const handleSearch = useCallback((value: string) => {
    try {
      if(value.trim() !== '') {
        setIppis(value);
        getBorrower({ variables: { employeeNumber: value.trim() } });
        overleverages({ variables: { employeeNumber: value.trim(), startDate, endDate } });
      }
    } catch (error) {
      console.log(error);
    }
  },[overleverages, startDate, endDate, getBorrower]);

  const delayedQuery = useMemo(() =>
   _.debounce(queryString => {
     overleverages({ variables: { employeeNumber: queryString.trim(), startDate, endDate } });
     getBorrower({ variables: { employeeNumber: queryString.trim() } });
    },1500),[endDate, getBorrower, overleverages, startDate]);

  const handleTypingOnchange = useCallback(event => {
    const { target: { value } } = event;
    if(value.trim() !== '') {
      setIppis(value);
      delayedQuery(value);
    }
  },[delayedQuery]);

  const handlePaginatedSearch = useCallback((page) => {
    setPaginatedValue(page);

    const startDate = addHours(setDate(subMonths(latestMonth,page-1), 1), 1);
    const endDate = addHours(setDate(subMonths(latestMonth,page-1), 28), 1);
    setStartDate(startDate);
    setEndDate(endDate);

    overleverages({ variables: { employeeNumber: ippis, startDate, endDate }});
  },[overleverages, ippis]);

  return (
    <Layout className="layout">
      <Header />
      <Layout.Content className="content">
        <Row className="row" justify="center">
          <Col xs={24} lg={18}>
            <Tag color="#0364FF">Beta</Tag>
            <Spin size="large" spinning={loading}>
              <label htmlFor='search'>
                <span className='visually-hidden'>Search over-leveraged borrowers</span>
              </label>
              <Input.Search
                data-testid="search-input"
                className="input"
                size="large"
                placeholder="Enter IPPIS number..."
                id="search"
                enterButton
                onSearch={handleSearch}
                onChange={handleTypingOnchange}
              />
            </Spin>
          </Col> 
        </Row>
        {error && <Row align="middle" className="row" justify="center"><Col xs={24} lg={18}><Alert type="error" closable message="Error getting borrower" /></Col></Row>}
        {data && !data.overLeveragesGroupedByBorrowers.overLeveragesGroupedByBorrowers && 
        <Row className="row" justify="center"><Col xs={24} lg={18}>
          <Alert message="Not found" description="No user found with that IPPIS number" type="error" showIcon closable />
        </Col></Row>}
        {data && data.overLeveragesGroupedByBorrowers.overLeveragesGroupedByBorrowers && 
        <Row className="row" justify="space-around" align="middle">
          <Col xs={24} lg={18}>
            <Card className="site-layout-background">
              <Row className="row" justify="center">
                <Col xs={24} lg={18}>
                  <Descriptions
                    bordered
                    title="Borrower's Details"
                    extra={`IPPIS: ${borrowerData?.borrowers?.borrowers[0]?.employment.employeeNumber}`}
                    size="default"
                    layout="vertical">
                    <Descriptions.Item label="Full Name">{borrowerData?.borrowers?.borrowers[0]?.name}</Descriptions.Item>
                    <Descriptions.Item label="Government Employee">{borrowerData?.borrowers?.borrowers[0]?.employment.isGovernment ? 'Yes' : 'No'}</Descriptions.Item>
                    <Descriptions.Item label="Ministry">{borrowerData?.borrowers?.borrowers[0]?.employment.companyName}</Descriptions.Item>
                    <Descriptions.Item>
                      <Statistic
                        title="Total Monthly Repayment (#)"
                        value={data?.overLeveragesGroupedByBorrowers?.overLeveragesGroupedByBorrowers[0]?.totalAmount}
                        precision={3}
                        valueStyle={{ color: '#3f8600' }}
                      />
                    </Descriptions.Item>
                    <Descriptions.Item>
                      <Statistic
                        title="Institutions Owed"
                        value={data?.overLeveragesGroupedByBorrowers?.overLeveragesGroupedByBorrowers[0]?.overleverages.length}
                      />
                    </Descriptions.Item>
                    <Descriptions.Item>
                      <Statistic
                        title="Negative Balance (#)"
                        value={data?.overLeveragesGroupedByBorrowers?.overLeveragesGroupedByBorrowers[0]?.totalOver}
                        precision={3}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<ArrowDownOutlined />}
                      />
                    </Descriptions.Item>
                  </Descriptions>
                  <Descriptions title="Recently Searched by" layout="horizontal" style={{ marginTop: '2rem'}}
                    extra="last 5 days"
                  >
                    <Descriptions.Item>
                      <Tag>Carbon</Tag>
                      <Tag>Zedfinance</Tag>
                      <Tag>PennyLender</Tag>
                      <Tag>Page</Tag>
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
              </Row>
              <Row className="row" justify="center" style={{ marginTop: '-2rem'}}>
                <Col xs={24} lg={18}>
                  <Row>
                    <Col span={24}>
                      <Descriptions
                        title={`Institutions owed in ${monthNames[getMonth(startDate)]}`}
                        extra={<Pagination defaultCurrent={1} current={paginatedValue} onChange={handlePaginatedSearch} total={60} simple />}
                        size="default"
                        layout="horizontal"
                        style={{ fontSize: '10px'}}
                      />
                        {data?.overLeveragesGroupedByBorrowers?.overLeveragesGroupedByBorrowers[0]?.overleverages ?
                          data?.overLeveragesGroupedByBorrowers?.overLeveragesGroupedByBorrowers[0]?.overleverages.map((overleverage: any) => (
                            <Descriptions
                              bordered
                              key={overleverage.id}
                              size="small"
                              layout="horizontal"
                              title={<div style={{ fontSize: '14px', fontWeight: 'normal'}}>{overleverage.lender.name}</div>}
                              extra={<Statistic valueStyle={{ color: '#3f8600', fontSize: '16px' }} style={{ fontSize: '10px'}} value={overleverage.amount} />}
                            />
                          )) : <Row className="row" justify="center"><Col xs={24} lg={18}>
                          <Result status="info" title={`No result for ${monthNames[getMonth(startDate)]}`} />
                        </Col></Row>
                          }
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        }
      </Layout.Content>
    </Layout>
  );
}
