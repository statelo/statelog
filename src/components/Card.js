import React from 'react';
import './styles/Card.scss';
import { Link } from 'react-router';

class Card extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
          <h3 className="header">My First Deployment</h3>

          <p>
            <span>
              OMG! Today is 15th January of 2017 and I finally deployed
              my first application! It 6:30 AM!!!! So tired, but HAPPY!!
            </span>
          </p>

          <p className="footer">05.01.2017</p>
          <Link to="/first-deployment" className="more">Read More</Link>
        </div>
      </div>
    );
  }
}

export default Card;