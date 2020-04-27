import React, { Component } from 'react'

class TeamBox extends Component {
  render() {
    const { team } = this.props
    const { id, image, name, rol } = team

    return (
      <article className="team__list__box" key={ id }>
        <div className="team__list__box__image">
          <img src={ image ? 'http://3.21.165.5:1337/' + image.url : '' } />
        </div>
        <div className="team__list__box__data">
          <h3 className="team__list__box__data__title">{ name }</h3>
          <p className="team__list__box__data__rol">{ rol }</p>
        </div>
      </article>
    )
  }
}

export default TeamBox