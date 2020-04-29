import React, { Component } from 'react'

import Extra from '../home/Extra'

class HerospaceIssue extends Component {
  getDate(date) {
    var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    const newDate = new Date(date)

    return <span className="herospace-issue__date">{ monthShortNames[newDate.getMonth()]} <span>{ newDate.getFullYear()}</span></span>
  }

  render() {
    const { currentYear, issue } = this.props

    const imageBackground = {
      backgroundImage: 'url(' + issue.Herospace.url + ')'
    }

    return (
      <section className="herospace-issue" style={ imageBackground }>
        <div className="herospace-issue__content">
          <div className="herospace-issue__content__left">
            <h2 className="herospace-issue__content__title">Carne®</h2>
            <h3 className="herospace-issue__content__number"><span>Issue</span> #{ issue.Number }</h3>
          </div>
          <ul className="herospace-issue__content__share">
            <li className="herospace-issue__content__share__item"><a href="#" className="icon-pinterest"></a></li>
            <li className="herospace-issue__content__share__item"><a href="#" className="icon-fb"></a></li>
            <li className="herospace-issue__content__share__item"><a href="#" className="icon-tw"></a></li>
            <li className="herospace-issue__content__share__item"><a href="#" className="icon-mail"></a></li>
          </ul>
        </div>
        <span className="herospace-issue__visual">Visual Arts Magazine</span>
        { this.getDate(issue.Publish) }
        <Extra currentYear={ currentYear } />
      </section>
    )
  }
}

export default HerospaceIssue