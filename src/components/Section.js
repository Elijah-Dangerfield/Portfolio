import React from "react"
import styled from "styled-components"

const Section = props => (
  <SectionGroup image={props.image}>
    <SectionLogo src={props.logo} />
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
)

const SectionGroup = styled.div``

const SectionLogo = styled.img``

const SectionTitleGroup = styled.div``

const SectionTitle = styled.h3``

const SectionText = styled.p``
