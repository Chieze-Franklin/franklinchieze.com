import React, {  } from 'react';
import { Layout, Row, Col, Typography, Card, PageHeader, Avatar, Divider, Select } from 'antd';

import { Header } from '../../components/Header';

import './BorrowerProfile.less';

const { Text } = Typography;
const { Option } = Select;

export const BorrowerProfile: React.FC = () => {
  return (
    <div>
      <Layout className="layout" style={{ background: '#FBFBFB'}}>
        <Header />
        <Layout.Content className="content">
          <Row className="row">
            <PageHeader
              className="back-botton"
              title="Back"
              onBack={() => window.history.back()}
            />
          </Row>
          <Row className="row" justify="space-around" align="middle">
            <Col span={24}>
              <Card className="site-layout-background">
                <Row className="row" justify="center" align="middle">
                  <Col span={12}>
                    <div>Overleverage Borrower's Details</div>
                  </Col>
                  <Col span={12} style={{ float: 'right' }}>IPPIS: 05431251</Col>
                </Row>
                <Card className="card-space">
                <Row className="profile">
                  <Col span={8}>
                    <Card.Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                    />
                  </Col>
                  <Col span={8}>
                    <Text type="secondary">Full name</Text>
                  </Col>
                  <Col span={8}>
                    <Text type="secondary">Age</Text>
                  </Col>
                </Row>
                <Row className="profile">
                  <Col span={8}>
                    
                  </Col>
                  <Col span={8}>
                    <Text>John Makinde</Text>
                  </Col>
                  <Col span={8}>
                    <Text>42</Text>
                  </Col>
                </Row>
                <Row className="profile">
                  <Col span={8}>
                    
                  </Col>
                  <Col span={8}>
                    <Text type="secondary">Ministry</Text>
                  </Col>
                  <Col span={8}>
                    <Text type="secondary">Years in Service</Text>
                  </Col>
                </Row>
                <Row className="profile">
                  <Col span={8}>
                    
                  </Col>
                  <Col span={8}>
                    <Text>Federal Governemt</Text>
                  </Col>
                  <Col span={8}>
                    <Text>42</Text>
                  </Col>
                </Row>
                </Card>
                <Card className="card-space">
                <Row className="profile">
                  <Col span={8}>
                    <Text>Searched By</Text>
                  </Col>
                  <Col span={8}></Col>
                  <Col span={8}>
                    <Select style={{ width: 120 }}>
                      <Option value="1 hour">Last 1 hour</Option>
                    </Select>
                  </Col>
                </Row>
                <Row className="profile">
                  <Col span={24}>
                    
                  </Col>
                </Row>
                </Card>
                <Card className="card-space">
                <Row className="profile">
                  <Col span={8}>
                    <Text>Overleverage Chart</Text>
                  </Col>
                  <Col span={8}></Col>
                  <Col span={8}>
                  <Select style={{ width: 120 }}>
                      <Option value="6 months">Last 6 Months</Option>
                    </Select>
                  </Col>
                </Row>
                <Divider />
                <Row className="profile">
                  <Col span={24}>
                    
                  </Col>
                </Row>
                </Card>
              </Card>
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </div>
  )
}
