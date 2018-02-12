import React from 'react'
import { shallow } from 'enzyme'
import TabContent from './TabContent'

test('renders without crashing', () => {
  shallow(<TabContent />)
})

test('do not render if empty', () => {
  const tabContent = shallow(<TabContent />)
  expect(tabContent.html()).toBeNull()
})

test('renders children', () => {
  const tabContent = shallow(<TabContent>Hello world</TabContent>)
  expect(tabContent.find('.tab-content').exists()).toBe(true)
  expect(tabContent.text()).toMatch('Hello world')
})
