import React from 'react';

class SecondCardContent extends React.Component {
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
      <div>
        <h1 style={{'text-align': 'center'}}>Hello, World!</h1>
        <div id="disqus_thread"></div>
      </div>
    );
  }
}

export default SecondCardContent;