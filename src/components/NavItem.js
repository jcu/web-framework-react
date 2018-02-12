import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NavItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
  }

  render () {
    return (
      <li
        className={'nav-item' + (this.props.className ? (' ' + this.props.className) : '')}>
        {this.props.children}
      </li>
    )
  }
}
