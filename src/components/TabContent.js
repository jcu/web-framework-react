import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TabContent extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    if (!this.props.children) {
      return null
    }

    return <div className='tab-content'>{this.props.children}</div>
  }
}
