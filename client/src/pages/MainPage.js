import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
const MainPage = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainPage;
