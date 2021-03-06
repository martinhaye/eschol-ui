// ##### Hero Component ##### //

import React from 'react'
import MEDIA_PATH from '../../js/MediaPath.js'

class HeroComp extends React.Component {
  render() {
    return (
      <div className="c-hero" style={{backgroundImage: "url('"+ MEDIA_PATH + 'hero-ucd.jpg'+"')"}}>
        <h1>Open Access Publications from the University of California</h1>
        <div className="c-hero__campus">
          <span>UC Davis</span>
          <a href="">Explore all of our campuses</a>
        </div>
      </div>
    )
  }
}

module.exports = HeroComp;
