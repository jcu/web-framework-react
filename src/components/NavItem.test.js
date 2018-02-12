import React from 'react'
import { shallow } from 'enzyme'
import NavItem from './NavItem'

test('renders without crashing', () => {
  const navItem = shallow(
    <NavItem>
      <b>Hello world</b>
    </NavItem>
  )
  expect(navItem.contains(<b>Hello world</b>)).toBe(true)
})

test('renders with options', () => {
  const navItem = shallow(<NavItem className="pull-right">Home</NavItem>)
  expect(navItem.hasClass('pull-right')).toBe(true)
})
