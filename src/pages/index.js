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
import githubLogo from "../images/github_logo.svg";

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Elijah Dangerfield</h1>
        <p>Enthusiastic mobile developer and computer scientist</p>
         <img src={require('../images/eli-logo.png').default} width="350px"></img>
        <Wave />
      </div>
      <div className="AboutSection" id={"about"}>
        <h2>About</h2>
        <p>
          Hi there! My name is Elijah Dangerfield. I am a computer scientist
          with a passion for learning and creating. I have a bachelors degree in
          computer science and a minor in mathematics. The majority of my
          computer science work has been in Android development while more
          recently branching into iOS development and React/React native (hence
          the website). I love what I do and I hope its obvious in my projects
          below :)
        </p>
      </div>
      <div className="Cards" id={"projects"}>
        <h2>Projects</h2>
        <div className="CardGroup">
          <Card
            title="Odd One Out"
            link="https://github.com/Elijah-Dangerfield/Spyfall"
            text="Android Application"
            image={require("../images/wallpaper.jpg").default}
          />

          <Card
            title="Notable"
            link="https://github.com/Elijah-Dangerfield/Notable"
            text="First Dive into Android Compose"
            image={require("../images/wallpaper.jpg").default}
          />

          <Card
            title="Would You Rather"
            link="https://github.com/Elijah-Dangerfield/Would-You-Rather/blob/master/README.md"
            text="Android & iOS Application"
            image={require("../images/wallpaper2.jpg").default}
          />
        

          <Card
            title="Trivia App"
            text="Tiny Android Project for an Article Series"
            link="https://github.com/Elijah-Dangerfield/TriviaApp"
            image={require("../images/wallpaper3.jpg").default}
          />

          <Card
            title="Portfolio"
            text="React Project"
            link="https://github.com/Elijah-Dangerfield/Portfolio"
            image={require("../images/wallpaper4.jpg").default}
          />

        </div>
      </div>
      <div id={"experience"} className="ExperienceSection">
        <h2>Experience</h2>

        <ExperienceCell
          image={require("../images/Hinge_Logo.png").default}
          company="Hinge"
          position="Senior Android Developer"
          time="2023 - Current"
          details="At Hinge my role is Senior Android Developer. I work with a team of awesome people. I'll update this section when there is more to say :)"
        />

        <ExperienceCell
          image={require("../images/Disney_Logo.png").default}
          company="Disney+ & Hulu"
          position="Senior Android Developer"
          time="2021 - 2023"
          details="At Disney I Helped lead and advise the introduction of Coroutines and Flow in the Disney code base as part of a council of developers responsible for technological advancements.
          I had the opportunity to lead the Hulu Android account unification project allowing users to share credentials across Disney streaming services while collaborating and advising other developers. 
          I also contributed to the maintenance and enhancement of the Hulu, Disney+, and Star+ Android applications in a unified code base leveraging technologies including Kotlin, Java, Coroutines, Flow, RxJava, Hilt, MVI, Feature Flagging, Google Billing, Groupie and more. 
          Lastly I collaborated on the initiative to modularize and unify the code bases of Hulu, Disney+, and Star+. 
          "
        />

        <ExperienceCell
          image={require("../images/iheart-logo.jpg").default}
          company="iHeart Radio"
          position="Android Developer"
          time="2020 - 2021"
          details="At iHeart Radio my role is Associate Android developer. I work on a team of people contributing to updating and maintaining the flagship Android application in conjunction with other development teams. I have implemented multiple client facing features utilizing MVI architecture, kotlin, java and RX Java."
        />
        <ExperienceCell
          image={require("../images/takl-logo.png").default}
          company="Takl"
          position="Mobile Developer"
          time="2019 - 2020"
          details="At Takl Home services my primary role was Android development. I contributed to maintaining and updating the Takl application to a base of over 250k users. I have created multiple client facing features utilizing Kotlin, Java and reactive programming with RX Java. Additionally I contributed to the React Takl+ web app creating multiple client facing feactures on a scrum workflow using Typescript. "
        />
        <ExperienceCell
          image={require("../images/mtsu-logo.png").default}
          company="Middle Tennessee State University"
          position="Mobile Developer"
          time="2018 - 2020"
          details="At MTSU I develop for the Android and iOS platforms. I contribute to a team of 9 developer on maintaining and improving the MTSU mobile application for the use for the student body (30k +). I work on refactoring both the Android and iOS code bases to follow MVVM architecture and reactive programming using RX Swift and Live Data. "
        />
        <ExperienceCell
          image={require("../images/ubs-logo.png").default}
          company="UBS Financial"
          position="IT Intern"
          time="Summer 2019"
          details="At UBS Financial I worked as an IT Intern working on the big data team. I contributed to a data analytics platform by creating a Scala-Python integration API to work with Apache Spark. I got to work with additional data analytics tools through implementing an AWS data quality assurance tool as P.O.C using Databricks. As a side project during the internship I worked on a team of interns assessing popular data loss prevention techniques and implementing secondary solutions to a preexisting system "
        />
      </div>

      <div id={"contact"}>
        <h2>Contact</h2>
        <ContactSection>
          <Contact
            logo={require("../images/logo-github2.png").default}
            link="https://github.com/Elijah-Dangerfield"
            title="Github"
          />
          <Contact
            logo={require("../images/logo-linkedin.png").default}
            link="https://www.linkedin.com/in/elijahdangerfield/"
            title="LinkedIn"
          />
          <Contact
            logo={require("../images/logo-email.png").default}
            link="mailto: elijahdangerfield111@gmail.com"
            title="Email"
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
