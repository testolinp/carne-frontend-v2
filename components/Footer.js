import React, { Component } from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"

class Footer extends Component {
  render() {
    const { currentYear } = this.props
    const url = "https://gmail.us20.list-manage.com/subscribe/post?u=d2265e587db33f9a2bdd34548&id=4cb203184f"

    return (
      <footer className="ft">
        <div className="ft__content">
          <div className="ft__content__left">
            <a href="#" className="ft__content__left__lg icon-lg" />
            <span className="ft__content__left__copy">© { currentYear } CARNEMAG. All rights reserved.</span>
          </div>
          <div className="ft__content__center">
            <div className="ft__content__center__subscribe">
              <h3 className="ft__content__center__subscribe__title"><strong>Subscribe to</strong> newsletter</h3>
              <div className="ft__content__center__subscribe__input">
                <MailchimpSubscribe url={url} />
                {/* 
                  <input type="text" placeholder="Enter your email address" />
                  <a href="#" className="ft__content__center__subscribe__input__btn icon-arrow" />
                */}
              </div>
            </div>
          </div>
          <div className="ft__content__right">
            <div className="ft__content__right__share">
              <h3 className="ft__content__right__share__title"><strong>Find</strong> us on</h3>
              <ul className="ft__content__right__share__list">
                <li className="ft__content__right__share__list__item">
                  <a href="https://www.instagram.com/carnemag/" target="_blank" className="icon-ig" />
                </li>
                {/*
                <li className="ft__content__right__share__list__item">
                  <a href="#" className="icon-yt" />
                </li>
                <li className="ft__content__right__share__list__item">
                  <a href="#" className="icon-spotify" />
                </li>
                <li className="ft__content__right__share__list__item">
                  <a href="#" className="icon-pinterest" />
                </li>
                */}
                <li className="ft__content__right__share__list__item">
                  <a href="https://www.facebook.com/carnemag/" target="_blank" className="icon-fb" />
                </li>
                <li className="ft__content__right__share__list__item">
                  <a href="https://twitter.com/carnemag" target="_blank" className="icon-tw" />
                </li>
              </ul>
            </div>
            <span className="ft__content__right__copy">
              © { currentYear } CARNEMAG. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer