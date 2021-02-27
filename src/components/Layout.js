import React from "react";
import styled from "styled-components";

import { extractChildren } from "../utils";

class Layout extends React.Component {
  static NavbarItem = styled.div``;
  static SidebarItem = styled.div``;

  render() {
    const [navbarItems, sidebarItems, rest] = extractChildren(
      this.props.children,
      Layout.NavbarItem,
      Layout.SidebarItem
    );
    return (
      <main>
        {navbarItems}
        {sidebarItems}
        {rest}
      </main>
    );
  }
}

export default Layout;
