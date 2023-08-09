import React from "react";
import { styled } from "styled-components/macro";

function Button( {children, className}) {
  return (
    <ButtonMain className={className}>
      {children}
    </ButtonMain>
  );
}

const ButtonMain = styled.button`
  height: 48px;
  width: 150px;
  text-transform: uppercase;
  font: var(--font-button);
  text-align: center;
  border-radius: 0.5rem;
`;


export default Button;
