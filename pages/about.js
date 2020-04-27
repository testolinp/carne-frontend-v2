import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
import AboutUs from '../components/about/AboutUs'
import Team from '../components/about/Team'
import Join from '../components/about/Join'

class About extends Component {
  render() {
    const { members } = this.props

    return (
      <section>
        <Layout title="Carnemag® | About Us">
          <AboutUs />
          <Team members={ members } />
          <Join />
        </Layout>
      </section>
    )
  }
}

About.getInitialProps = async () => {
  const res = await fetch('http://3.21.165.5:1337/teams')
  const members = await res.json()

  return {
    members: members
  }
}

export default About