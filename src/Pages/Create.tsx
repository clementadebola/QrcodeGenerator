import React, { useState } from 'react';
import styled from 'styled-components';
import LinkInput from '../Components/LinkInput';
import QRCodeDisplay from '../Components/QrCodeDisplay';
import { generateQRCode } from '../utils/api';

const CreateContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--secondary-color);
  text-align: center;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

interface Link {
  type: string;
  url: string;
}

const Create: React.FC = () => {
  const [links, setLinks] = useState<Link[]>([{ type: 'url', url: '' }]);
  const [qrCodeValue, setQRCodeValue] = useState<string | null>(null);

  const handleAddLink = () => {
    setLinks([...links, { type: 'url', url: '' }]);
  };

  const handleLinkChange = (index: number, type: string, url: string) => {
    const newLinks = [...links];
    newLinks[index] = { type, url };
    setLinks(newLinks);
  };

  const handleGenerateQRCode = async () => {
    try {
      const value = await generateQRCode(links);
      setQRCodeValue(value);
    } catch (error) {
      console.error('Error generating QR code:', error);
      alert('Failed to generate QR code. Please try again.');
    }
  };

  return (
    <CreateContainer>
      <Title>Create MultiLink QR Code</Title>
      {links.map((link, index) => (
        <LinkInput
          key={index}
          type={link.type}
          url={link.url}
          onChange={(type, url) => handleLinkChange(index, type, url)}
        />
      ))}
      <ButtonContainer>
        <Button onClick={handleAddLink}>Add Another Link</Button>
        <Button onClick={handleGenerateQRCode}>Generate QR Code</Button>
      </ButtonContainer>
      {qrCodeValue && <QRCodeDisplay value={qrCodeValue} />}
    </CreateContainer>
  );
};

export default Create;