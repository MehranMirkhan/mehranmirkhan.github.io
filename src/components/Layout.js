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
  min-width: 20%;
  background-color: #444;
  overflow-y: auto;
  padding: 12px 0;
`;

const Body = styled.div`
  background-color: #ddd;
  flex-grow: 1;
  overflow: auto;
`;

const SidebarItem = styled.a`
  display: block;
  text-decoration: none;
  padding: 12px 24px;
  background-color: ${(props) => (props.active ? "#f1ac14" : "unset")};
  color: ${(props) => (props.active ? "#333" : "#ddd")};
`;

const BodyItem = styled.div`
  height: 100vh;
  padding: 32px;
`;

const BodyItemHeader = styled.h1`
  text-align: center;
`;

class Layout extends React.Component {
  static SidebarItem = ({ tag, name }) => {
    const currentPage = window.location.href.split("#");
    const active = currentPage.length > 1 ? currentPage[1] === tag : false;
    return (
      <SidebarItem href={`#${tag}`} active={active}>
        {name}
      </SidebarItem>
    );
  };

  static BodyItem = ({ tag, name, children }) => (
    <BodyItem id={tag}>
      <BodyItemHeader>{name}</BodyItemHeader>
      {children}
    </BodyItem>
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
