import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell"
import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
         Elijah Dangerfield
        </h1>
        <p>
          Enthusiastic computer scientist with mobile and web experience. 
        </p>
        <Link to="/video">Github</Link>
        {/* <div className="Logos">
          <img src={require("../images/logo-sketch.png")} width="50"></img>
          <img src={require("../images/logo-figma.png")} width="50"></img>
          <img src={require("../images/logo-studio.png")} width="50"></img>
          <img src={require("../images/logo-framer.png")} width="50"></img>
          <img src={require("../images/logo-react.png")} width="50"></img>
          <img src={require("../images/logo-swift.png")} width="50"></img>
        </div> */}
        <Wave />
      </div>
      <div className="Cards">
        <h2>About</h2>
        <div className="CardGroup">
          <Card
            title="React for designers"
            text="12 sections"
            image={require("../images/wallpaper.jpg")}
          />
          <Card
            title="Design Sytem"
            text="8 sections"
            image={require("../images/wallpaper2.jpg")}
          />
          <Card
            title="Sound Design"
            text="9 sections"
            image={require("../images/wallpaper3.jpg")}
          />
          <Card
            title="AR Kit"
            text="11 sections"
            image={require("../images/wallpaper4.jpg")}
          />
        </div>
      </div>
      <Section
        image={require("../images/wallpaper2.jpg")}
        logo={require("../images/logo-react.png")}
        title="React for designers"
        text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
      />
      <div className="SectionsGroup">
        <SectionCaption>12 sections - 6 hours</SectionCaption>
        <SectionCellGroup>
          {staticdata.cells.map(cell => (
            <Cell title={cell.title} image={cell.image} />
          ))}
        </SectionCellGroup>
      </div>
    </div>
  </Layout>
)

export default IndexPage

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
