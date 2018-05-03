import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

test('renders without crashing', () => {
  shallow(<Button />)
})

test('renders with options', () => {
  shallow(<Button variation='secondary'>Click me</Button>)
})

test('do not render if empty', () => {
  const button = shallow(<Button />)
  expect(button.html()).toBeNull()
})

test('renders child nodes', () => {
  const button = shallow(
    <Button variation='warning'>
      <em>Test</em>
      <b>Click me</b>
    </Button>
  )

  expect(button.children()).toHaveLength(2)
  expect(button.contains(<b>Click me</b>)).toBe(true)
})

test('set up correctly', () => {
  const button = shallow(
    <Button variation='warning' className='extra' type='submit' title='Dummy'>
      Click me
    </Button>
  )
  expect(button.type()).toBe('button')
  expect(button.hasClass('btn-warning')).toBe(true)
  expect(button.hasClass('extra')).toBe(true)
  expect(button.prop('type')).toBe('submit')
  expect(button.prop('title')).toBe('Dummy')
  expect(button.prop('variation')).toBeUndefined()
  expect(button.text()).toBe('Click me')
})

test('configured events occur', () => {
  let result
  function click () {
    result = 'success'
  }
  const button = shallow(<Button onClick={click}>Click me</Button>)
  expect(result).toBeUndefined()
  button.simulate('click')
  expect(result).toBe('success')
})

test('does not show progress', () => {
  const button = shallow(<Button>Sending&hellip;</Button>)
  let indicator = button.find('ActivityIndicator')
  expect(indicator.exists()).toBe(false)
})

test('indicates progress', () => {
  const button = shallow(<Button inProgress>Sending&hellip;</Button>)
  let indicator = button.find('ActivityIndicator')
  expect(indicator.exists()).toBe(true)
})
