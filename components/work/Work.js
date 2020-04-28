import React, { Component } from 'react'

import Extra from '../home/Extra'

class Work extends Component {
  componentDidMount() {
    console.log('model', this.props.model);
  }

  displayPosition(display) {
    if(display != null) {
      return `work--${display.trim()}`
    }

    return '';
  }

  render() {
    const { currentYear, model } = this.props
    const { artist, image, display, backgroundColor } = model
    const { name, lastname, rol, country } = artist

    return (
      model.image.map((work, index) => {
        const imageBackground = {
          backgroundImage: 'url(' + 'http://admin.carnemag.co:1337' + work.url + ')',
          backgroundColor: backgroundColor ? 'red' : 'yellow'
        }

        return <section className={`work ${this.displayPosition(display)}`} style={ imageBackground }>
          <div className="work__content">
            <h2 className="work__content__title"><span>{ name }</span> { lastname }</h2>
            <h3 className="work__content__subtitle">{ rol }<br />{ country && <span>{ country }</span> }</h3>
            {display && 
              <div className="work__content__image">
                <img alt={name} src={image.url} />
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