import React from "react";
import styled from "styled-components";

import { extractChildren } from "../utils";

const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #ccc;
`;

const Sidebar = styled.div`
  background-color: red;
  overflow-y: auto;
`;

const Body = styled.div`
  background-color: blue;
  flex-grow: 1;
  overflow: auto;
`;

class Layout extends React.Component {
  static SidebarItem = styled.div`
    background-color: yellow;
  `;

  render() {
    const [sidebarItems, rest] = extractChildren(
      this.props.children,
      Layout.SidebarItem
    );
    return (
      <Container>
        <Sidebar>{sidebarItems}</Sidebar>
        <Body>{rest}</Body>
      </Container>
    );
  }
}

export default Layout;
