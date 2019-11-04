import React from 'react';
import Footer from 'components/common/Footer';
import styled from 'styled-components';
import Header from 'components/common/Header';

const PageTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  min-height: calc(100% - 4rem);
  margin-bottom: -4rem;
`;
export default PageTemplate;
