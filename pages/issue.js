import React from 'react'
import fetch from 'node-fetch'

import Global from '../components/Global'
import Layout from '../components/Layout'
import HerospaceIssue from '../components/issue/Herospace'
import Playlist from '../components/home/Playlist'
import IssueDetail from '../components/issue/Artist'

function Issue({ currentIssue, issuePlaylist }) {
  console.log(issuePlaylist)
  return (
    <>
      <Layout title="Carnemag® | Issues">
        { currentIssue &&
          <HerospaceIssue key="1" issue={ currentIssue } currentYear={ Global.getCurrentYear() } />
        }

        { issuePlaylist && 
          <Playlist issuePlaylist={ issuePlaylist } currentYear={ Global.getCurrentYear() } />
        }

        {/* { fullArtist &&
          fullArtist.map((artist, index) => (
            <IssueDetail key={ index } model={ artist } currentYear={ Global.getCurrentYear() } />
          ))
        } */}
      </Layout>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const res = await fetch(`http://admin.carnemag.co:1337/issues?Number=${query.Number}`)
  const currentIssue = await res.json()

  const issuePlaylist = await fetch(`http://admin.carnemag.co:1337/playlists?issue=${query.Number}`)
    .then(res => res.json())

  return {
    props : {
      currentIssue: currentIssue[0],
      issuePlaylist: issuePlaylist[0]
    }
  }
}

export default Issue