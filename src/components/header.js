import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.css"
import styled from "styled-components"

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }

    //creates a reference for your element to use
    this.myDivToFocus = React.createRef()
  }

  componentDidMount () {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  handleOnClick = event => {
    //.current is verification that your element has rendered
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      })
    }
  }

  render () {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className='HeaderGroup'>
          <Link to='/#about'>About</Link>
          <Link to='/#projects'>Projects</Link>
          <Link to='/#experience'>Experience</Link>
          <Link to='/#contact'>Contact</Link>
        </div>
      </div>
    )
  }
}

export default Header

const Section = styled.button`
  color: white;
  font-weight: 700;
  background: transparent;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  border: none;
  outline: none;
  font-size: 18px;

  &:hover {
    transform: scale(1.2);
  }
`
