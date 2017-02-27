import React from 'react';
import './styles/SecondCard.scss';
import { Link } from 'react-router';

class SecondCard extends React.Component {
  render() {
    return (
      <div>
        <div className="second-card">
          <h3 className="card-header">My Second Card</h3>

          <p>
            <span>
              This is my second card. Me and Sergey are going to PC. We workouted today,
              but gonna get some food and OVERWATCH!
            </span>
          </p>

          <p className="card-footer">10.02.2017</p>
          <Link to="/" className="more"><button className="second-card-button">Read More</button></Link>
        </div>
      </div>
    );
  }
}

export default SecondCard;
