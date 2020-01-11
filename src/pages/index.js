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
import ExperienceCell from "../components/ExperienceCell"

const IndexPage = () => (
  <Layout>
    <div className='Hero'>
      <div className='HeroGroup'>
        <h1>Elijah Dangerfield</h1>
        <p>Enthusiastic computer scientist with mobile and web experience.</p>
        <img src={require("../images/eli-cartoon.png")} width='125'></img>
        <Wave />
      </div>
      <div className='AboutSection'>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          imperdiet odio iaculis l orem sodales ullamcorper. Donec convallis
          euismod diam ut hendrerit. Nam maximus enim in augue pulvinar
          placerat. Vivamus condimentum ullamcorper lacus sed dictum. Integer
          enim purus, bibendum a felis vitae, accumsan fermentum lorem.
          Phasellus congue nibh quis lacinia rhoncus. Sed vel varius lorem, ut
          vestibulum tellus. Phasellus sed tortor ligula. Duis fermentum, ante
          quis tempus pretium, dolor ex elementum arcu, ut iaculis velit felis
          vitae mauris. Donec volutpat aliquet nulla, quis sodales neque
          ultrices ut. Donec metus orci, porttitor id justo vitae, cursus
          volutpat lorem. Vestibulum mollis a leo ut rhoncus. Sed in finibus
          est, id tristique sapien. Sed hendrerit velit sit amet libero rhoncus
          condimentum. Aenean porta eleifend enim. In posuere risus eu enim
          cursus ullamcorper.{" "}
        </p>
      </div>
      <div className='Cards'>
        <h2>Projects</h2>
        <div className='CardGroup'>
          <Card
            title='React for designers'
            text='12 sections'
            image={require("../images/wallpaper.jpg")}
          />
          <Card
            title='Design Sytem'
            text='8 sections'
            image={require("../images/wallpaper2.jpg")}
          />
          <Card
            title='Sound Design'
            text='9 sections'
            image={require("../images/wallpaper3.jpg")}
          />
          <Card
            title='AR Kit'
            text='11 sections'
            image={require("../images/wallpaper4.jpg")}
          />
        </div>
      </div>
      <div className='ExperienceSection'>
        <h2>Experience</h2>
        <ExperienceCell
          image={require("../images/takl-logo.png")}
          company='Takl'
          position='Mobile Developer'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          imperdiet odio iaculis l orem sodales ullamcorper. Donec convallis
          euismod diam ut hendrerit. Nam maximus enim in augue pulvinar
          placerat. Vivamus condimentum ullamcorper lacus sed dictum. Integer
          enim purus, bibendum a felis vitae, accumsan fermentum lorem.
          Phasellus congue nibh quis lacinia rhoncus. Sed vel varius lorem, ut
          vestibulum tellus. Phasellus sed tortor ligula. Duis fermentum, ante
          quis tempus pretium, dolor ex elementum arcu, ut iaculis velit felis'
        />
        <ExperienceCell
          image={require("../images/mtsu-logo.png")}
          company='Middle Tennessee State University'
          position='Mobile Developer'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          imperdiet odio iaculis l orem sodales ullamcorper. Donec convallis
          euismod diam ut hendrerit. Nam maximus enim in augue pulvinar
          placerat. Vivamus condimentum ullamcorper lacus sed dictum. Integer
          enim purus, bibendum a felis vitae, accumsan fermentum lorem.
          Phasellus congue nibh quis lacinia rhoncus. Sed vel varius lorem, ut
          vestibulum tellus. Phasellus sed tortor ligula. Duis fermentum, ante
          quis tempus pretium, dolor ex elementum arcu, ut iaculis velit felis'
        />
        <ExperienceCell
          image={require("../images/ubs-logo.png")}
          company='UBS Financial'
          position='IT Intern'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          imperdiet odio iaculis l orem sodales ullamcorper. Donec convallis
          euismod diam ut hendrerit. Nam maximus enim in augue pulvinar
          placerat. Vivamus condimentum ullamcorper lacus sed dictum. Integer
          enim purus, bibendum a felis vitae, accumsan fermentum lorem.
          Phasellus congue nibh quis lacinia rhoncus. Sed vel varius lorem, ut
          vestibulum tellus. Phasellus sed tortor ligula. Duis fermentum, ante
          quis tempus pretium, dolor ex elementum arcu, ut iaculis velit felis'
        />
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
