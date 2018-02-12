import React, { Component } from 'react'
import PropTypes from 'prop-types'

import puffLight from '../img/puff.svg'
import puffDark from '../img/puff-dark.svg'

/**
 * Simple visual indicator showing that some form of activity is occurring.
 * Several variations are available for different styling.
 */
export default class ActivityIndicator extends Component {
  static propTypes = {
    variation: PropTypes.oneOf(['light', 'dark']).isRequired,
    /** Whether the indicator is used inline with text */
    inline: PropTypes.bool.isRequired,
    className: PropTypes.string,
    /** Alt text for this indicator image */
    alt: PropTypes.string.isRequired
  }

  static defaultProps = {
    variation: 'dark',
    inline: true,
    alt: 'Action in progress'
  }

  render () {
    return (
      <img
        className={this.props.className}
        src={this.props.variation === 'dark' ? puffDark : puffLight}
        alt={this.props.alt}
        style={this.props.inline && {width: '2ch', verticalAlign: 'sub'}}
      />
    )
  }
}
