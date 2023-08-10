import React from 'react';
import { styled } from 'styled-components/macro';
import Button from '../Button/Button';
import { QUERIES } from '../../constants';

function MainHero() {
  return (
    <HeroWrapper>
      <HeroContent>
        <H1>Typemaster Keyboard</H1>
        <Paragraph>
          Improve your productivity and gaming without breaking the
          bank. Upgrade to a high quality mechanical typing
          experience.
        </Paragraph>
        <CTAWrapper>
          <HeroButton>Pre-Order Now</HeroButton>
          <CTASpan>Release on 5/27</CTASpan>
        </CTAWrapper>
      </HeroContent>
      <HeroImageWrapper>
        <HeroImage
          src="./assets/mobile/image-keyboard.jpg"
          alt="The Typemaster Keyboard - color image"
        />
      </HeroImageWrapper>
      <DecorativeSquare src="./assets/shared/pattern-square.svg" />
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    margin-top: 62px;
    display: grid;
    grid-template-columns: 6fr 5fr;
    gap: 70px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 83px;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) 135px;
    gap: 30px;
    margin-left: 165px;
    overflow-x: clip;
  }
`;

const HeroContent = styled.div`
  padding: 62px 24px 66px 24px;

  @media ${QUERIES.tabletAndUp} {
    padding: 60px 0 60px 40px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 60px 95px 108px 0;
  }
`;

const H1 = styled.h1`
  font: var(--font-h1-mobile);
  color: var(--color-offblack);
  text-transform: uppercase;

  @media ${QUERIES.laptopAndUp} {
    font: var(--font-h1-desktop);
  }
`;

const Paragraph = styled.p`
  font: var(--font-body);
  color: var(--color-darkGray);
  margin: 32px 0 32px 0;

  @media ${QUERIES.tabletAndUp} {
    margin: 34px 0 40px 0;
  }

  @media ${QUERIES.laptopAndUp} {
    font: var(--font-hero-body-desktop);
    margin: 24px 0 40px 0;
  }
`;

const CTAWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media ${QUERIES.tabletAndUp} {
    justify-content: space-between;
    gap: 20px;
  }

  @media ${QUERIES.laptopAndUp} {
    gap: 40px;
    justify-content: revert;
  }
`;

const HeroButton = styled(Button)`
  color: var(--color-white);
  background-color: var(--color-darkOrange);

  @media ${QUERIES.tabletAndUp} {
    min-width: 175px;
    height: 58px;
  }
`;

const CTASpan = styled.span`
  font: var(--font-button);
  text-transform: uppercase;
  color: var(--color-darkGray);
  margin-right: 17px;

  @media ${QUERIES.tabletAndUp} {
    margin-right: revert;
  }
`;

const HeroImageWrapper = styled.picture`
  display: flex;
  overflow-x: clip;
`;

const HeroImage = styled.img`
  width: 100%;
  margin-left: 24px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  @media ${QUERIES.tabletAndUp} {
    margin-left: revert;
    object-fit: cover;
    object-position: 0% 0%;
  }

  @media ${QUERIES.laptopAndUp} {
    border-radius: 20px;
    /* width: 90%; */
  }
`;

const DecorativeSquare = styled.img`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: none;
  }

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;

export default MainHero;
