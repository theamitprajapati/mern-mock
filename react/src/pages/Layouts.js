import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
import TopHeader from "../components/TopHeader";

import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));
const Layouts = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <TopHeader />

      <Content
        style={{
          padding: "0 48px",
          margin: "16px 0",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default Layouts;
