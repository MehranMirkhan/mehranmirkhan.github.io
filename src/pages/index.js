import React from "react";
import styled from "styled-components";

const Center = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WelcomeText = styled.span`
  font-family: Courier New;
  font-weight: bold;
  font-size: 36pt;
`;

export default () => (
  <main>
    <Center>
      <WelcomeText id="welcome">Hello, World!</WelcomeText>
    </Center>
  </main>
);
