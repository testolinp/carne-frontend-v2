import React, { Component } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
class Layout extends Component {

  getCurrentYear = () => {
    return new Date().getFullYear()
  }

  render() {
    const { title } = this.props

    return (
      <section>
        <Head>
          <title>{ title }</title>
          <link rel="icon" href="/static/favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <section className="layout">
          <Header />
          { this.props.children }
          <Footer currentYear={this.getCurrentYear()} />
        </section>
      </section>
    )
  }
}

export default Layout