import React from 'react'
import fetch from 'node-fetch'

import Layout from '../components/Layout'
import AboutUs from '../components/about/AboutUs'
import Team from '../components/about/Team'
import Join from '../components/about/Join'

function About({ members }) {
  return (
    <>
      <Layout title="Carnemag®">
          <AboutUs />
          <Team members={ members } />
          <Join />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://admin.carnemag.co:1337/teams')
  const members = await res.json()

  return {
    props: {
      members
    }
  }
}

export default About
