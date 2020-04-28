import React from 'react'
import fetch from 'node-fetch'
import Head from 'next/head'

import Global from '../components/Global'
import Layout from '../components/Layout'
import ArtistDetail from '../components/artist/Detail'
import Work from '../components/work/Work'


function Artist({ artist, worksList }) {
  // getWorks(works) {

  //   const model = works.map(el => [`id_in=${el.id}`]).join('&')

  //   fetch(`http://3.21.165.5:1337/works/?${model}`)
  //     .then(response => response.json())
  //     .then( worksList => this.setState({ worksList }))

  // }


  return (
    <>
      <Layout title={'Carnemag® | ' + artist.name + ' ' + artist.lastname}>
      { artist && 
        <ArtistDetail key="1" model={ artist } currentYear={ Global.getCurrentYear() } />
      }

      {worksList && 
          worksList.map((work, index) => 
            <Work key={ index } model={ work } currentYear={ Global.getCurrentYear() } />
          )
        }
      </Layout>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const res = await fetch(`http://admin.carnemag.co:1337/artists?name=${query.name}&lastname=${query.lastname}`)
  const artist = await res.json()

  const worksList = await fetch(`http://admin.carnemag.co:1337/editorials?name=${query.name}%20${query.lastname}`)
    .then(res => res.json())

  return {
    props: {
      artist: artist[0],
      worksList
    }
  }
}

export default Artist