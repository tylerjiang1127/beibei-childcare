import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 120px 20px 20px;
  max-width: 1200px;
  margin: 0 auto;
`
function Environment() {
  return (
    <Container>
      <h1>环境</h1>
      <p>图片展示区域</p>
    </Container>
  )
}

export default Environment
