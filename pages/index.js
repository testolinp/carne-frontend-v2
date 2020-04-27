import React from 'react'
import Link from 'next/link'
import fetch from 'node-fetch'
import Slider from 'react-slick'

import Global from '../components/Global'
import Layout from '../components/Layout'
import Herospace from '../components/home/Herospace'
import Playlist from '../components/home/Playlist'
import Artist from '../components/home/Artist'
import Issue from '../components/home/Issue'

function Index({ highlight, playlist, issues }) {
  const sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true
  }

  return (
    <>
      <Layout title="Carnemag®">
        <Herospace showLink="true" key="1" issue={ highlight } currentYear={ Global.getCurrentYear() } />
        <Playlist issuePlaylist={ playlist } currentYear={ Global.getCurrentYear() } />
        {/* <Artist featuredArtist={ featuredArtist } currentYear={ Global.getCurrentYear() } /> */}
        <Slider { ...sliderSettings }>
          { issues.map( ( issue, index ) =>
          <Issue key={ issue.id }  currentYear={ Global.getCurrentYear() } issue={ issue } current={ index + 1 } issues= { issues.length } />
          ) }
        </Slider>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://3.21.165.5:1337/issues')
  const data = await res.json() 

  const highlight = data.filter( issue => issue.Highlight )[0]

  const playlist = await fetch(`http://3.21.165.5:1337/playlists/${highlight.playlist.id}`)
    .then(res => res.json())

  return {
    props: {
      highlight,
      playlist,
      issues: data.sort((a, b) => a.number - b.number).reverse()
    },
  }
}

export default Index
