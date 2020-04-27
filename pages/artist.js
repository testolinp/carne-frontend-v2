import React, { Component } from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Global from '../components/Global'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ArtistDetail from '../components/artist/Detail'
import Work from '../components/work/Work'

class Artist extends Component {
  constructor(props) {
    super(props)

    this.state = {
      worksList: null
    }
  }

  // getWorks(works) {

  //   const model = works.map(el => [`id_in=${el.id}`]).join('&')

  //   fetch(`http://3.21.165.5:1337/works/?${model}`)
  //     .then(response => response.json())
  //     .then( worksList => this.setState({ worksList }))

  // }

  componentDidMount() {
    const artist = this.props.artist
    
    if(artist) {
      //this.getWorks(artist.works)
    }
  }

  render() {
    const { artist } = this.props
    const { worksList } = this.state
    const { name, lastname } = artist

    return (
      <section>
        <Head>
          { artist &&
            <title>Carnemag® | Artist { name } { lastname }</title>
          }
          <link rel="icon" href="/static/favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        { artist && 
          <ArtistDetail model={ artist } currentYear={ Global.getCurrentYear() } />
        }
        
        {/* {worksList && 
          worksList.map((work, index) =>
            <Work key={ index } model={ work } currentYear={ Global.getCurrentYear() } />
          )
        } */}
        <Footer />
      </section>
    )
  }
}

Artist.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://3.21.165.5:1337/artists?name=${query.name}&lastname=${query.lastname}`)
  const artist = await res.json()

  return {
    artist: artist[0]
  }
}

export default Artist