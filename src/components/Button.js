import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ActivityIndicator from './ActivityIndicator'

const variations = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'link',
  'outline-primary',
  'outline-secondary',
  'outline-success',
  'outline-info',
  'outline-warning',
  'outline-danger'
]

export default class Button extends Component {
  static propTypes = {
    variation: PropTypes.oneOf(variations),
    className: PropTypes.string,
    children: PropTypes.node,
    inProgress: PropTypes.bool,
    disabled: PropTypes.bool
  }
  static variations = variations

  static defaultProps = {
    variation: 'primary',
    className: '',
    inProgress: false
  }

  render () {
    if (!this.props.children) {
      return null
    }

    const cleanProps = Object.assign({}, this.props)
    delete cleanProps.disabled
    delete cleanProps.className
    delete cleanProps.variation
    if (this.props.inProgress) {
      delete cleanProps.onClick
    }
    delete cleanProps.inProgress

    var indicatorVariation = 'light'
    if (this.props.variation.indexOf('secondary') !== -1 ||
      this.props.variation.indexOf('outline') !== -1) {
      indicatorVariation = 'dark'
    }

    return (
      <button
        {...cleanProps}
        className={`btn btn-${this.props.variation} ${this.props.className}`}
        disabled={this.props.inProgress || this.props.disabled}>
        {this.props.inProgress && <React.Fragment><ActivityIndicator type={indicatorVariation} /> </React.Fragment> }
        {this.props.children}
      </button>
    )
  }
}
