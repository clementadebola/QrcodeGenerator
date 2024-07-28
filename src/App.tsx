import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AnimatedBackground from './Components/AnimatedBackground';
import Home from './Pages/Home';
import Create from './Pages/Create';
import View from './Pages/View';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <AnimatedBackground />
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </MainContent>
      <Footer />
    </AppContainer>
  );
};

export default App;