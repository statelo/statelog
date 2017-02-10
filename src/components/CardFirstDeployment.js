import React from 'react';
import './styles/CardFirstDeployment.scss';
import { Link } from 'react-router';

class CardFirstDeployment extends React.Component {
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
          <Link to="#" className="more"><button className="card-button">Read More</button></Link>
        </div>
      </div>
    );
  }
}

export default CardFirstDeployment;
