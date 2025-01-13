import React from 'react';
import styled from 'styled-components';
import Home from '../pages/Home';
import Philosophy from '../pages/Philosophy';
import Strength from '../pages/Strength';
import Environment from '../pages/Environment';
import License from '../pages/License';
import Contact from '../pages/Contact';
import { getImagePath } from '../utils/imagePath';

const ContentContainer = styled.div`
  margin-left: 250px;
  width: calc(100% - 250px);
  position: relative;
  overflow: hidden;
`;

const Section = styled.section`
  min-height: 100vh;
  padding: 2rem;
  scroll-margin-top: 2rem;
  position: relative;
`;

const Decoration = styled.img`
  position: absolute;
  opacity: 0.4;
  pointer-events: none;
  transition: all 0.3s ease;
`;

// 浮动动画
const floatAnimation = (height) => `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(${height}px); }
    100% { transform: translateY(0px); }
  }
`;

// 旋转动画
const rotateAnimation = `
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

// 摇摆动画
const swingAnimation = `
  @keyframes swing {
    0% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
    100% { transform: rotate(-5deg); }
  }
`;

const WelcomeDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const TopStar = styled(Decoration)`
  width: 50px;
  position: absolute;
  top: 20px;
  animation: rotate 10s linear infinite;
  ${rotateAnimation}
`;

const TopButterfly = styled(Decoration)`
  width: 60px;
  position: absolute;
  top: 30px;
  animation: float 4s ease-in-out infinite;
  ${floatAnimation(-10)}
`;

const TopBalloon = styled(Decoration)`
  width: 70px;
  position: absolute;
  top: 10px;
  animation: float 6s ease-in-out infinite;
  ${floatAnimation(-15)}
`;

const TopCloud1 = styled(Decoration)`
  top: 2%;
  right: 5%;
  width: 180px;
  animation: float 6s ease-in-out infinite;
  ${floatAnimation(-15)}
`;

const TopCloud2 = styled(Decoration)`
  top: 5%;
  left: 10%;
  width: 150px;
  animation: float 8s ease-in-out infinite;
  ${floatAnimation(-20)}
`;

const TopRainbow = styled(Decoration)`
  top: 8%;
  left: 30%;
  width: 200px;
  opacity: 0.3;
`;

const Star1 = styled(Decoration)`
  top: 30%;
  right: 15%;
  width: 100px;
  animation: rotate 8s linear infinite;
  ${rotateAnimation}
`;

const Star2 = styled(Decoration)`
  bottom: 40%;
  left: 20%;
  width: 90px;
  animation: rotate 10s linear infinite;
  ${rotateAnimation}
`;

const Balloon = styled(Decoration)`
  top: 60%;
  right: 8%;
  width: 70px;
  animation: float 7s ease-in-out infinite;
  ${floatAnimation(-25)}
`;

const Rainbow = styled(Decoration)`
  top: 10%;
  left: 15%;
  width: 120px;
  opacity: 0.1;
`;

const Butterfly = styled(Decoration)`
  top: 45%;
  right: 25%;
  width: 80px;
  animation: float 4s ease-in-out infinite;
  ${floatAnimation(-15)}
`;

const Bird = styled(Decoration)`
  bottom: 25%;
  right: 15%;
  width: 85px;
  animation: swing 3s ease-in-out infinite;
  ${swingAnimation}
`;

const TeddyBear = styled(Decoration)`
  bottom: 10%;
  left: 10%;
  width: 120px;
  animation: swing 5s ease-in-out infinite;
  ${swingAnimation}
`;

const Blocks = styled(Decoration)`
  top: 70%;
  left: 25%;
  width: 100px;
  animation: float 9s ease-in-out infinite;
  ${floatAnimation(-10)}
`;

const Crayon = styled(Decoration)`
  top: 20%;
  left: 30%;
  width: 80px;
  transform: rotate(45deg);
  animation: float 7s ease-in-out infinite;
  ${floatAnimation(-12)}
`;

function MainContent() {
  return (
    <ContentContainer>
      <WelcomeDecoration>
        <TopStar src={getImagePath('/public/images/decorations/star.png')} alt="" style={{ left: '20%' }} />
        <TopStar src={getImagePath('/public/images/decorations/star.png')} alt="" style={{ right: '20%' }} />
        <TopButterfly src={getImagePath('/public/images/decorations/butterfly.png')} alt="" style={{ left: '35%' }} />
        <TopButterfly src={getImagePath('/public/images/decorations/butterfly.png')} alt="" style={{ right: '35%' }} />
        <TopBalloon src={getImagePath('/public/images/decorations/balloon.png')} alt="" style={{ left: '50%', transform: 'translateX(-50%)' }} />
      </WelcomeDecoration>
      
      <TopCloud1 src={getImagePath('/public/images/decorations/cloud.png')} alt="" />
      <TopCloud2 src={getImagePath('/public/images/decorations/cloud.png')} alt="" />
      <TopRainbow src={getImagePath('/public/images/decorations/rainbow.png')} alt="" />
      <TopBalloon src={getImagePath('/public/images/decorations/balloon.png')} alt="" />
      <Star1 src={getImagePath('/public/images/decorations/star.png')} alt="" />
      <Star2 src={getImagePath('/public/images/decorations/star.png')} alt="" />
      <Balloon src={getImagePath('/public/images/decorations/balloon.png')} alt="" />
      <Rainbow src={getImagePath('/public/images/decorations/rainbow.png')} alt="" />
      <Butterfly src={getImagePath('/public/images/decorations/butterfly.png')} alt="" />
      <Bird src={getImagePath('/public/images/decorations/bird.png')} alt="" />
      <TeddyBear src={getImagePath('/public/images/decorations/teddy.png')} alt="" />
      <Blocks src={getImagePath('/public/images/decorations/blocks.png')} alt="" />
      <Crayon src={getImagePath('/public/images/decorations/crayon.png')} alt="" />
      
      <Section id="home">
        <Home />
      </Section>
      <Section id="philosophy">
        <Philosophy />
      </Section>
      <Section id="strength">
        <Strength />
      </Section>
      <Section id="environment">
        <Environment />
      </Section>
      <Section id="license">
        <License />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </ContentContainer>
  );
}

export default MainContent; 