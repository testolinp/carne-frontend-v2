import React from 'react'
import Link from 'next/link'
import fetch from 'node-fetch'

import Global from '../components/Global'
import Layout from '../components/Layout'

function About({ stars }) {
  return (
    <>
      <Layout title="Carnemag®">
        asdad<br />asdad<br />asdad<br />asdad<br />asdad<br />asdad<br />asdad<br />
      <p>Preact has {stars} ⭐</p>
      <Link href="/">
        <a>I bet Next.js has more stars (?)</a>
      </Link>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/developit/preact')
  const json = await res.json() // better use it inside try .. catch
  return {
    props: {
      stars: json.stargazers_count,
    },
  }
}

export default About
