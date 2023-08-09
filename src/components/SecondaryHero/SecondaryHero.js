import React from 'react';
import { styled } from 'styled-components';

function SecondaryHero() {
  return (
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
  );
}
const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, .9fr) minmax(0, 2fr);
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
  background-image: url("./assets/mobile/image-phone-and-keyboard.jpg");
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

export default SecondaryHero;
