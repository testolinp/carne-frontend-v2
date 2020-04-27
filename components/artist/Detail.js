import React, { Component } from 'react'

import Extra from '../home/Extra'

class ArtistDetail extends Component {
  render() {
    const { currentYear, model } = this.props
    const { name, lastname, image, rol, country } = model

    const backgroundImage = {
      backgroundImage: 'url(' + 'http://3.21.165.5:1337/' + image.url + ')'
    }

    return (
      <section className="artistIssue" style={ backgroundImage }>
        <div className="artistIssue__content">
          <div className="artistIssue__content__columns">
            <div className="artistIssue__content__left">
              <h2 className="artistIssue__content__title"><span>{ name }</span> { lastname }</h2>
              <h3 className="artistIssue__content__subtitle">{ rol }<br />{ country && <span>{ country }</span> }</h3>
            </div>
          </div>
        </div>
        <Extra currentYear={ currentYear }  />
      </section>
    )
  }
}

export default ArtistDetail