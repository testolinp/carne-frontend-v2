import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Global from '../components/Global'

import Layout from '../components/Layout'
import Artist from '../components/artists/Artist'

class Artists extends Component {
  render() {
    const { artists } = this.props

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
}

Artists.getInitialProps = async () => {
  const res = await fetch(`http://3.21.165.5:1337/artists`)
  const artists = await res.json()

  return {
    artists
  }
}

export default Artists