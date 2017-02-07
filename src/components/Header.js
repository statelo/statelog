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
      menu4: "AWESOME",
      about: "ABOUT ME"
    };
  }

  render() {
    return(
      <div>
        <header>
          <nav>
            <Link to="/" className="navlink-left">{ this.state.menu1 }</Link>
            <Link to="/tutorials" className="navlink-left">{ this.state.menu2 }</Link>
            <Link href="#" className="navlink-left">{ this.state.menu4 }</Link>

            <Link to="/about" className="navlink-right">{ this.state.about }</Link>
          </nav>

          <h1><span className="main">{ this.state.title }</span></h1>
        </header>
      </div>
    );
  }
}

export default Header;
