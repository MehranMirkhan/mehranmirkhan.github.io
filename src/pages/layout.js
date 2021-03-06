import React from "react";

import Layout from "../components/Layout";

export default () => (
  <Layout>
    <Layout.SidebarItem>SidebarItem 1</Layout.SidebarItem>
    <Layout.SidebarItem>SidebarItem 2</Layout.SidebarItem>
    <Layout.SidebarItem>SidebarItem 3</Layout.SidebarItem>
    <span>Child 1</span>
    <span>Child 2</span>
  </Layout>
);
