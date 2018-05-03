import React from 'react'
import { mount, shallow } from 'enzyme'
import ErrorBoundary from './ErrorBoundary'

test('renders without crashing', () => {
  shallow(<ErrorBoundary appName='Test' />)
})

test('renders with options', () => {
  shallow(
    <ErrorBoundary
      appName='Test'
      appContact='JCU'
      helpContact='Helpdesk'
      helpUrl='https://example.com'
    />
  )
})

test('renders child nodes', () => {
  // Use mount instead of shallow to work around
  // https://github.com/airbnb/enzyme/issues/1213#issuecomment-361822184
  const eb = mount(
    <ErrorBoundary appName='Test'>
      <a className='dummy' href='#dummy'>
        Link
      </a>
      <a className='dummy' href='#dummy'>
        Link 2
      </a>
    </ErrorBoundary>
  )
  expect(eb.children()).toHaveLength(2)
})

test('renders alert on error', () => {
  const eb = shallow(<ErrorBoundary appName='Test' />)
  eb.setState({ hasError: true })
  expect(eb.find('Alert')).toBePresent()
})

test('renders alert on uncaught exception', () => {
  const Uhoh = function () {
    throw 'Kaboom' // eslint-disable-line no-throw-literal
  }
  const App = () => {}
  // This causes react-dom to log an error, but the tests succeed
  const eb = mount(
    <ErrorBoundary appName='Test' appContact='JCU'>
      <Uhoh />
      <App />
    </ErrorBoundary>
  )
  expect(eb.find('Alert')).toBePresent()
  expect(eb.find('App')).not.toBePresent()
})
