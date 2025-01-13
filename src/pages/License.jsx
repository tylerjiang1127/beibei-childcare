import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 120px 20px 20px;
  max-width: 1200px;
  margin: 0 auto;
`
const Title = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
`

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`

const QualificationItem = styled.div`
  margin-bottom: 1.5rem;
`

function License() {
  return (
    <Container>
      <Title>执照和资质</Title>
      <Content>
        <QualificationItem>
          <h3>营业执照</h3>
          <p>Beibei Child Care于2025年1月获得麻省托儿所营业执照</p>
        </QualificationItem>
        <QualificationItem>
          <h3>教师资质</h3>
          <p>Jane老师持有联邦CDA（Child Development Associate）证书</p>
          <p>拥有6年以上的儿童护理和教育经验</p>
        </QualificationItem>
        <QualificationItem>
          <h3>托管资质</h3>
          <p>可接收5-36个月的婴幼儿</p>
          <p>持有儿童急救证书</p>
          <p>通过麻省CORI背景审查</p>
        </QualificationItem>
      </Content>
    </Container>
  )
}

export default License 
