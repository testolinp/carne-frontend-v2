import React, { Component } from 'react'

import TeamBox from './TeamBox'

class Team extends Component {
  render() {
    const { members } = this.props

    return (
      <section className="team">
        <h2 className="team__title"><span>the</span> Team</h2>
        <div className="team__list">
         {members.map((team, index) => 
            <TeamBox key={ index } team={ team } />
          )}
        </div>
      </section>
    )
  }
}

export default Team