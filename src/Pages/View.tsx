import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import QRCodeDisplay from '../Components/QrCodeDisplay';
import { getQRCode } from '../utils/api';

const ViewContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 2rem;
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 2rem;
`;

const LinkItem = styled.li`
  background-color: white;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const LinkType = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const LinkUrl = styled.a`
  color: var(--primary-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const View: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [qrCodeValue, setQRCodeValue] = useState<string | null>(null);
  const [links, setLinks] = useState<{ type: string; url: string }[]>([]);

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const { value, links } = await getQRCode(id!);
        setQRCodeValue(value);
        setLinks(links);
      } catch (error) {
        console.error('Error fetching QR code:', error);
        alert('Failed to fetch QR code. Please try again.');
      }
    };

    fetchQRCode();
  }, [id]);

  return (
    <ViewContainer>
      <Title>Your MultiLink QR Code</Title>
      {qrCodeValue && <QRCodeDisplay value={qrCodeValue} />}
      <h2>Included Links:</h2>
      <LinkList>
        {links.map((link, index) => (
          <LinkItem key={index}>
            <LinkType>{link.type}:</LinkType>
            <LinkUrl href={link.url} target="_blank" rel="noopener noreferrer">
              {link.url}
            </LinkUrl>
          </LinkItem>
        ))}
      </LinkList>
    </ViewContainer>
  );
};

export default View;