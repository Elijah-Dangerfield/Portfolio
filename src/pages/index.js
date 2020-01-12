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
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <div className='Hero'>
      <div className='HeroGroup'>
        <h1>Elijah Dangerfield</h1>
        <p>Enthusiastic computer scientist with mobile and web experience.</p>
        <img src={require("../images/eli-cartoon.png")} width='125'></img>
        <Wave />
      </div>
      <div className='AboutSection' id={"about"}>
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
      <div className='Cards' id={"projects"}>
        <h2>Projects</h2>
        <div className='CardGroup'>
          <Card
            title='Spyfall'
            link='https://github.com/Elijah-Dangerfield/Spyfall'
            text='Android Application'
            image={require("../images/wallpaper.jpg")}
          />
          <Card
            title='Would You Rather'
            link='https://github.com/Elijah-Dangerfield/Would-You-Rather/blob/master/README.md'
            text='Android & iOS Application'
            image={require("../images/wallpaper2.jpg")}
          />
          <Card
            title='A Star Search'
            text='AI Project'
            link='https://github.com/Elijah-Dangerfield/A-star-search'
            image={require("../images/wallpaper3.jpg")}
          />
          <Card
            title='Decision Tree'
            text='ML Project'
            link='https://github.com/Elijah-Dangerfield/Decision-Tree'
            image={require("../images/wallpaper4.jpg")}
          />

          <Card
            title='Kind'
            text='Collaborative Android Project'
            link='https://github.com/Elijah-Dangerfield/Kind'
            image={require("../images/wallpaper2.jpg")}
          />
          <Card
            title='Barbras Book'
            text='Android Project'
            link='https://github.com/Elijah-Dangerfield/BarbrasBook'
            image={require("../images/wallpaper2.jpg")}
          />

          <Card
            title='SentimentAnalysis'
            text='ML Project'
            link='https://github.com/Elijah-Dangerfield/SentimentAnalysis'
            image={require("../images/wallpaper.jpg")}
          />
        </div>
      </div>
      <div id={"experience"} className='ExperienceSection'>
        <h2>Experience</h2>
        <ExperienceCell
          image={require("../images/takl-logo.png")}
          company='Takl'
          position='Mobile Developer'
          time='2019 - Current'
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
          time='2018 - Current'
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
          time='Summer 2019'
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

      <div id={"contact"}>
        <h2>Contact</h2>
        <ContactSection>
          <Contact
            logo={require("../images/logo-github2.png")}
            link='https://github.com/Elijah-Dangerfield'
            title='Github'
          />
          <Contact
            logo={require("../images/logo-linkedin.png")}
            link='https://www.linkedin.com/in/elijahdangerfield/'
            title='LinkedIn'
          />
          <Contact
            logo={require("../images/logo-email.png")}
            link='mailto: elijahdangerfield111@gmail.com'
            title='Email'
          />
        </ContactSection>
      </div>
    </div>
  </Layout>
)

export default IndexPage

const ContactSection = styled.div`
  margin: 0 auto;
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`

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
