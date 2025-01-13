import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 120px 20px 20px;
  max-width: 1200px;
  margin: 0 auto;
`
function Strength() {
  return (
    <Container>
      <h1>优势</h1>
      <p>1. 家庭幼儿园，提供更多的关爱、更精细护理、更自然的社交和成长环境</p>
      <p>2. 沉浸式标准中文普通话，为孩子打下扎实的汉语基础</p>
      <p>3. 全方面培养孩子社交礼仪，广泛启蒙幼儿兴趣爱好</p>
      <p>4. 教师具有联邦CDA资质和经验，确保幼儿得到专业水准的护理和教育</p>
    </Container>
  )
}

export default Strength
