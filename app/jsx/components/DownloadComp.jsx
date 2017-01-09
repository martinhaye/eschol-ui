// ##### Download Component ##### //

import React from 'react'

class DownloadComp extends React.Component {
  render() {
    return (
      <details className="c-download">
        <summary>
          Download PDF
        </summary>
        <div className="c-download__menu">
          <div className="c-download__menu-heading" id="c-download__menu1">
            Main
          </div>
          <ul className="c-download__menu-list" aria-labelledby="c-download__menu1">
            <li><a href="">PDF</a></li>
            <li><a href="">ePub</a></li>
            <li><a href="">HTML</a></li>
          </ul>
          <div className="c-download__menu-heading" id="c-download__menu2">
            Citation
          </div>
          <ul className="c-download__menu-list" aria-labelledby="c-download__menu2">
            <li><a href="">RIS</a></li>
            <li><a href="">BibText</a></li>
            <li><a href="">EndNote</a></li>
            <li><a href="">RefWorks</a></li>
          </ul>
          <div className="c-download__menu-heading" id="c-download__menu3">
            Supplemental Material
          </div>
          <ul className="c-download__menu-list" aria-labelledby="c-download__menu3">
            <li><a href="">Image</a></li>
            <li><a href="">Audio</a></li>
            <li><a href="">Video</a></li>
            <li><a href="">Zip</a></li>
            <li><a href="">File</a></li>
          </ul>
        </div>
      </details>
    )
  }
}

module.exports = DownloadComp;
