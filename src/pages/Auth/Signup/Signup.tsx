import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Layout, Form, Input, Button, Card, Typography, Space, Row, Col } from 'antd';
import {Header} from '../../../components/Header';
import People from '../../../assets/connecting.svg';
import '../Login.less';

const { Text, Title } = Typography;
const { Item } = Form;

export const Signup: React.FC = () => {
  const history = useHistory();
  return (
    <>
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
            <Col flex={1} style={{ margin: '4rem' }}>
              <Card style={{ border: '1px solid #E0E6FF'}}>
                <Row className="row" justify="center" style={{ marginTop: '3rem' }}>
                  <Space direction="vertical">
                  <Title level={4} style={{ color: '#000000', fontSize: '24px'}}> Welcome! </Title>
                  <Text style={{ color: '#5C5A5A', fontSize: '18px'}}> Enter your email address to get started </Text>
                  <Form className="form" layout="vertical" style={{ marginTop: '2rem'}}>
                    <Item className="space" label="Email Address" style={{ width: '100%'}}>
                      <Input type="email" placeholder="myaddress@mail.com" style={{ color: '#5C5A5A' }} />
                    </Item>
                    <Item>
                      <Button onClick={() => history.push('/search')} type="primary" htmlType="submit" className="login-form-button">
                        Sign up
                      </Button>
                      <div style={{ textAlign: 'center', marginTop: '4rem', color: '#5C5A5A' }}>
                        <span> Already have an account? </span> <Link to="login">Login</Link>
                      </div>
                    </Item>
                  </Form>
                  </Space>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout.Content>
    </>
  );
}
