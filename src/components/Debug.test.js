import React from 'react'
import { shallow } from 'enzyme'
import Debug from './Debug'

// Take care to restore NODE_ENV during any of these tests
// or the remainder of tests in other files will break

test('renders without crashing', () => {
  shallow(<Debug object={{ hello: 'world' }} />)
})

test('does not render in test', () => {
  const debug = shallow(<Debug object={{ hello: 'world' }} />)
  expect(debug.html()).toBeNull()
})

test('only renders in development', () => {
  const originalEnv = process.env.NODE_ENV

  process.env.NODE_ENV = 'development'
  const debug = shallow(<Debug object={'hello'} />)
  expect(debug.html()).not.toBeNull()

  process.env.NODE_ENV = 'production'
  const debugProd = shallow(<Debug object={'hello'} />)
  expect(debugProd.html()).toBeNull()

  process.env.NODE_ENV = originalEnv
})

test('renders if forced', () => {
  const originalEnv = process.env.NODE_ENV

  process.env.NODE_ENV = 'production'
  const debug = shallow(<Debug object={'hello'} forceDisplay />)
  expect(debug.html()).not.toBeNull()

  process.env.NODE_ENV = originalEnv
})
