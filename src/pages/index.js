import React from "react";
import styled from "styled-components";

const Center = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.span`
  font-family: Courier New;
  font-weight: bold;
  font-size: 36pt;
`;

const SubtitleText = styled.span`
  font-family: Courier New;
  font-size: 12pt;
  color: #ccc;
`;

export default () => (
  <main>
    <Center>
      <TitleText id="welcome">Hello, World!</TitleText>
    </Center>
  </main>
);
