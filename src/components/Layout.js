import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import { extractChildren } from "../utils";

const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #ccc;
`;

const Sidebar = styled.div`
  background-color: #444;
  overflow-y: auto;
  padding: 12px;
`;

const Body = styled.div`
  background-color: #ddd;
  flex-grow: 1;
  overflow: auto;
`;

const SidebarItem = styled.a`
  display: block;
  padding: 12px;
  color: #ddd;
`;

const BodyItem = styled.div`
  height: 100vh;
`;

class Layout extends React.Component {
  static SidebarItem = ({ name, children }) => {
    return <SidebarItem href={`#${name}`}>{children}</SidebarItem>;
  };

  static BodyItem = ({ name, children }) => (
    <BodyItem id={name}>{children}</BodyItem>
  );

  render() {
    const [sidebarItems, bodyItems, rest] = extractChildren(
      this.props.children,
      Layout.SidebarItem,
      Layout.BodyItem
    );
    return (
      <Container>
        <Sidebar>{sidebarItems}</Sidebar>
        <Body>{bodyItems}</Body>
      </Container>
    );
  }
}

export default Layout;
