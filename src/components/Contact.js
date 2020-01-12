import React from "react"
import styled from "styled-components"

const Contact = props => (
  <Container>
    <Logo src={props.logo}></Logo>
    <Title>{props.title}</Title>
  </Container>
)

export default Contact

const Container = styled.div`
  position: relative;
  width: 128px;
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const Logo = styled.img`
  width: 80px;
  margin: 10px auto 0 auto;
`

const Title = styled.p`
  font-weight: 500;
  text-align: center;
`
