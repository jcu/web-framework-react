import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TabPane extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    activeTab: PropTypes.string,
    children: PropTypes.node
  }

  render () {
    let elementClass = 'tab-pane'
    if (this.props.id === this.props.activeTab) {
      elementClass += ' active'
    }

    return (
      <div className={elementClass} role='tabpanel'>
        {this.props.children}
      </div>
    )
  }
}
