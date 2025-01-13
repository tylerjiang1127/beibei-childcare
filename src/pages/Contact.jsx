import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 120px 20px 20px;
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h1`
  margin-bottom: 3rem;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`

const ContactCard = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 3rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.colors.secondary};
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 18px;
    opacity: 0.3;
    pointer-events: none;
  }
`

const ContactInfo = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
`

const ContactItem = styled.div`
  margin-bottom: 1.2rem;
  padding-bottom: 1.2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  &:not(:last-child) {
    border-bottom: 1px dashed ${props => props.theme.colors.secondary};
  }
`

const Label = styled.span`
  font-weight: bold;
  min-width: 80px;
  color: ${props => props.theme.colors.primary};
`

const Link = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

function Contact() {
  return (
    <Container>
      <Title>联系我们</Title>
      <ContactCard>
        <ContactInfo>
          <ContactItem>
            <Label>地址：</Label>
            <span>82 Oak Road, Canton MA 02021</span>
          </ContactItem>
          <ContactItem>
            <Label>电话：</Label>
            <Link href="tel:617-763-3185">617-763-3185</Link>
          </ContactItem>
          <ContactItem>
            <Label>微信：</Label>
            <span>wjjwang38</span>
          </ContactItem>
          <ContactItem>
            <Label>邮箱：</Label>
            <Link href="mailto:janewangbj@gmail.com">janewangbj@gmail.com</Link>
          </ContactItem>
        </ContactInfo>
      </ContactCard>
    </Container>
  )
}

export default Contact
