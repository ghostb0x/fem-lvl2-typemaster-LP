import React from 'react';
import { styled } from 'styled-components';

function SecondaryHero() {
  return (
    <SecondaryHeroWrapper>
      <ImagesWrapper>
        <PhoneAndKeyboardWrapper>
          <OrangeOverlay />
          {/* <PhoneAndKeyboard
          src="./assets/mobile/image-phone-and-keyboard.jpg"
          alt="The Typemaster Keyboard with a mobile phone"
        /> */}
        </PhoneAndKeyboardWrapper>

        <GlassAndKeyboardWrapper>
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

const SecondaryHeroWrapper = styled.div``;

const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 2fr);
  grid-template-rows: 186px;
  gap: 24px;
  width: 100%;
  margin-top: 24px;
`;

const PhoneAndKeyboardWrapper = styled.picture`
  position: relative;
`;

const OrangeOverlay = styled.div`
  background-color: var(--color-darkOrange);
  background-image: url('./assets/mobile/image-phone-and-keyboard.jpg');
  background-size: cover;
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const PhoneAndKeyboard = styled.img`
  width: 100%;
  border-radius: 20px;
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
