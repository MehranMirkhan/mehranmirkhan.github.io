import React from "react";

import Layout from "../components/Layout";

export default () => (
  <Layout>
    <Layout.SidebarItem name="info">Who am I</Layout.SidebarItem>
    <Layout.SidebarItem name="edu">Education</Layout.SidebarItem>
    <Layout.SidebarItem name="pub">Publications</Layout.SidebarItem>
    <Layout.SidebarItem name="job">Career</Layout.SidebarItem>
    <Layout.SidebarItem name="hobby">Interests</Layout.SidebarItem>
    <Layout.BodyItem name="info">
      <h1>About Me</h1>
      <div>My name is Mehran Mirkhan</div>
    </Layout.BodyItem>
    <Layout.BodyItem name="edu">
      <h1>Education</h1>
    </Layout.BodyItem>
    <Layout.BodyItem name="pub">
      <h1>Publications</h1>
    </Layout.BodyItem>
    <Layout.BodyItem name="job">
      <h1>Career</h1>
    </Layout.BodyItem>
    <Layout.BodyItem name="hobby">
      <h1>Interests</h1>
    </Layout.BodyItem>
  </Layout>
);
