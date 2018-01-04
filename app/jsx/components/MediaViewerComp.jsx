// ##### Media Viewer Component ##### //

import React from 'react'
import MediaFeatureAudioObj from '../objects/MediaFeatureAudioObj.jsx'
import MediaFeatureDataObj from '../objects/MediaFeatureDataObj.jsx'
import MediaFeatureImageObj from '../objects/MediaFeatureImageObj.jsx'
import MediaFeatureVideoObj from '../objects/MediaFeatureVideoObj.jsx'
import MediaViewerAudioObj from '../objects/MediaViewerAudioObj.jsx'
import MediaViewerDataObj from '../objects/MediaViewerDataObj.jsx'
import MediaViewerImageObj from '../objects/MediaViewerImageObj.jsx'
import MediaViewerVideoObj from '../objects/MediaViewerVideoObj.jsx'

class MediaViewerComp extends React.Component {
  state={mediaFeature: null}

  // To do: set focus to the mediaviewer somehow when mediaFeature state is not null
  focusIt = ()=> {
    document.querySelector('.c-mediaviewer').focus()
  }

  render() {
    return (
      <div className="c-mediaviewer">
      {/* When focus logic is implemented, change line above to:
      <div className="c-mediaviewer" tabIndex="-1">
      */}
        {this.state.mediaFeature == 1 ? <MediaFeatureAudioObj /> : null}
        {this.state.mediaFeature == 2 ? <MediaFeatureDataObj /> : null}
        {this.state.mediaFeature == 3 ? <MediaFeatureImageObj /> : null}
        {this.state.mediaFeature == 4 ? <MediaFeatureVideoObj /> : null}
        {/* ItemActions Component */}
        <div className="c-itemactions">
          <div className="o-input__droplist2">
            <label htmlFor="o-input__droplist-label2">Refine media type by:</label>
            <select name="" id="o-input__droplist-label2">
              <option value="">All</option>
              <option value="">Documents</option>
              <option value="">Images</option>
              <option value="">Videos</option>
              <option value="">Others</option>
            </select>
          </div>
          <div className="o-download">
            <a href="" className="o-download__button" download>Download All Files</a>
            <details className="o-download__formats">
              <summary aria-label="formats"></summary>
              <ul className="o-download__single-menu">
                <li><a href="">Image</a></li>
                <li><a href="">Audio</a></li>
                <li><a href="">Video</a></li>
                <li><a href="">Zip</a></li>
                <li><a href="">File</a></li>
              </ul>
            </details>
          </div>
        </div>
        {/* MediaFileGrid Component */}
        <div className="c-mediafilegrid">
          <MediaViewerAudioObj
            isSelected={this.state.mediaFeature == 1}
            openViewer={()=> this.setState({mediaFeature: 1})} />
          <MediaViewerDataObj
            isSelected={this.state.mediaFeature == 2}
            openViewer={()=> this.setState({mediaFeature: 2})} />
          <MediaViewerImageObj
            isSelected={this.state.mediaFeature == 3}
            openViewer={()=> this.setState({mediaFeature: 3})} />
          <MediaViewerVideoObj
            isSelected={this.state.mediaFeature == 4}
            openViewer={()=> this.setState({mediaFeature: 4})} />
        </div>
      </div>
    )
  }
}

module.exports = MediaViewerComp;
