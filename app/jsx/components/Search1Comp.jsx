// ##### Search Component ##### //

import React from 'react'

class SearchComp1 extends React.Component {
  render() {
    return (
      <div className="c-search1">
        <label className="c-search1__label" htmlFor="c-search1__field">search</label>
        <input type="search" id="c-search1__field" className="c-search1__field" placeholder="Search for articles, books, theses, and more"/>
        <button className="c-search1__submit-button" aria-label="submit search"></button>
        <button className="c-search1__search-close-button" aria-label="close search field" onClick = {()=>this.props.onClose()}></button>
      </div>
    )
  }
}

module.exports = SearchComp1;
