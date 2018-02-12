import React from 'react'
import { shallow } from 'enzyme'
import ContentArea from './ContentArea'

test('renders without crashing', () => {
  shallow(<ContentArea />)
})

test('renders if empty', () => {
  const contentArea = shallow(<ContentArea />)
  expect(contentArea.html()).not.toBeNull()
})

test('renders child nodes', () => {
  const contentArea = shallow(
    <ContentArea>
      <em>Test</em>
      <b>More content</b>
    </ContentArea>
  )
  expect(contentArea.contains(<em>Test</em>)).toBe(true)
  expect(contentArea.contains(<b>More content</b>)).toBe(true)
})
