import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

test('renders without crashing', () => {
  shallow(<Footer />)
})

test('shows current year', () => {
  const footer = shallow(<Footer />)
  const currentYear = (new Date()).getFullYear()
  expect(footer.contains(currentYear)).toBe(true)
})
