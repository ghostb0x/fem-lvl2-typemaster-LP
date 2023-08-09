import React from "react";
import { styled } from "styled-components";
import { FEATURE_CARDS } from "../../data";
import FeatureCard from "../FeatureCard/FeatureCard";

function FeatureCards() {
  return (
    <FeatureCardsWrapper>
      {FEATURE_CARDS.map((data) => (
        <FeatureCard
          key="data.id"
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
`;

export default FeatureCards;
