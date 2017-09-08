import React from 'react';
import './styles/CardFirstDeploymentContent.scss';

class CardFirstDeploymentContent extends React.Component {
  componentDidMount() {
    (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://statelog-us.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }
  
  render() {
    return(
      <div className="first-deployment">
        <div className="title">
          <h1>Got a job in Pet Planet</h1>
        </div>
        <div className="content">
          <p>
            Hello, My name is Stanislav, I am from Uzbekistan. The main thing which I realized
            is that my future is big. To live a good live you have to try a lot of things and 
            work hard to accomplish goals which you want.
          </p>
          <code>
            cd Programming
          </code>
        </div>
        <div id="disqus_thread"></div>
      </div>
    )
  }
}

export default CardFirstDeploymentContent;
