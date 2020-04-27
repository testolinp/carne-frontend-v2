import React, { Component } from 'react'

import Extra from './Extra'
class Artist extends Component {
  render() {
    const { currentYear, featuredArtist } = this.props
    const { image, name, rol, country, lastname, issue } = featuredArtist
    const imageBackground = {
      backgroundImage: 'url(' + image.url + ')',
    }

    return (
      <section className="artist" style={ imageBackground }>
        <div className="artist__content">
          <div className="artist__content__columns">
            <div className="artist__content__left">
              <span className="artist__content__issue">issue <small>#{ issue.number }</small></span>
              <h2 className="artist__content__title"><span>{ name }</span> { lastname }</h2>
              <h3 className="artist__content__subtitle">{ rol }<br /><span>{ country }</span></h3>
              <p className="artist__content__featured">Featured</p>
              <p className="artist__content__artist">Artist</p>
            </div>
          </div>
          <div className="artist__content__extra">
            <div className="artist__content__extra__check">
              <a href="#"><strong>Check</strong> it out<span className="icon-arrow" /></a>
            </div>
            <p className="artist__content__extra__photography">{ rol }<br /><span>{ country }</span></p>
          </div>
        </div>
        <span className="artist__date">Issue<span>#{ issue.number }</span></span>
        <Extra currentYear={ currentYear }  />
      </section>
    )
  }
}

export default Artist