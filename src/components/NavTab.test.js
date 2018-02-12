import React from 'react'
import { shallow } from 'enzyme'
import NavTab from './NavTab'

test('renders without crashing', () => {
  shallow(<NavTab to="/">Home</NavTab>)
})

test('renders with options', () => {
  shallow(
    <NavTab to="/" exact={false}>Home</NavTab>
  )
})

test('renders children', () => {
  const navTab = shallow(
    <NavTab to="/">
      <img src="icon.svg" />
      <b>Home</b>
    </NavTab>
  )
  expect(navTab.find('NavLink').children()).toHaveLength(2)
})
