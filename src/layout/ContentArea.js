import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ContentArea extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <div className="container jcu-content p-y-3">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
