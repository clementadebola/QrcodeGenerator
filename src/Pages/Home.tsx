import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const CreateButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.2rem;
  transition: background-color 0.3s, 
//   transform 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const FeatureItem = styled.li`
  flex-basis: calc(33.333% - 2rem);
  margin: 1rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Title>Welcome to MultiLink QR Generator</Title>
      <Description>
        Create powerful QR codes that link to multiple resources: URLs, PDFs,
        MP3s, and more! Simplify information sharing with our advanced
        multi-link technology.
      </Description>
      <CreateButton to="/create">Create QR Code</CreateButton>
      <FeatureList>
        <FeatureItem>
          <FeatureIcon>🔗</FeatureIcon>
          <FeatureTitle>Multiple Links</FeatureTitle>
          <p>Combine various resources into a single QR code</p>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon>📱</FeatureIcon>
          <FeatureTitle>Mobile Friendly</FeatureTitle>
          <p>Optimized for smooth mobile scanning and usage</p>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon>🎨</FeatureIcon>
          <FeatureTitle>Customizable</FeatureTitle>
          <p>Personalize your QR codes with colors and logos</p>
        </FeatureItem>
      </FeatureList>
    </HomeContainer>
  );
};

export default Home;
