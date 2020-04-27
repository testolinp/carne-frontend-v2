import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Global from '../components/Global'

import Layout from '../components/Layout'
import Herospace from '../components/home/Herospace'

class Issues extends Component {
  render() {
    const { issues } = this.props

    return (
      <section>
        <Layout title="Carnemag® | Issues">
          { issues.map( ( issue, index ) =>
            <Herospace key={ index } issue={ issue } currentYear={ Global.getCurrentYear() } /> 
          ) }
        </Layout>
      </section>
    )
  }
}

Issues.getInitialProps = async () => {
  const res = await fetch('http://3.21.165.5:1337/issues')
  const data = await res.json()

  return {
    issues: data.sort((a, b) => a.number - b.number).reverse()
  }
}

export default Issues