import React from 'react';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const App = () => {
 
  return (
    <Header
    style={{
      position: 'sticky',
      top: 0,
      zIndex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <div className="demo-logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      items={[{key:"Dashboard",label:"Dashboard"},{key:"About",label:"About"}]}
      style={{
        flex: 1,
        minWidth: 0,
      }}
    />
  </Header>

  );
};
export default App;