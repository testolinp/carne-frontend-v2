import React, { Component } from 'react'

import Layout from '../components/Layout'
class About extends Component {
  render() {
    return (
      <section>
        <Layout title="Carnemag® | Submit">
          <section className="submit">
            <div className="submit__content">
              <div className="submit__content__title">
                <h2>Submit <span>your</span><span>work</span></h2>
              </div>
              <div className="submit__content__data icon-arrow">
                <h4>CarneMag® is an independent digital magazine destined to promote contemporary art, illustration, photography, fashion & design. Our main goal is to build a two lane bridge between artists and the public. A space to connect them with each other.<span>-</span></h4>
                <p>If you have content that you would like to share with us and the world, feel free to submit it here!</p>
                <p>While we can not guarantee that your work will be selected for use, we assure you that your work will be reviewedand considered by our Editors Panel.</p>
              </div>
            </div>
            <span className="submit__visual">Visual Arts Magazine</span>
          </section>

          <section className="form">
            <div className="form__content">
              <div className="form__content__wrapper">
                <h2 className="form__content__title">Form <span>&amp; specs</span></h2>
                <p className="form__content__description">Size and ratio are your choice. The bigger the better. Acceptable formats: .PNG or .JPG at 72dpi resolution (RGB) for images.</p>
                <p className="form__content__description">Videos should be Vimeo or YouTube Links. <span>Amount: as much as you like.</span></p>
              </div>
              <form name="works" method="post" action="/about" data-netlify="true">
                <div className="form__content__data">
                  <div className="form__content__data__sep">
                    <label>Full name*</label>
                    <input type="text" placeholder="Your full name" name="fullname" />
                  </div>
                  <div className="form__content__data__sep">
                    <label>Aka</label>
                    <input type="text" placeholder="Also know as" name="nickname" />
                  </div>
                  <div className="form__content__data__sep">
                    <label>Field of submission*</label>
                    <input type="text" placeholder="Film, design ,etc" name="submission" />
                  </div>
                  <div className="form__content__data__sep">
                    <label>Email*</label>
                    <input type="email" placeholder="Your email" name="email" />
                  </div>
                  <div className="form__content__data__sep">
                    <label>Instagram account</label>
                    <input type="text" placeholder="@yourhandle" name="instagram" />
                  </div>
                  <div className="form__content__data__sep">
                    <label>Website</label>
                    <input type="text" placeholder="http://yourwebsite" name="website" />
                  </div>
                  <div className="form__content__data__sep form__content__data__sep--textarea">
                    <label>Description of submission*</label>
                    <textarea placeholder="Comments" name="comments"></textarea>
                  </div>
                  <div className="form__content__data__sep">
                    <label>Link to submission*</label>
                    <input type="text" placeholder="http://" name="url" />
                  </div>
                </div>
                <div className="form__content__btn">
                  <button type="submit" className="form__content__btn__link icon-arrow">Submit your work</button>
                </div>
              </form>
            </div>
          </section>
        </Layout>
      </section>
    )
  }
}

export default About