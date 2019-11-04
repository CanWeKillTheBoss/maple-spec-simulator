import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { device } from 'styles/device';

// const FontAwesomeIconBlock = styled(FontAwesomeIcon)`
//   margin-right: 0.2rem;
// `;

const HeaderBlock = styled.header`
  display: flex;
  background: #eeeeee;
  /* color: ; */
  height: 6.4rem;
  padding: 2rem 8rem;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled(Link)`
  font-weight: 600;
  font-size: 2.4rem;
`;
const Links = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.9rem;
`;
const StyledLink = styled(Link)`
  & + & {
    margin-left: 2.77rem;
  }
`;

const UserWrapper = styled.div`
  background: #ffffff;
  border-radius: 50%;
  width: 3.44rem;
  height: 3.44rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Logo to=''>CanWeKillTheBoss</Logo>
      <Links>
        <StyledLink to='/res/main'>
          <span>&nbsp;&nbsp;Home</span>
        </StyledLink>
        <StyledLink to='/qna'>
          <span>&nbsp;&nbsp;Q&A 게시판</span>
        </StyledLink>
        <StyledLink to='/item'>
          <span>&nbsp;&nbsp;아이템</span>
        </StyledLink>
        <StyledLink to='/service/main'>
          <span>&nbsp;&nbsp;고객센터</span>
        </StyledLink>
        <StyledLink to='/mypage/main'>
          <UserWrapper></UserWrapper>
        </StyledLink>
      </Links>
    </HeaderBlock>
  );
};

export default Header;
