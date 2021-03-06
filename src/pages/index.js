import React from "react";

import Layout from "../components/Layout";

export default () => (
  <Layout>
    <Layout.SidebarItem tag="info" name="About Me" />
    <Layout.SidebarItem tag="edu" name="Education" />
    <Layout.SidebarItem tag="pub" name="Publications" />
    <Layout.SidebarItem tag="job" name="Career" />
    <Layout.SidebarItem tag="hobby" name="Interests" />
    <Layout.BodyItem tag="info" name="About Me">
      <p>My name is Mehran Mirkhan</p>
      <p>I am a full-stack web developer at day</p>
      <p>and an AI researcher at night</p>
    </Layout.BodyItem>
    <Layout.BodyItem tag="edu" name="Education"></Layout.BodyItem>
    <Layout.BodyItem tag="pub" name="Publications"></Layout.BodyItem>
    <Layout.BodyItem tag="job" name="Career"></Layout.BodyItem>
    <Layout.BodyItem tag="hobby" name="Interests"></Layout.BodyItem>
  </Layout>
);
