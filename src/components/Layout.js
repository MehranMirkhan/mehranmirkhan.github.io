import React from "react";
import styled from "styled-components";

import { extractChildren } from "../utils";

class Layout extends React.Component {
  static SidebarItem = styled.div``;
  static Body = styled.div``;

  render() {
    const [sidebarItems, body, rest] = extractChildren(
      this.props.children,
      Layout.SidebarItem,
      Layout.Body
    );
    return (
      <main>
        {sidebarItems}
        {body}
        {rest}
      </main>
    );
  }
}

export default Layout;
