import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

test('renders without crashing', () => {
  shallow(<Card />)
})

test('renders with options', () => {
  shallow(<Card variation='inverse'>Hello world</Card>)
})

test('do not render if empty', () => {
  const card = shallow(<Card />)
  expect(card.html()).toBeNull()
})

test('renders child nodes', () => {
  const card = shallow(
    <Card>
      <em>Test</em>
    </Card>
  )
  expect(card.children()).toHaveLength(1)
  expect(card.contains(<em>Test</em>)).toBe(true)
})
