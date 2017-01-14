import React, { Component } from 'react';
import './styles/Home.css';

class Home extends Component {
  render() {
    return(
      <div>
        <p>
          <span>
            Hello, my name is Stanislav. I was born in Tashkent, Uzbekistan.
            Now, I am living in Seoul, South Korea. My dream is to become a
            web-programmer.
          </span>
        </p>
        <p>
            <span>
              OMG! Today is 15th January of 2017 and I finally deployed
              my first application! It 6:30 AM!!!! So tired, but HAPPY!!
            </span>
        </p>
      </div>
    );
  }
}

export default Home;
