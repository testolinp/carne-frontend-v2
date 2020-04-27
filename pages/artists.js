import React from 'react'
import fetch from 'node-fetch'

import Global from '../components/Global'
import Layout from '../components/Layout'
import Artist from '../components/artists/Artist'


function Artists({ artists }) {
  return (
    <section>
      <Layout title="Carnemag® | Artists">
        { artists.map( (artist, index) =>
          <Artist key={ index } model={ artist } currentYear={ Global.getCurrentYear() } />
        )}
      </Layout>
    </section>
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://3.21.165.5:1337/artists`)
  const artists = await res.json()

  return {
    props: {
      artists
    }
  }
}

export default Artists