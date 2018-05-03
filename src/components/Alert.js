import React, { Component } from 'react'
import PropTypes from 'prop-types'

const variations = ['success', 'info', 'warning', 'danger']

/**
 * Banner that provides a notice or other key information the user needs to
 * know or otherwise focus on.
 */
export default class Alert extends Component {
  static propTypes = {
    variation: PropTypes.oneOf(variations),
    /** If false, the alert cannot be closed using the close button */
    isDismissable: PropTypes.bool,
    children: PropTypes.node
  }
  static defaultProps = {
    variation: 'info',
    isDismissable: true
  }
  static variations = variations

  constructor (props) {
    super(props)
    this.state = {
      isDissmissed: false
    }
  }

  handleDismiss = event => {
    event.preventDefault()
    this.setState({ isDissmissed: true })
  }

  render () {
    if (!this.props.children || this.state.isDissmissed) {
      return null
    }

    return (
      <div className={'alert alert-' + this.props.variation} role='alert'>
        {this.props.isDismissable && (
          <button
            type='button'
            className='close'
            aria-label='Close'
            onClick={this.handleDismiss}
          >
            <span aria-hidden='true'>&times;</span>
          </button>
        )}
        {this.props.children}
      </div>
    )
  }
}
