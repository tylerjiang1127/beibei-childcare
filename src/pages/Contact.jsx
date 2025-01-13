import React from 'react'
import styled from 'styled-components'

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

const ContactInfo = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
  font-size: 1.8rem;

  @media (max-width: 767px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.6;

  @media (max-width: 767px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    line-height: 1.4;
  }
`;

const Label = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  margin-right: 0.5rem;

  @media (max-width: 767px) {
    display: block;
    margin-bottom: 0.3rem;
  }
`;

const Text = styled.span`
  word-break: break-word;  // 确保长文本会换行
`;

const MapContainer = styled.div`
  margin-top: 2rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 767px) {
    margin-top: 1.5rem;
  }

  iframe {
    width: 100%;
    height: 400px;
    border: none;

    @media (max-width: 767px) {
      height: 300px;
    }
  }
`;

function Contact() {
  return (
    <ContactContainer>
      <Title>联系我们</Title>
      <ContactInfo>
        <InfoItem>
          <Label>地址：</Label>
          <Text>82 Oak Road, Canton MA 02021</Text>
        </InfoItem>
        <InfoItem>
          <Label>电话：</Label>
          <Text><a href="tel:617-763-3185">617-763-3185</a></Text>
        </InfoItem>
        <InfoItem>
          <Label>微信：</Label>
          <Text>wjjwang38</Text>
        </InfoItem>
        <InfoItem>
          <Label>邮箱：</Label>
          <Text><a href="mailto:janewangbj@gmail.com">janewangbj@gmail.com</a></Text>
        </InfoItem>
      </ContactInfo>
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.111711111111!2d-71.1575316845138!3d42.3499277791881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370a92b555555%3A0x1234567890abcdef!2s82%20Oak%20Road%2C%20Canton%2C%20MA%2002021!5e0!3m2!1sen!2sus!4v1638400000000!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </MapContainer>
    </ContactContainer>
  )
}

export default Contact
