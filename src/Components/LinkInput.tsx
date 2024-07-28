import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  margin-bottom: 1rem;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

interface LinkInputProps {
  type: string;
  url: string;
  onChange: (type: string, url: string) => void;
}

const LinkInput: React.FC<LinkInputProps> = ({ type, url, onChange }) => {
  return (
    <InputContainer>
      <Label>Link Type:</Label>
      <Select value={type} onChange={(e) => onChange(e.target.value, url)}>
        <option value="url">URL</option>
        <option value="pdf">PDF</option>
        <option value="mp3">MP3</option>
        <option value="file">File</option>
      </Select>
      <Label>Link URL:</Label>
      <Input
        type="text"
        value={url}
        onChange={(e) => onChange(type, e.target.value)}
        placeholder="Enter link URL"
      />
    </InputContainer>
  );
};

export default LinkInput;