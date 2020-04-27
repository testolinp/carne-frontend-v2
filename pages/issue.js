import React, { Component } from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Promise from 'bluebird'
import Global from '../components/Global'

import Header from '../components/Header'
import Footer from '../components/Footer'
import HerospaceIssue from '../components/issue/Herospace'
import Playlist from '../components/home/Playlist'
import IssueDetail from '../components/issue/Artist'

class Issue extends Component {
  constructor(props) {
    super(props)

    this.state = {
      issuePlaylist: null,
      fullArtist: []
    }
  }

  getIssuePlaylist = number => {
    fetch(`https://admin.carnemag.co/playlists/${number}`)
      .then(response => response.json())
      .then( issuePlaylist => this.setState({issuePlaylist}))
  }

  getArtist = ids => {
    let artistsIds = ids.map(el => [`id_in=${el.id}`]).join('&')

    fetch(`https://admin.carnemag.co/artists?${artistsIds}`)
      .then(res => res.json())
      .then(artistList => this.getWorks(artistList))
  }

  getWorks = async artist => {
    let load = []

    artist.forEach(el => {      
      load.push(el.works.map(work => [`id_in=${work.id}`]).join('&'))
    })

    const mapper = q => fetch(`https://admin.carnemag.co/works?${q}`).then(r => r.json())
    const responses = await Promise.map(load, mapper, { concurrency: 20 })

    const full = artist.map((el, i) => ({ ...el, workList: responses[i] }))

    this.setState({ fullArtist: full })
  }

  componentDidMount() {
    let issue = this.props.currentIssue

    if(issue.artists) {
      this.getArtist(issue.artists)
    }

    if(issue.playlist) {
      this.getIssuePlaylist(issue.playlist.id)
    }
  }

  render() {
    const { issuePlaylist, fullArtist } = this.state
    const { currentIssue } = this.props

    return (
      <section>
        <Head>
          {currentIssue &&
            <title>Carnemag® | Issue { currentIssue.number }</title>
          }
          <link rel="icon" href="/static/favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        { currentIssue &&
          <HerospaceIssue issue={ currentIssue } currentYear={ Global.getCurrentYear() } />
        }

        { issuePlaylist && 
          <Playlist issuePlaylist={ issuePlaylist } currentYear={ Global.getCurrentYear() } />
        }

        { fullArtist &&
          fullArtist.map((artist, index) => (
            <IssueDetail key={ index } model={ artist } currentYear={ Global.getCurrentYear() } />
          ))
        }
        <Footer />
      </section>
    )
  }
}

Issue.getInitialProps = async ({ query }) => {
  const res = await fetch(`https://admin.carnemag.co/issues?number=${query.slug}`)
  const json = await res.json()

  return { currentIssue: json[0] }
}

export default Issue