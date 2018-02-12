import React from 'react'
import { shallow } from 'enzyme'
import ActivityIndicator from './ActivityIndicator'

test('renders without crashing', () => {
  shallow(<ActivityIndicator />)
})

test('renders with options', () => {
  shallow(<ActivityIndicator alt="It's happening!" />)
})

test('set up correctly', () => {
  const indicator = shallow(<ActivityIndicator inline={false} />)
  expect(indicator.type()).toBe('img')
})

test('different types', () => {
  const indicator = shallow(<ActivityIndicator variation="light" />)
  expect(indicator.type()).toBe('img')
})
