import React, { Component } from 'react'
import Link from 'next/link'

import Extra from './Extra'
class Issue extends Component {
  getDate(date) {
    var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    const newDate = new Date(date)

    return <span className="issue__date">{ monthShortNames[newDate.getMonth()]} <span>{ newDate.getFullYear()}</span></span>
  }

  render() {
    const { currentYear, issues, issue, current } = this.props
    const { Herospace, Number, highlight_artists, secondary_artists, Publish } = issue

    const imageBackground = {
      backgroundImage: 'url(' + Herospace.url + ')',
    }

    return (
      <section className="issue" style={ imageBackground }>
        <div className="issue__content">
          <div className="issue__content__left">
            <h2 className="issue__content__title">Issue</h2>
            <h3 className="issue__content__number">#{ Number }</h3>
            <div className="issue__content__wrapper">
              {/* <div className="issue__content__wrapper__artist">– { highlight_artists }</div> */}
              <div className="issue__content__wrapper__pictures">
                {/* <span>–</span> */}
                { secondary_artists }
              </div>
              <div className="issue__content__wrapper__issue"><span>iss<sup>u</sup></span>ues</div>
            </div>
          </div>
          <div className="issue__content__extra">
            <div className="issue__content__extra__check">
              {/* <Link href={{ pathname: '/issue', query: { slug: Number } }}><a><strong>Check</strong> it out <span className="icon-arrow" /></a></Link> */}
            </div>
            <p className="issue__content__extra__numbers"><span>{ current }</span>/{ issues }</p>
          </div>
        </div>
        <span className="issue__visual">Visual Arts Magazine</span>
        { this.getDate(Publish) }
        <Extra currentYear={ currentYear }/>
      </section>
    )
  }
}

export default Issue