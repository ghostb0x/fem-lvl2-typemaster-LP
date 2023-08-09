import React from "react";
import { styled } from "styled-components";
import { FEATURE_CARDS } from "../../data";
import FeatureCard from "../FeatureCard/FeatureCard";
import { QUERIES } from "../../constants";

function FeatureCards() {
  return (
    <FeatureCardsWrapper>
      {FEATURE_CARDS.map((data) => (
        <FeatureCard
          key={data.id}
          {...data}
        />
      ))}

    </FeatureCardsWrapper>
  );
}

const FeatureCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  margin: 24px;
  margin-bottom: 0px;

  @media ${QUERIES.tabletAndUp} {
    margin: 142px 98px 0px 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 70px;
    align-items: start;
    
  }
`;

export default FeatureCards;
