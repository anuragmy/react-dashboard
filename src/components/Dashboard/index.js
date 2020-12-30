/* eslint-disable no-unused-vars */
import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Sidebar from "../Sidebar";
import HeaderSection from "../HeaderSection";
import SideDrawer from "../SideDrawer";
import Filter from "../Filter";

const Dashboard = () => {
  const [drawer, setDrawer] = React.useState();
  const { SubMenu } = Menu;
  const { Header, Content, Footer, Sider } = Layout;

  const [show, setShow] = React.useState(false);
  const onCollapse = (collapsed) => setShow(collapsed);

  const open = () => setDrawer(true);
  const close = () => setDrawer(false);

  return (
    <Layout style={{ minHeight: "90vh" }}>
      {/* <Sider>
        <Sidebar open={open} />
      </Sider> */}

      <Layout>
        <Content>
          {drawer && <SideDrawer close={close} />}
          <Filter open={open} close={close} />
        </Content>
      </Layout>
      <style jsx="true">
        {`
          .ant-layout-sider-children {
            background: white;
          }
          .ant-layout-header {
            background: white;
          }
        `}
      </style>
    </Layout>
  );
};

export default Dashboard;
