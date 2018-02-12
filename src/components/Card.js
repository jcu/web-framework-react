import React, { Component } from 'react'
import PropTypes from 'prop-types'

const variations = [null, 'inverse', 'primary', 'success', 'info', 'danger']

export default class Card extends Component {
  static propTypes = {
    variation: PropTypes.oneOf(variations),
    className: PropTypes.string,
    children: PropTypes.node
  }
  static variations = variations

  static defaultProps = {
    variation: null,
    className: ''
  }

  render () {
    if (!this.props.children) {
      return null
    }

    let variation = this.props.variation ? (' card-' + this.props.variation) : ''
    return (
      <div className={`card ${variation} ${this.props.className}`}>
        <div className="card-block">
          {this.props.children}
        </div>
      </div>
    )
  }
}
