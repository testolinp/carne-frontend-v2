import React, { Component } from 'react'

import Extra from '../home/Extra'

class Work extends Component {
  displayPosition(display) {
    if(display != null) {
      return `work--${display}`
    }

    return '';
  }

  render() {
    const { currentYear, model } = this.props
    const { artist, image, display, backgroundColor } = model
    const { name, lastname, rol, country } = artist

    return (
      model.image.map((work, index) => {
        let imageDisplay = work.name.replace('.jpg', '').split('-')[2];

        const imageBackground = {
          backgroundImage: imageDisplay != 'v' ? 'url(' + work.url + ')' : 'none',
          backgroundColor: backgroundColor ? '#000' : '#000'
        }

        return <section className={`work ${this.displayPosition(imageDisplay)}`} style={ imageBackground }>
          <div className="work__content">
            <h2 className="work__content__title"><span>{ name }</span> { lastname }</h2>
            <h3 className="work__content__subtitle">{ rol }<br />{ country && <span>{ country }</span> }</h3>
            {imageDisplay === 'v' && 
              <div className="work__content__image">
                <img alt={name} src={work.url} />
              </div>
            }
          </div>
          <Extra currentYear={ currentYear } />
        </section>
      })
        // <section className={`work ${this.displayPosition(display)}`} style={ imageBackground }>
        //   <div className="work__content">
        //     <h2 className="work__content__title"><span>{ name }</span> { lastname }</h2>
        //     <h3 className="work__content__subtitle">{ rol }<br />{ country && <span>{ country }</span> }</h3>
        //     {display && 
        //       <div className="work__content__image">
        //         <img alt={name} src={image.url} />
        //       </div>
        //     }
        //   </div>
        //   <Extra currentYear={ currentYear } />
        // </section>
      
    )
  }
}

export default Work