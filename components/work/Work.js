import React, { Component } from 'react'
import ImagePalette from 'react-image-palette'

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
          backgroundColor: '#000'
        }

        if(imageDisplay === 'v') {
          return <ImagePalette image={work.url} crossOrigin="anonymous">
            {({ backgroundColor, color, alternativeColor }) => (
              <section className={`work ${this.displayPosition(imageDisplay)}`} style={{ 'backgroundColor': alternativeColor}}>
                <div className="work__content">
                  <h2 className="work__content__title"><span>{ name }</span> { lastname }</h2>
                  <h3 className="work__content__subtitle">{ rol }<br />{ country && <span>{ country }</span> }</h3>
                  <div style={{ backgroundColor }} className="work__content__image">
                    <img alt={name} src={work.url} />
                  </div>
                </div>
              </section>
            )}
          </ImagePalette>
        }

        return <section key={index} className={`work ${this.displayPosition(imageDisplay)}`} style={ imageBackground }>
          <div className="work__content">
            <h2 className="work__content__title"><span>{ name }</span> { lastname }</h2>
            <h3 className="work__content__subtitle">{ rol }<br />{ country && <span>{ country }</span> }</h3>
          </div>
        </section>
      })



      // <section key={index} className={`work ${this.displayPosition(imageDisplay)}`} style={ imageBackground }>
      //     <div className="work__content">
      //       <h2 className="work__content__title"><span>{ name }</span> { lastname }</h2>
      //       <h3 className="work__content__subtitle">{ rol }<br />{ country && <span>{ country }</span> }</h3>
      //       {imageDisplay === 'v' && 
      //       <ImagePalette image={work.url} crossOrigin="anonymous">
      //         {({ backgroundColor, color, alternativeColor }) => (
      //           <div style={{ backgroundColor }} className="work__content__image">
      //             <img alt={name} src={work.url} />
      //           </div>
      //         )}
      //       </ImagePalette>
      //       }
      //     </div>
      //   </section>



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