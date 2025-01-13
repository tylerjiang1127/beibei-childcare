import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 120px 20px 20px;
  max-width: 1200px;
  margin: 0 auto;
`

function AboutUs() {
  return (
    <Container>
      <h1>关于我们</h1>
      <p>Jane老师拥有 6年护理和教育婴幼儿经验，广受家长好评。</p>
      <p>Beibei Child Care于2025年1月获得牌照，接收5-36个月的宝宝。</p>
    </Container>
  )
}

export default AboutUs