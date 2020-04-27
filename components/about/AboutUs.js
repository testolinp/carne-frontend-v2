import React, { Component } from 'react'

class AboutUs extends Component {
  render() {
    const currentYear = new Date().getFullYear();

    return (
      <section className="about">
        <div className="about__content">
          <div className="about__content__title">
            <h2>About <span>us</span></h2>
          </div>
          <div className="about__content__data icon-arrow">
            <h4>CarneMag® inteds to be a catalyst of the artuniverse. An ecosystem conceived and focused in art in all its forms and shapes. Our goal is to build a two lane bridge between artists and the public. A space to connect them with each other.<span>-</span></h4>
            <p>Somos una revista de artes visuales con base en Buenos Aires, Argentina. Dedicada a celebrar la creatividad a nivel global desde 2009. habiendo reseñado ya la obra de más de 500 artistas de todo el mundo y pertenecientes a las más variadas disciplinas. El cuestionamiento de lo que el arte representa socialmente es lo que nos ha mantenido vivos estos 10 años. Sea a través de la revista física o desde nuestro sitio web, lo que nos interesa como publicación independiente es exhibir y discutir el trabajo de aquellos que hoy, mediante el aporte de nuevas perspectivas, son los que están empujando la cultura hacia adelante.</p>
          </div>
        </div>
        <span className="about__date">Since <span>{currentYear}</span></span>
      </section>
    )
  }
}

export default AboutUs