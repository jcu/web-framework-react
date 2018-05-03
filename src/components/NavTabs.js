import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NavTabs extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    if (!this.props.children) {
      return null
    }

    return (
      <ul className='nav nav-tabs m-b-2' role='tablist'>
        {this.props.children}
      </ul>
    )
  }
}
