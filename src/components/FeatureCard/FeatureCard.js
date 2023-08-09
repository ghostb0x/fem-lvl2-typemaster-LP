import React from 'react';
import { styled } from 'styled-components';

function FeatureCard({
  id,
  title,
  description,
  iconSrc,
  iconAltText,
}) {
  return (
    <CardWrapper>
      <IconBackground>
        <Icon
          src={iconSrc}
          alt={iconAltText}
        />
      </IconBackground>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 24px;
`;

const IconBackground = styled.div`
  background-color: var(--color-darkOrange);
  width: 65px;
  height: 65px;
  border-radius: 16px;
  display: flex;
`;

const Icon = styled.img`
  display: block;
  margin: auto;
`;

const Title = styled.h3`
  font: var(--font-h3);
  color: var(--color-offblack);
  text-transform: uppercase;
  width: 200px;
  margin-top: 24px;
`;

const Description = styled.p`
  font: var(--font-body);
  color: var(--color-darkGray);
`;

export default FeatureCard;
