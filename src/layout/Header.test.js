import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

test('renders without crashing', () => {
  shallow(<Header />)
})

test('render logo variations', () => {
  shallow(<Header logo='mono' />)
  shallow(<Header logo='colour' />)
})

test('links to app url', () => {
  const url = 'https://example.com'
  const header = shallow(<Header url={url} />)
  expect(header.find(`a[href="${url}"]`)).not.toBeNull()
})

test('shows logo variation', () => {
  const header = shallow(<Header logo='mono' />)
  expect(header.find('img').html()).toMatch('mono')
})

test('shows custom logo url', () => {
  const logoUrl = 'https://example.com/logo.svg'
  const header = shallow(<Header logo={logoUrl} />)
  expect(header.find('img').html()).toMatch(logoUrl)
})

test('shows app name', () => {
  const header = shallow(<Header appName='Hello world' />)
  expect(header.contains('Hello world')).toBe(true)
})
