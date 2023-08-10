import React from 'react';
import { styled } from 'styled-components';
import { QUERIES } from '../../constants';

function SecondaryHero() {
  return (
    <SecondaryHeroWrapper>
      <DecorativeSquare src="./assets/shared/pattern-square.svg" alt="" />
      <ImagesWrapper>
        <PhoneAndKeyboardWrapper>
          <OrangeOverlay />
        </PhoneAndKeyboardWrapper>

        <GlassAndKeyboardWrapper>
          <source
            type="image/jpg"
            srcSet="
            ./assets/mobile/image-glass-and-keyboard.jpg 1x,
            ./assets/tablet/image-glass-and-keyboard.jpg 2x,
            ./assets/desktop/image-glass-and-keyboard.jpg 3x
          "
          />
          <GlassAndKeyboard
            src="./assets/mobile/image-glass-and-keyboard.jpg"
            alt="The Typemaster Keyboard with a glass"
          />
        </GlassAndKeyboardWrapper>
      </ImagesWrapper>
      <SecondaryHeroTextSection>
        <H2>Mechanical Wireless Keyboard</H2>
        <P>
          The Typemaster keyboard boasts top-notch build and practical
          design. It offers a wide variety of switches and keycaps,
          along with reliable wireless connectivity.
        </P>
      </SecondaryHeroTextSection>
    </SecondaryHeroWrapper>
  );
}

const SecondaryHeroWrapper = styled.div`
  @media ${QUERIES.laptopAndUp} {
    margin-right: 165px;
    margin-top: 30px;
    display: grid;
    grid-template-columns: 135px minmax(0, 6.66fr) minmax(0, 3.333fr);
    gap: 30px;
  }
`;

const DecorativeSquare = styled.img`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: none;
  }

  @media ${QUERIES.laptopAndUp} {
    display: block;
    align-self: flex-end;
    justify-self: end;
  }
`;

const ImagesWrapper = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 2fr) 24px;
  width: 100%;

  @media ${QUERIES.tabletAndUp} {
    width: revert;
    margin: 40px 40px 0px 40px;
    grid-template-columns: minmax(0, 0.96fr) minmax(0, 2fr);
    grid-template-rows: 320px;
    gap: 30px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin: 0;
    grid-template-columns: minmax(0, 3.64fr) minmax(0, 6.35fr);
    grid-template-rows: revert;
  }
`;

const PhoneAndKeyboardWrapper = styled.picture`
  position: relative;
`;

const OrangeOverlay = styled.div`
  background-color: var(--color-darkOrange);
  background-image: image-set(
    url('./assets/mobile/image-phone-and-keyboard.jpg') 1x,
    url('./assets/tablet/image-phone-and-keyboard.jpg') 2x,
    url('./assets/desktop/image-phone-and-keyboard.jpg') 3x
  );
  background-size: cover;
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: -24px;
  height: 100%;
  width: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  @media ${QUERIES.tabletAndUp} {
    left: revert;
    top: revert;
    border-radius: 20px;
  }
`;

const GlassAndKeyboardWrapper = styled.picture``;

const GlassAndKeyboard = styled.img`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SecondaryHeroTextSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin: 75px 24px;

  @media ${QUERIES.tabletAndUp} {
    margin: 72px 40px 0px 40px;
    text-align: start;
    display: grid;
    grid-template-columns: minmax(0, 0.96fr) minmax(0, 1.5fr);
    grid-template-rows: 108px;
    gap: 30px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin: 0;
    padding: 112px 0 99px 95px;
    display: flex;
    align-items: start;
    text-align: start;
  }
`;

const H2 = styled.h2`
  font: var(--font-h2);
  color: var(--color-offblack);
  text-transform: uppercase;
  width: min-content;
`;

const P = styled.p`
  font: var(--font-body);
  color: var(--color-darkGray);
`;

export default SecondaryHero;
