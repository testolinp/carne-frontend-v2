import React, { Component } from 'react'

import Extra from '../home/Extra'
import Work from '../work/Work'

class issueDetail extends Component {
  render() {
    const { currentYear, model } = this.props
    const { name, lastname, image, rol, country, issue, workList } = model

    const backgroundImage = {
      backgroundImage: 'url(' + image.url + ')'
    }

    return (
      <div>
        <section className="artistIssue" style={ backgroundImage }>
          <div className="artistIssue__content">
            <div className="artistIssue__content__columns">
              <h3 className="artistIssue__content__number"><span>Issue</span> #{ issue.number }</h3>
              <div className="artistIssue__content__left">
                <h2 className="artistIssue__content__title"><span>{ name }</span> { lastname }</h2>
                <h3 className="artistIssue__content__subtitle">{ rol }<br />{ country && <span>{ country }</span> }</h3>
              </div>
            </div>
          </div>
          <Extra currentYear={ currentYear }  />
        </section>

        {workList &&
          workList.map((work, index) => 
            <Work key={ index } currentYear={ currentYear } model={ work } />
          )}
      </div>
    )
  }
}

export default issueDetail