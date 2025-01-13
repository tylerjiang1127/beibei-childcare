import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 120px 20px 20px;
  max-width: 1200px;
  margin: 0 auto;
`

function Philosophy() {
  return (
    <Container>
      <h1>办学理念</h1>
      <p>我们致力于为幼儿提供安全、健康、温暖和富有趣味的成长环境，让他们在充满关爱、好奇的自由环境中探索和学习；在快乐的童年生活中获得有益身心发展的经验；学会独立和自我管理；并通过音乐、舞蹈、朗诵表演和绘画的启蒙，培养他们一生幸福所需要的经验和智慧。</p>
    </Container>
  )
}

export default Philosophy