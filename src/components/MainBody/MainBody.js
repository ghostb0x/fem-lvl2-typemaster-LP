import React from "react";
import MainHero from "../MainHero/MainHero";
import { styled } from "styled-components";
import SecondaryHero from "../SecondaryHero/SecondaryHero";
import FeatureCards from "../FeatureCards/FeatureCards";

function MainBody() {
  return (
    <MainWrapper>
      <MainHero/>
      <SecondaryHero/>
      <FeatureCards/>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
`;

export default MainBody;
