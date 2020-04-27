import React, { Component } from 'react'
import {FacebookShareButton, TwitterShareButton, PinterestShareButton, EmailShareButton } from 'react-share'

class Extra extends Component {
  render() {
    const { currentYear } = this.props

    return (
      <div className="extra">
        <div className="extra__share">
          <p className="extra__share__text"><span>Sha</span>re</p>
          <ul className="extra__share__list">
            <li className="extra__share__list__item">
            <PinterestShareButton media="http://carnemag.co/dist/images/bg-large.jpg" url="http://carnemag.co/" description="CarneMag® Visual Arts Magazine">
                <a href="#" className="icon-pinterest" />
              </PinterestShareButton>
            </li>
            <li className="extra__share__list__item">
              <FacebookShareButton url="http://carnemag.co/">
                <a alt="Facebook" href="#" className="icon-fb" />
              </FacebookShareButton>
            </li>
            <li className="extra__share__list__item">
              <TwitterShareButton url="http://carnemag.co/" title="CarneMag® Visual Arts Magazine">
                <a alt="Twitter" href="#" className="icon-tw" />
              </TwitterShareButton>
            </li>
            <li className="extra__share__list__item">
              <EmailShareButton url="http://carnemag.co/" subject="CarneMag® Visual Arts Magazine">
                <a alt="Mail" href="#" className="icon-mail" />
              </EmailShareButton>
            </li>
          </ul>
        </div>
        <p className="extra__text">&copy; { currentYear } CARNEMAG. All rights reserved.</p>
      </div>
    )
  }
}

export default Extra