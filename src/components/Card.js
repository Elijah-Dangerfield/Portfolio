import React from "react"
import styled from "styled-components"
import gituhb_logo from "../images/github_logo.svg"

const Card = props => (
  <Container target='_blank' href={props.link}>
    <BackImage src={props.image} />
    <Title>{props.title}</Title>
    <Subtext>{props.text}</Subtext>
    <Logo src={gituhb_logo} />
  </Container>
)

export default Card

const Container = styled.a`
  width: 300px;
  height: 225px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-rows: 1fr 1fr;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    transform: scale(1.1);
  }
`

const BackImage = styled.img`
  position: absolute;
  top: 0;
  height: 110%;
  z-index: -1;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    transform: translateY(-5%);
  }
`

const Title = styled.h3`
  color: white;
  font-size: 30px;
  text-align: center;
`

const Logo = styled.img`
  width: 45px;
  margin: 20px auto;
`

const Subtext = styled.h4`
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  font-weight: 200;
  font-size: 20px;
  text-align: center;

  margin: 0 auto;
`
