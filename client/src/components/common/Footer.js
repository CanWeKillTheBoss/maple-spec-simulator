import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { device } from 'styles/device';

//footer 엘리먼트를 스타일링합니다.
const FooterBlock = styled.footer`
  background: #eeeeee;
  height: 6.4rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 8rem;
  font-size: 1.8rem;
  color: #0000008a;
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled(Link)`
  margin-right: 0.8rem;
`;

const StyledLink = styled(Link)`
  margin-left: 0.8rem;

  & + & {
    margin-left: 0.8rem;
  }
`;

const Footer = () => {
  return (
    <FooterBlock className='footer'>
      <Logo to='' className='logo'>
        Copyright by KUCS
      </Logo>
      <Links>
        <StyledLink to='' className='btn_notice'>
          공지사항
        </StyledLink>
        <StyledLink to='' className='btn_privacy'>
          개인정보
        </StyledLink>
        <StyledLink to='' className='btn_usage'>
          이용약관
        </StyledLink>
        <StyledLink to='' className='btn_notice'>
          운영정책
        </StyledLink>
        <StyledLink to='' className='btn_notice'>
          고객센터
        </StyledLink>
        <StyledLink to='' className='btn_notice'>
          제휴문의
        </StyledLink>
        <StyledLink to='' className='btn_notice'>
          이용방법
        </StyledLink>
      </Links>
    </FooterBlock>
  );
};

export default Footer;
