// ##### Item Actions Component ##### //

import React from 'react'
import ShareComp from '../components/ShareComp.jsx'

class ItemActionsComp extends React.Component {
  render() {
    return (
      <div className="c-itemactions">
        <div className="c-itemactions__items1">
          <span>[download object to go here]</span>
          <button className="c-itemactions__button1 o-button__6">Buy in Print</button>
          <button className="c-itemactions__button2 o-button__6">Buy e-Book</button>
        </div>
        <div className="c-itemactions__items2">
          <ShareComp />
        </div>
      </div>
    )
  }
}

module.exports = ItemActionsComp;
