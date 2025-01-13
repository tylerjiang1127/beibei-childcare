import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getImagePath } from '../utils/imagePath';

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 767px) {
    display: block;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`;

const Nav = styled.nav`
  background-color: ${props => props.theme.colors.secondary};
  position: fixed;
  z-index: 1000;

  @media (min-width: 768px) {
    padding: 2rem 1rem;
    height: 100vh;
    width: 250px;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 767px) {
    padding: 0.5rem;
    height: ${props => props.isOpen ? 'auto' : '60px'};
    width: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    transition: height 0.3s ease;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 767px) {
    margin-bottom: 0.5rem;
  }
`;

const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;

  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`;

const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};

  @media (max-width: 767px) {
    font-size: 1.1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: column;
    margin-top: 2rem;
  }

  @media (max-width: 767px) {
    flex-direction: row;
    overflow-x: auto;
    padding: 0.5rem 0;
    gap: 1rem;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const NavLink = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  white-space: nowrap;

  @media (max-width: 767px) {
    font-size: 0.9rem;
    padding: 0.3rem 0.8rem;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: rgba(255,255,255,0.5);
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <Nav isOpen={isOpen}>
      <LogoContainer>
        <LogoImage src={getImagePath('/public/images/Beibei-Logo.png')} alt="Beibei Logo" />
        <Logo>Beibei Child Care</Logo>
      </LogoContainer>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </MenuButton>
      <NavLinks>
        <NavLink onClick={() => scrollToSection('home')}>首页</NavLink>
        <NavLink onClick={() => scrollToSection('philosophy')}>办学理念</NavLink>
        <NavLink onClick={() => scrollToSection('strength')}>我们的优势</NavLink>
        <NavLink onClick={() => scrollToSection('environment')}>教育环境</NavLink>
        <NavLink onClick={() => scrollToSection('license')}>执照和资质</NavLink>
        <NavLink onClick={() => scrollToSection('contact')}>联系我们</NavLink>
      </NavLinks>
    </Nav>
  );
}

export default Navbar; 