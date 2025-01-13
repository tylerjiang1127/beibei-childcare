import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeContainer = styled.div`
  padding: 120px 20px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin: 0rem 0 2rem 0;
  text-align: center;
  color: ${props => props.theme.colors.primary};
  font-size: 2.2rem;
`;

const Introduction = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  text-align: justify;
`;

const SliderContainer = styled.div`
  margin: 2rem auto;
  max-width: 1000px;

  .slick-slide {
    padding: 0 10px;
  }

  .slick-prev, .slick-next {
    &:before {
      color: ${props => props.theme.colors.primary};
    }
  }

  .slick-dots {
    bottom: -40px;
    li button:before {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear'
  };

  const images = [
    { src: "/public/images/home-image-1.jpg" },
    { src: "/public/images/home-image-2.jpg" },
    { src: "/public/images/home-image-3.jpg" },
    { src: "/public/images/home-image-4.jpg" },
    { src: "/public/images/home-image-5.jpg" },
    { src: "/public/images/home-image-6.jpg" }
  ];

  return (
    <HomeContainer>
      <Title>欢迎来到 Beibei Child Care!</Title>
      <Introduction>
        Beibei Child Care成立于2025年1月，是一个坐落于麻省Canton小镇的家庭幼儿园。园长Jane老师在麻省拥有超过6年的儿童护理和照顾婴幼儿经验，广受家长们的好评。
      </Introduction>
      <SliderContainer>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <Image src={image.src} />
            </div>
          ))}
        </Slider>
      </SliderContainer>
    </HomeContainer>
  );
}

export default Home; 