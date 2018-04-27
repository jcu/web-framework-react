import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {
  static propTypes = {
    /** Include a version number (defaults to the app version, otherwise specify a string) */
    version: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
    ]),
    /** Displayed version number will be a link to this URL */
    versionUrl: PropTypes.string
  }

  static defaultProps = {
    version: ''
  }

  resolveVersionString () {
    // this bit of fancy footwork makes the `version` prop
    // work as a boolean, to use a default value:
    //     <Footer version />
    // and also as a string to supply a value directly:
    //     <Footer version="1.2.3" />
    let vString = this.props.version
    if (vString === true) {
      // boolean true means they've requested the default version
      vString = process.env.REACT_APP_VERSION || ''
    } else if (vString === false) {
      // boolean false means some looney has passed in `false`
      vString = ''
    }
    // vString is now one of:
    //     - the string specified as the `version` prop value
    //     - the string from the REACT_APP_VERSION env var
    //     - '' coz REACT_APP_VERSION wasn't set
    //     - '' coz that's the prop's default value
    //     - '' coz the weirdo user passed in `false`
    return vString
  }

  render () {
    let versionTag = this.resolveVersionString()
    if (versionTag !== '') {
      // if the user provided a versionUrl..
      if (this.props.versionUrl) {
        versionTag = <a href={this.props.versionUrl}>{versionTag}</a>
      }
      // TODO: bootstrap 'pull-*-right' will become 'float-*-right'
      versionTag = <div className="footer-version pull-xs-right float-xs-right">{versionTag}</div>
    }

    return (
      <footer className="container jcu-footer">
        <div className="row jcu-colophon">
          <div className="col-xs-12">
            {versionTag}
            <ul className="list-inline">
              <li className="list-inline-item">
                Copyright &copy; 1995 to {(new Date()).getFullYear()} James Cook University.  All rights reserved.
              </li>
              <li className="list-inline-item">ABN 46253211955</li>
              <li className="list-inline-item">CRICOS Provider Code 00117J</li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}
