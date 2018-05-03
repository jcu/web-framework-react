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

test('shows version from environment', () => {
  // save original env var
  const originalVer = process.env.REACT_APP_VERSION

  const verString = '1.2.specialversionstring'
  process.env.REACT_APP_VERSION = verString
  const footer = shallow(<Footer version />)
  expect(footer.contains(verString)).toBe(true)

  // restore original env var
  if (originalVer) {
    process.env.REACT_APP_VERSION = originalVer
  } else {
    delete process.env.REACT_APP_VERSION
  }
})

test('no crash if environment version not set', () => {
  // save original env var
  const originalVer = process.env.REACT_APP_VERSION
  delete process.env.REACT_APP_VERSION
  shallow(<Footer version />)

  // restore original env var
  if (originalVer) {
    process.env.REACT_APP_VERSION = originalVer
  }
})

test('shows version from prop', () => {
  const verString = '1.2.specialversionstring'
  const footer = shallow(<Footer version={verString} />)
  expect(footer.contains(verString)).toBe(true)
})

test('handles boolean version prop values', () => {
  let footer = shallow(<Footer version={false} />)
  expect(footer.find('.footer-version')).toHaveLength(0)

  footer = shallow(<Footer version={true} />)
  expect(footer.find('.footer-version')).toHaveLength(1)
})

test('links to version url', () => {
  const verString = '1.2.specialversionstring'
  const verUrl = 'https://example.com'
  const footer = shallow(<Footer version={verString} versionUrl={verUrl} />)
  expect(footer.find(`a[href="${verUrl}"]`)).not.toBeNull()
})
