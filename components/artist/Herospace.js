import React from 'react'

const HerospaceArtist = ({model}) => {
  console.log('model', model)
  const { name, lastname, rol, country, url, description } = model;

  return (
    <>
      <section className="herospaceArtist">
        <div className="herospaceArtist__content">
          <div className="herospaceArtist__content__columns">
            <div className="herospaceArtist__content__left">
              <h2 className="herospaceArtist__content__title"><span>{ name }</span> { lastname }</h2>
              <h3 className="herospaceArtist__content__subtitle">{ rol }<br />{ country && <span>{ country }</span> }</h3>
            </div>
            <div className="herospaceArtist__content__right">
              <h3>CarneMag® inteds to be a catalyst of the art universe.An ecosystem conceived and focused in art in all its formsand shapes. Our goal is to build a two lane bridge between artists and the public. A space to connect them with each other. </h3>
              <div className="herospaceArtist__content__right__content">
                { description }
              </div>
              <div className="herospaceArtist__content__right__web">
                { url && <a href={ url } target="_blank">{ url }</a> }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HerospaceArtist