import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, Typography, Row, Col, Space, Card } from 'antd';
import Analysis from '../../assets/analysis.svg';
import RealTime from '../../assets/realtime.svg';
import Secure from '../../assets/secure.svg';
import OpenApi from '../../assets/openapi.svg';
import Check from '../../assets/check.svg';
import Notif from '../../assets/notif.svg';
import Cscare from '../../assets/cscare.svg';
import Invoice from '../../assets/invoice.svg';
import Payroll from '../../assets/payroll.svg';
import './Landing.less';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

export const Landing: React.FC = () => {
  return (
    <Layout className="layout" style={{ width: '100%'}}>
      <Header className="header">
        <Link to='/' style={{ fontSize: '28px', color: '#001D4A' }}>
          YUTARS
        </Link>
        <div className="right">
          <Button type='primary' style={{ borderRadius: '5px', margin: '0 2rem' }}> <Link style={{ color: 'white'}} to="/search"> Dive in </Link> </Button>
        </div>
      </Header>
      <Content className="content">
        <Row className="row">
          <Col xl={12} xs={24} md={12} style={{ marginTop: '3rem' }} flex="auto">
            <Space direction="vertical" size="large">
              <Title level={2}>
                Simple and modern way to know a borrower's level of credit exposure in real time.
              </Title>
              <Text>Yutars helps lenders n the federal public sector know if a borrower is already over-leveraged to reduce the chances of unsuccessful payroll deductions.</Text>
              <br /><Button type='primary' style={{ height: '3rem', width: '15rem' }}> <Link style={{ color: 'white'}} to="/search"> Get Started </Link> </Button>
            </Space>
          </Col>
          <Col xl={12} xs={24} md={12} flex="auto">
            <img src={Analysis} alt="analysis" style={{ width: '100%', height: '100%' }} />
          </Col>
        </Row>
        {/* Here's how we do it. */}
        <Row className="row" justify="center">
          <Col span={24} flex="auto">
            <Card className="how-card">
              <Row>
                <Col span={12} flex="auto">
                  <Title level={3}>
                    Here&apos;s how we want to do it
                  </Title>
                </Col>
                <Col span={12} flex="auto">
                  <Text>
                    Yutars helps lenders in the federal public sector know if a borrower is already over-leveraged to reduce the chances of unsuccessful payroll deductions.
                  </Text>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className="section">
          <Col span={24} flex="auto" offset={3}>
            <Row>
              <Col xl={12} xs={24} md={12}>
                <Space direction="vertical" size="large">
                  <img src={RealTime} alt="real time" style={{ width: '59px', height: '59px' }} />
                  <Title level={3}>Real time secure loan data exchange</Title>
                  <Text>
                    We are on a mission to connect all lenders to securely share borrowers’ loan data in real time among themselves using banking security standards.
                  </Text>
                </Space>
              </Col>
              <Col xl={12} xs={24} md={12} flex="auto">
                <img src={Secure} alt="secure server" style={{ width: '100%', height: '100%'}} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="section" style={{ backgroundColor: '#F3F6FA' }}>
          <Col span={24} flex="auto" offset={3} style={{ marginTop: '2rem' }}>
            <Row>
              <Col xl={12} xs={24} md={12}>
                <img src={OpenApi} alt="secure api" style={{ width: '100%', height: '100%'}} />
              </Col>
              <Col xl={12} xs={24} md={12} flex="auto">
                <Space direction="vertical" size="large">
                  <img src={Check} alt="secure open api check" style={{ width: '59px', height: '59px' }} />
                  <Title level={3}>Secure Open API technology infrastructure</Title>
                  <Text>
                    An open lending technology built that allows financial institutions share loan information securely and easily using open API infrastructure.
                  </Text>
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="section">
          <Col span={24} flex="auto" offset={3}>
            <Row>
              <Col xl={12} xs={24} md={12} flex="auto">
                <Space direction="vertical" size="large">
                  <img src={Notif} alt="real time" style={{ width: '59px', height: '59px' }} />
                  <Title level={3}>Real time notification</Title>
                  <Text>
                    Get notified when another lender inquires about the same borrower you checked within a specified time frame and see a trail of other inquiries on the borrower with a timestamp.
                  </Text>
                </Space>
              </Col>
              <Col xl={12} xs={24} md={12} flex="auto">
                <img src={Cscare} alt="top customer service" style={{ width: '100%', height: '100%'}} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="section" style={{ backgroundColor: '#F3F6FA' }}>
          <Col span={24} flex="auto" offset={3} style={{ marginTop: '4rem' }}>
            <Row>
              <Col xl={12} xs={24} md={12} flex="auto">
                <img src={Invoice} alt="Payroll deduction" style={{ width: '100%', height: '100%'}} />
              </Col>
              <Col xl={12} xs={24} md={12} flex="auto">
                <Space direction="vertical" size="large">
                  <img src={Payroll} alt="secure open api check" style={{ width: '59px', height: '59px' }} />
                  <Title level={3}>Increase your chances of successful payroll deductions</Title>
                  <Text>
                    Over 3,000 federal public sector borrowers are indebted to at least five different lenders simultaneously. We would help you increase your chances of successful payroll deductions by revealing borrowers who are already exposed to many lenders.
                  </Text>
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="row" justify="center">
          <Col span={24} flex="auto">
            <Card className="footer-card">
              <Row>
                <Col xl={12} xs={24} md={12} flex="auto">
                  <Title level={5} style={{ color: 'white'}}>
                    Ready to get started?
                  </Title>
                </Col>
                <Col xl={12} xs={24} md={12} flex="auto">
                  <Button type="primary" size="large" style={{ color: 'white', background: '#0364FF', borderRadius: '5px' }}>
                  <Link style={{ color: 'white'}} to="/search"> Get Started </Link>
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Content>
      <Footer style={{ background: '#001D4A', color: 'white' }}> &copy; YUTARS {new Date().getFullYear()}</Footer>
    </Layout>
  );
}
