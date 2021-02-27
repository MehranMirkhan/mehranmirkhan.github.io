import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";

export default () => (
  <Layout>
    <Layout.NavbarItem>NavbarItem 1</Layout.NavbarItem>
    <span>Child 1</span>
    <Layout.SidebarItem>SidebarItem 1</Layout.SidebarItem>
    <span>Child 2</span>
    <Layout.NavbarItem>NavbarItem 2</Layout.NavbarItem>
  </Layout>
);
