import React, { Component } from 'react';
import './styles/Header.scss';
import { Link } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "STATELO`S BLOG",
      menu1: "HOME",
      menu2: "TUTORIALS",
      menu3: "BLOGS",
      about: "ABOUT ME",
      signup: "SIGN UP",
      login: "LOGIN"
    };
  }

  render() {
    return(
      <div>
        <header>
          <nav>
            <Link to="/" className="navlink-left">{ this.state.menu1 }</Link>
            <Link to="/blogs" className="navlink-left">{ this.state.menu3 }</Link>
            <Link to="/tutorials" className="navlink-left">{ this.state.menu2 }</Link>
            <Link to="/about" className="navlink-left">{ this.state.about }</Link>
            <Link to="/signup" className="navlink-right">{ this.state.signup }</Link>
            <Link to="/login" className="navlink-right">{ this.state.login }</Link>
          </nav>

          <h1><span className="main">{ this.state.title }</span></h1>
        </header>
      </div>
    );
  }
}

export default Header;
