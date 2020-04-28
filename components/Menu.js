import React, { Component } from 'react'
import Link from 'next/link'

class Menu extends Component {
  render() {
    const { showMenu } = this.props

    return (
      <section className={`menu ${showMenu ? 'menu--active' : ''}`}>
          <header className="menu__hd">
            <div className="menu__hd__content">
              <a href="#" className="menu__hd__content__hamb" />
              <a href="#" className="menu__hd__content__lg icon-lg" />
            </div>
          </header>
          <div className="menu__content">
            <ul className="menu__content__list">
              <li className="menu__content__list__item"><Link href="/"><a>Home</a></Link></li>
              <li className="menu__content__list__item"><Link href="/issues"><a href="#">Issues</a></Link></li>
              <li className="menu__content__list__item"><Link href="/artists"><a href="#">Artists</a></Link></li>
              <li className="menu__content__list__item"><Link href="/about"><a href="#">About</a></Link></li>
              <li className="menu__content__list__item"><Link href="/submit"><a href="#">Submit</a></Link></li>
            </ul>
            {/* <div className="menu__content__lang">
              <a href="#" className="active">eng</a><span>-</span><a href="#">esp</a>
            </div> */}
            <div className="menu__content__social">
              <p className="menu__content__social__title">Follow us / Find us</p>
              <ul className="menu__content__social__list">
                <li className="menu__content__social__list__item">
                  <a href="#" className="icon-ig" />
                </li>
                <li className="menu__content__social__list__item">
                  <a href="#" className="icon-yt" />
                </li>
                <li className="menu__content__social__list__item">
                  <a href="#" className="icon-spotify" />
                </li>
                <li className="menu__content__social__list__item">
                  <a href="#" className="icon-pinterest" />
                </li>
                <li className="menu__content__social__list__item">
                  <a href="#" className="icon-fb" />
                </li>
                <li className="menu__content__social__list__item">
                  <a href="#" className="icon-tw" />
                </li>
              </ul>
            </div>
          </div>
        </section>
    )
  }
}

export default Menu