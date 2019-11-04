import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
// import { device } from 'styles/device';

//pages
import { MainPage, NotFoundPage } from 'pages';

const GlobalStyle = createGlobalStyle`
  body {
    /* autoprefixer grid : autoplace */
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    box-sizing: inherit;
  }
  
  a {
    text-decoration: inherit;
    color: inherit;
  }
  html, body, #root{
    height: 100%
  }
`;

// const store = configure();

const App = () => {
  return (
    // <Provider store={store}>
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
    // </Provider>
  );
};

export default App;
