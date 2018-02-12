import React from 'react'
import { shallow } from 'enzyme'
import NavTabs from './NavTabs'
import NavTab from './NavTab'

test('renders without crashing', () => {
  shallow(<NavTabs />)
})

test('do not render if empty', () => {
  const navTabs = shallow(<NavTabs />)
  expect(navTabs.html()).toBeNull()
})

test('renders children', () => {
  const navTabs = shallow(
    <NavTabs>
      <NavTab to="/">Home</NavTab>
      <NavTab to="/about">About</NavTab>
    </NavTabs>
  )
  expect(navTabs.children()).toHaveLength(2)
  expect(navTabs.find('NavTab')).toHaveLength(2)
})
