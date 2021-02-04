import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Avatar, Menu, Dropdown } from 'antd';
import { BellOutlined, UserOutlined } from '@ant-design/icons';

import './Header.less';

export const Header = () => {

  const dropdownMenu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="#">Profile</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="#">Settings</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        <Link to="/">Logout</Link>
      </Menu.Item>
    </Menu>
  )

  return (
    <Layout.Header style={{ width: '100%', background: '#001D4A'}}>
      <Link to='/' className="title"> Yutars </Link>
      {false && <div className="right">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <BellOutlined className="item" />
        </Menu.Item>
        <Dropdown overlay={dropdownMenu}>
          <Link to="#" className="ant-dropdown-link" style={{ color: "white"}} onClick={e => e.preventDefault()}>
            Your company &nbsp;
            <Avatar icon={<UserOutlined />} />
          </Link>
        </Dropdown>
      </Menu>
      </div>}
    </Layout.Header>
  )
}
