import React from "react";
import { styled } from "styled-components";
import { QUERIES } from "../../constants";

function Footer() {
  return (
    <FooterWrapper>
      <P1>Typemaster 2021</P1>
      <P2> All Rights Reserved</P2>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 96px 50px 50px 50px;

  @media ${QUERIES.tabletAndUp} {
    padding: 0 0 43px 0;
    margin-top: 142px;
    
  }
`;

const P1 = styled.p `
  font: var(--font-body);
  font-weight: var(--font-weight-bold);
  color: var(--color-darkGray);
  white-space: pre;
  

  &::after {
    content: "  |  "
  }
`;

const P2 = styled.p `
  font: var(--font-body);
  color: var(--color-darkGray);

`;

export default Footer;
