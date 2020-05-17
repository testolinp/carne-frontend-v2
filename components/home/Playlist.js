import React, { Component } from 'react'
import Iframe from 'react-iframe'

import Extra from './Extra'

class Playlist extends Component {
  render() {
    const { currentYear, issuePlaylist } = this.props
    const { spotify, nickname, artist, background, issue } = issuePlaylist

    const imageBackground = {
      backgroundImage: 'url(' + background.url + ')',
    }

    return (
      <section className="playlist" style={ imageBackground }>
        <div className="playlist__content">
          <div className="playlist__content__left">
            <span className="playlist__content__issue">issue<small>#{ issue.Number }</small></span>
            <h2 className="playlist__content__title">Playlist <span>#{ issue.Number }</span></h2>
            <h3 className="playlist__content__name">by { nickname } <span>{ artist }</span></h3>
            <p className="playlist__content__spotify">Listen to this playlist <span className="icon-spotify">on Spotify</span></p>
          </div>
          <div className="playlist__content__right">
            <div className="playlist__content__spotifyBox">
              <div className="playlist__content__spotifyBox__content">
              <Iframe url={ spotify } width="100%" height="100%" display="initial" position="relative" allowFullScreen />
              </div>
              <div className="playlist__content__spotifyBox__text">Issue <small>Nº{ issue.Number }</small></div>
            </div>
          </div>
        </div>
        {/* <Extra currentYear={ currentYear }  /> */}
      </section>
    )
  }
}

export default Playlist