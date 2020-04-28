import React, { Component } from 'react'
import Link from 'next/link'

import '../scss/styles.scss'
import Menu from '../components/Menu'

class Header extends Component {
  state = {
    menuActive: false
  }

  showMenu = (val) => {
    this.setState({
      menuActive: val
    })
  }

 render() {
  const { menuActive } = this.state

  return (
    <div>
      <header className="hd">
        <div className="hd__content">
          <a href="#" className="hd__content__hamb icon-burger" onClick={() => this.showMenu(true)} />
          <Link href="/"><a className="hd__content__lg icon-lg" /></Link>
          <ul className="hd__content__link">
            <li className="hd__content__link__item">
              <Link href="issues"><a><strong>ISS</strong>UES</a></Link>
            </li>
            <li className="hd__content__link__item">
              <Link href="artists"><a><strong>ART</strong>ISTS</a></Link>
            </li>
            <li className="hd__content__link__item">
              <Link href="about"><a><strong>ABO</strong>UT</a></Link>
            </li>
            {/* <li className="hd__content__link__item">
              <Link route="submit"><a><strong>SUB</strong>MIT</a></Link>
            </li> */}
          </ul>
          {/*
          <div className="hd__content__lang">
            <a href="#" className="active">ENG</a> - <a href="#">ESP</a>
          </div>
          */}
        </div>
      </header>

      <Menu showMenu={ menuActive } />
    </div>
  )
 }
}

export default Header