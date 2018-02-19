import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
  static propTypes = {
    logo: PropTypes.string,
    url: PropTypes.string,
    appName: PropTypes.string
  }

  static defaultProps = {
    logo: 'mono-reversed'
  }

  render () {
    let logo = this.props.logo

    // TODO: Could add lots more varities here (JCUS, etc)
    switch (logo) {
      case 'mono':
        logo = 'https://cdn.jcu.edu.au/1.0.0-beta.1/images/jcua-logo-mono.svg'
        break
      case 'mono-reversed':
        logo = 'https://cdn.jcu.edu.au/1.0.0-beta.1/images/jcua-logo-mono-reversed.svg'
        break
      case 'colour':
        logo = 'https://cdn.jcu.edu.au/1.0.0-beta.1/images/jcua-logo-colour.svg'
        break
      default:
        break
    }

    const url = this.props.url || window.location.href

    return (
      <header className="container jcu-header jcu-header--banner jcu-bg--gradient-blue">
        <div className="row">
          <div className="col-xs-12 col-lg-10 col-lg-offset-1 p-y-1 jcu-bg--black-75pc">
            <div className="container">
              <div className="row">
                <div className="col-xs-6">
                  <a href={url}>
                    <img className="img-fluid" src={logo} alt="JCU Australia logo" />
                  </a>
                </div>
                {this.props.appName &&
                <div className="col-xs-6 text-sm-right">
                  <h1 className="jcu-header__page-title" id="page-title"><span className="sr-only">James Cook University </span>{this.props.appName}</h1>
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
