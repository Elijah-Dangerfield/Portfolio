import React from "react"
import styled from "styled-components"

const ExperienceCell = props => (
  <Container>
    <Logo src={props.image}></Logo>
    <DetailsWrapper>
      <Company>{props.company}</Company>
      <Position>{props.position}</Position>
      <Details>{props.details}</Details>
    </DetailsWrapper>
  </Container>
)
export default ExperienceCell

const Container = styled.div`
  width: 80%;
  margin: 40px auto;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`

const Logo = styled.img`
  height: 50px;
  margin: 20px 20px 0px;
`
const Company = styled.h3`
  color: "black";
  margin: 0;
  font-size: 30px;
`
const Position = styled.h3`
  color: "black";
  font-size: 28px;
  margin-top: 10px;
  font-weight: 200;
`

const DetailsWrapper = styled.div`
  margin: 10px 24px 40px 24px;
`
const Details = styled.p`
  color: rgba(0, 0, 0, 0.8);
  margin: 0;
  font-size: 20px;
`
