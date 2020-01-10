import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
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
  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <Link to="/video">
            <img
              src={require("../images/eli-cartoon.png")}
              width="60"
            ></img>
          </Link>
          <Link to="/courses">About</Link>
          <Link to="/dowloads">Projects</Link>
          <Link to="/workshops">Experience</Link>
          <Link to="/buy">
            <button>Contact</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
