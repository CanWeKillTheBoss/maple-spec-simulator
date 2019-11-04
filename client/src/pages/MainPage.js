import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../components/common/PageTemplate';

const MainSec1 = styled.div`
  font-size: 16rem;
`;

const MainSec2 = styled.div``;

const MainSec3 = styled.div``;

const MainSec4 = styled.div``;

const MainSec5 = styled.div``;

const MainPage = () => {
  return (
    <PageTemplate>
      <MainSec1>MapleStory</MainSec1>
      <MainSec2>로그인</MainSec2>
      <MainSec3>공지</MainSec3>
      <MainSec4>토론 게시판</MainSec4>
      <MainSec5>게임정보</MainSec5>
    </PageTemplate>
  );
};

export default MainPage;
