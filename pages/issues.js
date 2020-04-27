import React from 'react'
import fetch from 'node-fetch'

import Global from '../components/Global'
import Layout from '../components/Layout'
import Herospace from '../components/home/Herospace'

function Issues({ issues }) {

  return (
    <>
      <Layout title="Carnemag® | Issues">
        { issues.map( ( issue, index ) =>
          <Herospace key={ index } issue={ issue } currentYear={ Global.getCurrentYear() } /> 
        ) }
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://3.21.165.5:1337/issues')
  const data = await res.json()

  return {
    props: {
      issues: data.sort((a, b) => a.number - b.number).reverse()
    }
  }
}

export default Issues