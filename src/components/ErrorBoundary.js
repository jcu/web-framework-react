import React from 'react'
import PropTypes from 'prop-types'
import Alert from './Alert'

export default class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    appName: PropTypes.string.isRequired,
    appContact: PropTypes.string,
    helpContact: PropTypes.string.isRequired,
    helpUrl: PropTypes.string.isRequired
  }
  static defaultProps = {
    helpContact: 'IT Helpdesk',
    helpUrl: 'https://www.jcu.edu.au/helpdesk'
  }

  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  // eslint-disable-next-line handle-callback-err
  componentDidCatch (error, info) {
    this.setState({ hasError: true, details: arguments })
  }

  render () {
    if (this.state.hasError) {
      return (
        <div className='container m-t-3'>
          <div className='row'>
            <div className='col-xs-10 col-xs-push-1'>
              <Alert type='danger' isDismissable={false}>
                <p className='lead'>Oops! An error occurred within this app.</p>
                <p>
                  You can try <a href={window.location.href}>reloading</a> the
                  page to see if that fixes the issue.
                </p>
                <p className='m-b-2'>
                  If the problem persists, contact the{' '}
                  <a href={this.props.helpUrl}>{this.props.helpContact}</a> and
                  let us know about your issue, including the URL you&apos;re
                  on. You can copy and paste the following:
                </p>
                <pre>
                  App: {this.props.appName}
                  {'\n'}
                  {this.props.appContact && (
                    <React.Fragment>
                      App Contact: {this.props.appContact}
                      {'\n'}
                    </React.Fragment>
                  )}
                  URL: {window.location.href}
                  {'\n'}
                  Browser: {navigator.userAgent}
                  {'\n'}
                  Details: [tell us what you were trying to do and what
                  happened]
                </pre>
                <p>Thanks for your patience!</p>
              </Alert>
            </div>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
