import React, { Component } from 'react'
import Link from 'next/link'
import { FacebookShareButton, TwitterShareButton, PinterestShareButton, EmailShareButton } from 'react-share'

import Extra from './Extra'

class Herospace extends Component {
  getDate(date) {
    var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    const newDate = new Date(date)

    return <span className="herospace__date">{ monthShortNames[newDate.getMonth()]} <span>{ newDate.getFullYear()}</span></span>
  }

  render() {
    const { currentYear, issue, showLink } = this.props
    const { Herospace, Number, highlight_artists, secondary_artists, Publish } = issue

    const imageBackground = {
      backgroundImage: 'url(' + 'http://3.21.165.5:1337/' + Herospace.url + ')',
    }

    return (
      <section className="herospace" style={ imageBackground }>
      <div className="herospace__content">
        <div className="herospace__content__columns">
          <div className="herospace__content__left">
            <h2 className="herospace__content__title">Carne®</h2>
            <h3 className="herospace__content__number"><span>Issue</span> #{ Number }</h3>
            <div className="herospace__content__wrapper">
              {/* <div className="herospace__content__wrapper__artist">
                – { highlight_artists }
              </div> */}
              <div className="herospace__content__wrapper__pictures">
                {/* <span>–</span> */}
                { secondary_artists }
              </div>
            </div>
          </div>
          <div className="herospace__content__right">
            <div className="herospace__content__wrapper">
              {/* <div className="herospace__content__wrapper__artist">
                – { highlight_artists }
              </div> */}
              <div className="herospace__content__wrapper__pictures">
                { secondary_artists }
              </div>
            </div>
          </div>
        </div>
        <div className="herospace__content__extra">
        {/* 
        <Link route="issue" params={{slug: issue.number }}><a className="herospace__content__extra__check"><strong>Check</strong> it out <span className="icon-arrow" /></a></Link>
        */}
        { showLink && <Link href={{ pathname: '/issue', query: { slug: Number } }}><a className="herospace__content__extra__check"><strong>Check</strong> it out <span className="icon-arrow" /></a></Link> }
        </div>
        <ul className="herospace__content__share">
          <li className="herospace__content__share__item">
            <PinterestShareButton media="http://carnemag.co/dist/images/bg-large.jpg" url="http://carnemag.co/" description="CarneMag® Visual Arts Magazine">
              <a href="#" className="icon-pinterest" />
            </PinterestShareButton>
          </li>
          <li className="herospace__content__share__item">
          <FacebookShareButton url="http://carnemag.co/">
            <a alt="Facebook" href="#" className="icon-fb" />
          </FacebookShareButton>
          </li>
          <li className="herospace__content__share__item">
            <TwitterShareButton url="http://carnemag.co/" title="CarneMag® Visual Arts Magazine">
              <a alt="Twitter" href="#" className="icon-tw" />
            </TwitterShareButton>
          </li>
          <li className="herospace__content__share__item">
            <EmailShareButton url="http://carnemag.co/" subject="CarneMag® Visual Arts Magazine">
              <a alt="Mail" href="#" className="icon-mail" />
            </EmailShareButton>
          </li>
        </ul>
      </div>
      <span className="herospace__visual">Visual Arts Magazine</span>
      { this.getDate(Publish) }
      <Extra currentYear={ currentYear }/>
    </section>
    )
  }
}

export default Herospace