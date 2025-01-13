import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Nav = styled.nav`
  background-color: ${props => props.theme.colors.secondary};
  padding: 2rem 1rem;
  box-shadow: 2px 0 4px rgba(0,0,0,0.1);
  position: fixed;
  height: 100vh;
  width: 250px;
  left: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 2rem;
`;

const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  text-align: center;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: rgba(255,255,255,0.5);
  }
`;

const LanguageButton = styled.button`
  background: none;
  border: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: auto;
  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
  }
`;

function Navbar() {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState('zh');

  const toggleLanguage = () => {
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    setCurrentLang(newLang);
    i18n.changeLanguage(newLang);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav>
      <LogoContainer>
        <LogoImage src="/images/Beibei-Logo.png" alt="Beibei Logo" />
        <Logo>Beibei Child Care</Logo>
      </LogoContainer>
      <NavLinks>
        <NavLink onClick={() => scrollToSection('home')}>{t('首页')}</NavLink>
        <NavLink onClick={() => scrollToSection('philosophy')}>{t('办学理念')}</NavLink>
        <NavLink onClick={() => scrollToSection('strength')}>{t('优势')}</NavLink>
        <NavLink onClick={() => scrollToSection('environment')}>{t('环境')}</NavLink>
        <NavLink onClick={() => scrollToSection('license')}>{t('执照和资质')}</NavLink>
        <NavLink onClick={() => scrollToSection('contact')}>{t('联系我们')}</NavLink>
      </NavLinks>
      <LanguageButton onClick={toggleLanguage}>
        {currentLang === 'zh' ? 'English' : '中文'}
      </LanguageButton>
    </Nav>
  );
}

export default Navbar; 