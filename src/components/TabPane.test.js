import React from 'react'
import { shallow } from 'enzyme'
import TabPane from './TabPane'

test('renders without crashing', () => {
  shallow(<TabPane id='home' />)
})

test('render if empty', () => {
  const tabPane = shallow(<TabPane id='home' />)
  expect(tabPane.html()).not.toBeNull()
})

test('renders children', () => {
  const tabPane = shallow(
    <TabPane id='home'>
      <h1>Heading</h1>
      <p>Content</p>
    </TabPane>
  )
  expect(tabPane.children()).toHaveLength(2)
})

test('tab pane is not active', () => {
  let tabPane = shallow(<TabPane id='home' />)
  expect(tabPane.hasClass('active')).toBe(false)

  tabPane = shallow(<TabPane id='home' activeTabe='elsewhere' />)
  expect(tabPane.hasClass('active')).toBe(false)
})

test('becomes active tab', () => {
  const tabPane = shallow(<TabPane id='home' activeTab='home' />)
  expect(tabPane.hasClass('active')).toBe(true)
})
