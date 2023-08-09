import React from 'react';
import Button from '../Button/Button';
import { styled } from 'styled-components/macro';

function Header() {
  return (
    <Wrapper>
      <Logo src='./assets/shared/logo.svg' alt='TM company Logo - Click to visit Homepage'
      />
      <HeaderButton>Pre-Order Now</HeaderButton>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;

`;


const HeaderButton = styled(Button)`
  color: var(--color-offblack);
  background-color: var(--color-lightGray);

  &:hover {
    color: var(--color-white);
    background-color: var(--color-offblack);
  }
`;

export default Header;
