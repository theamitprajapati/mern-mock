import React from "react";
import { Layout, Menu, Avatar, Dropdown, Space } from "antd";
import { UserOutlined, DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;

const items = [
  {
    key: "1",
    label: (
      <Link to="/profile">Profile</Link>
      
    ),
  },
  {
    key: "1",
    label: (
      <a  rel="noopener noreferrer" href="/">
        Logout
      </a>
    ),
  },
];

const App = () => {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={[
          { key: "Dashboard", label: <Link to="/dashboard">Dashboard</Link> },
          { key: "Role", label:  <Link to="/role">Role</Link> },
          { key: "privilege", label:  <Link to="/privilege">Privilege</Link> },
          { key: "Organization", label:  <Link to="/organization">Organization</Link> },
        ]}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
      <div>
        <Space size="middle">
          <Dropdown menu={{ items }}>
            <Avatar
              size={64}
              icon={<UserOutlined />}
              style={{ cursor: "pointer" }}
            />
          </Dropdown>
        </Space>
      </div>
    </Header>
  );
};
export default App;
