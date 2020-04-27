import React from 'react'
import Link from 'next/link'
import fetch from 'node-fetch'

import Global from '../components/Global'
import Layout from '../components/Layout'

function Index({ stars }) {
  return (
    <>
      <Layout title="Carnemag®">
        asdad<br />asdad<br />asdad<br />asdad<br />asdad<br />asdad<br />asdad<br />
        <p>Next.js has {stars} ⭐️</p>
        <Link href="/about">
          <a>How about preact?</a>
        </Link>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json() // better use it inside try .. catch
  return {
    props: {
      stars: json.stargazers_count,
    },
  }
}

export default Index
