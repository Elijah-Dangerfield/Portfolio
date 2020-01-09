import React from "react"
import styled from "styled-components"
import Wave from "../components/Wave"

const Section = props => (
  <SectionGroup image={props.image}>
    <WaveBottom>
      <Wave />
    </WaveBottom>
    <WaveTop>
      <Wave />
    </WaveTop>
    <SectionLogo src={props.logo} />
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section

const SectionGroup = styled.div`
  margin: 100px 0 0;
  background: url(${props => props.image});
  background-size: cover;
  height: 820px;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;
`

const SectionLogo = styled.img`
  width: 128px;
  margin: 0 auto;
  align-self: end;
`

const SectionTitleGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 300px auto;
  grid-template-rows: auto 100%;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 640px) {
    font-size: 40px;
  }
`

const SectionText = styled.p`
  margin: 0;
  color: white;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
`
