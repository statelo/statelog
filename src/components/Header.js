import React, { Component } from 'react';
import './styles/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "STATELO`S BLOG",
      menu1: "HOME",
      menu2: "HAHA",
      menu3: "HOHO",
      menu4: "XDXD",
      about: "ABOUT ME"
    };
  }

  render() {
    return(
      <div>
        <header>
          <nav>
            <a href="#" className="navlink-left">{ this.state.menu1 }</a>
            <a href="#" className="navlink-left">{ this.state.menu2 }</a>
            <a href="#" className="navlink-left">{ this.state.menu3 }</a>
            <a href="/api/friends/nala" className="navlink-left">{ this.state.menu4 }</a>

            <a href="/" className="navlink-right">{ this.state.about }</a>
          </nav>

          <h1><span className="main">{ this.state.title }</span></h1>
        </header>
      </div>
    );
  }
}

export default Header;
