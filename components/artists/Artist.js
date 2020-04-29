import React, { Component } from 'react'
import Link from 'next/link'
import Extra from '../home/Extra'

class ArtistIssue extends Component {
  render() {
    const { currentYear, model } = this.props
    const { issue, name, lastname, country, rol, image } = model
    const backgroundImage = {
      backgroundImage: image ? 'url(' + image.url + ')' : 'none'
    }

    return (
      <section className="artistIssue" style={ backgroundImage }>
        <div className="artistIssue__content">
          <div className="artistIssue__content__columns">
            <div className="artistIssue__content__left">
              <h2 className="artistIssue__content__title"><span>{ name }</span> { lastname }</h2>
              <h3 className="artistIssue__content__subtitle">{ rol }<br />{ country && <span>{ country }</span> }</h3>
              <div className="artistIssue__content__extra">
                <Link href={{ pathname: '/artist', query: { name: name, lastname: lastname } }}><a className="artistIssue__content__extra__check"><strong>More</strong> info <span className="icon-arrow" /></a></Link>
              </div>
            </div>
          </div>
        </div>
        <Extra currentYear={ currentYear }  />
      </section>
    )
  }
}

export default ArtistIssue