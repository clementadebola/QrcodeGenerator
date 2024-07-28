import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--secondary-color);
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      © 2024 MultiLink QR Generator. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;