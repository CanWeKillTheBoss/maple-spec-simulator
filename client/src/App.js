import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

//pages
import {
  MainPage,
  NotFoundPage,
  CommunityPage,
  ItemPage,
  ServicePage,
  MyPageMain
} from 'pages';

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
        <Route exact path='/main' component={MainPage} />
        <Route path='/mypage/main' component={MyPageMain} />
        <Route path='/community' component={CommunityPage} />
        <Route path='/item' component={ItemPage} />
        <Route path='/service/main' component={ServicePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
    // </Provider>
  );
};

export default App;
