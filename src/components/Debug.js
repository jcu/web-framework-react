import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Debug extends Component {
  static propTypes = {
    object: PropTypes.any,
    forceDisplay: PropTypes.bool
  }

  render () {
    if (!this.props.forceDisplay && process.env.NODE_ENV !== 'development') {
      return null
    }

    return (
      <code style={{display: 'block', whiteSpace: 'pre'}}>
        {JSON.stringify(this.props.object, null, 2)}
      </code>
    )
  }
}
