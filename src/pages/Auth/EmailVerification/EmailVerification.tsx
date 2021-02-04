import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Form, Button, Card, Typography, Space, Row, Col } from 'antd';
import { Header } from '../../../components/Header';
import People from '../../../assets/connecting.svg';
import Email from '../../../assets/email.svg';
import '../Login.less';

const { Text, Title } = Typography;
const { Item } = Form;

export const EmailVerification: React.FC = () => {
  return (
    <Layout.Content className="layout">
      <Row style={{ height: '100vh' }}>
        <Col className="left" lg={12} xl={12} sm={0} xs={0} md={12} flex={1}>
          <div className="content">
            <Row style={{ marginTop: '2rem' }} justify="start">
              <Space>
                <Link to="/">
                  <Title level={2} style={{ color: 'white'}}> YUTARS </Title>
                </Link>
              </Space>
            </Row>
            <Space direction="vertical">
              <Row align="middle" className="row" justify="center">
                <Col span={24}>
                  <p className="content-center">
                    <Title level={4} style={{ color: 'white'}}> Secured Technology <br /> API Infrastructure </Title>
                    <Text style={{ color: '#E4E4E4'}}>
                      Check if a borrower is already overleveraged and <br /> whose account is already negative
                    </Text>
                  </p>
                </Col>
              </Row>
              <Row align="bottom" className="row" style={{ marginTop: '2rem' }}justify="center">
                <Col span={24}>
                  <img src={People} alt="connecting lenders to borrowers" style={{ height: '150%', width: '100%', alignSelf: 'center' }} />
                </Col>
              </Row>
            </Space>
          </div>
        </Col>
        <Col className="right" lg={12} xl={12} sm={24} xs={24} md={12} flex={1}>
          <Row>
            <Col lg={0} xl={0} sm={24} xs={24} md={0}>
              <Header />
            </Col>
          </Row>
          <Row className="row" justify="center">
            <Col flex={1} style={{ margin: '4rem', textAlign: 'center' }}>
              <Card style={{ border: '1px solid #E0E6FF'}}>
              <Row className="row" justify="center" style={{ marginTop: '3rem' }}>
                <div className="login-form-button">
                  <img src={Email} alt="email verification" />
                </div>
                  <Form className="form" layout="vertical">
                    <Item>
                      <Title level={3}>Verify your email</Title>
                    </Item>
                    <Item>
                      <Text>
                        Hi John! Thank you for signing up, a link has been sent to your email, please check your mail to verify your account.
                      </Text>
                    </Item>
                    <Item>
                      <Button style={{ width: '60%', height: '45px' }} type="primary" htmlType="submit">
                        Proceed to Login
                      </Button>
                    </Item>
                  </Form>
                  </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout.Content>
  );
}
