import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --background-color: #ecf0f1;
    --text-color: #34495e;
    --accent-color: #e74c3c;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
`;