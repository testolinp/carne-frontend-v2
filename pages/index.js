import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Slider from 'react-slick'
import Global from '../components/Global'

import Layout from '../components/Layout'

class Index extends Component {
  render() {
    const { issues, highlight, featuredArtist, playlist } = this.props
    const sliderSettings = {
      dots: false,
      arrows: false,
      autoplay: true
    }

    return (
      <section>
        <Layout title="Carnemag®">
          Hola<br />Hola<br />Hola<br />Hola<br />Hola<br />Hola<br />Hola<br />Hola<br />Hola<br />
        </Layout>
      </section>
    )
  }
}

Index.getInitialProps = async () => {
  const res = await fetch('http://3.21.165.5:1337/issues')
  const data = await res.json() 

  const highlight = data.filter( issue => issue.Highlight )[0]
  //const artist = highlight.artists.filter( artist => artist.featured )[0]
  //const featuredArtist = await fetch(`http://3.21.165.5:1337/artists/${artist.id}`)
  //  .then(r es => res.json())
  const playlist = await fetch(`http://3.21.165.5:1337/playlists/${highlight.playlist.id}`)
    .then(res => res.json())
  
  return {
    highlight,
    //featuredArtist,
    playlist,
    issues: data.sort((a, b) => a.number - b.number).reverse()
  }
}

export default Index