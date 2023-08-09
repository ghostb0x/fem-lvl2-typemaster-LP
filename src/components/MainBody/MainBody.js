import React from "react";
import MainHero from "../MainHero/MainHero";
import { styled } from "styled-components";
import SecondaryHero from "../SecondaryHero/SecondaryHero";

function MainBody() {
  return (
    <MainWrapper>
      <MainHero/>
      <SecondaryHero/>
    </MainWrapper>
  );
}

const MainWrapper = styled.main``;

export default MainBody;
