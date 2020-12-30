/* eslint-disable no-unused-vars */
import React from "react";
import { useMediaQuery } from '@material-ui/core'
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
import SidebarSmall from "../Sidebar/SidebarSmall";

const Dashboard = () => {
  const [drawer, setDrawer] = React.useState();
  const { SubMenu } = Menu;
  const { Header, Content, Footer, Sider } = Layout;

  const [show, setShow] = React.useState(false);
  const [showSmallerSidebar, setShowSmallerSidebar] = React.useState(false);
  const onCollapse = (collapsed) => setShow(collapsed);

  const open = () => setDrawer(true);
  const close = () => setDrawer(false);

  const openSmallerSidebar = () => setShowSmallerSidebar(true);
  const closeSmallerSidebar = () => setShowSmallerSidebar(false);


  const showSidebar = useMediaQuery("(min-width:700px)");

  return (
    <Layout style={{ minHeight: "90vh" }}>
      {showSidebar && (
        <Sider>
          <Sidebar open={open} />
        </Sider>
      )}
      {showSmallerSidebar && (
        <Sider>
          <SidebarSmall open={openSmallerSidebar} close={closeSmallerSidebar} />
        </Sider>
      )}


      <Layout>
        <Content>
          {drawer && <SideDrawer close={close} />}
          <Filter open={open} close={close} openSmallerSidebar={openSmallerSidebar} closeSmallerSidebar={closeSmallerSidebar} />
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
