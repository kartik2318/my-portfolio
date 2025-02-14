// Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import '../assests/styling/Footer.css'


const FooterWrapper = styled.div`
  height: max-content;
  width: 100%;
  margin-top: 50px;
`;

const FooterContent = styled.div`
  display: grid;
  justify-content: center;
  margin: 0 auto;
`;

const Copyright = styled.p`
  font-size: 14px;
  margin: 20px auto;
  font-family: monospace;
  color: black;
`;

const SocialLinks = styled.div`
  display: flex;
  margin: auto;
  padding-bottom: 20px;
`;

const SocialLink = styled.a`
  margin-right: 30px;
  font-size: 18px;
  color: #666;
  align-self: center;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #007bff;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Copyright>Copyright &copy; 2024. Built with LOVE ❤️❤️</Copyright>
        <SocialLinks>
          <SocialLink href="https://twitter.com/kartik_patare" target='_blank'><FaTwitter /></SocialLink>
          <SocialLink href="https://www.linkedin.com/in/kartik-patare-63b4b4256/" target="_blank"><FaLinkedinIn /></SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
