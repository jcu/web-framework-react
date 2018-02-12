import React from 'react'
import { shallow } from 'enzyme'
import Alert from './Alert'

test('renders without crashing', () => {
  shallow(<Alert />)
})

test('renders with options', () => {
  shallow(<Alert variation='warning'>Watch out!</Alert>)
})

test('do not render if empty', () => {
  const alert = shallow(<Alert variation='warning' />)
  expect(alert.html()).toBeNull()
})

test('renders child nodes', () => {
  const alert = shallow(
    <Alert variation='warning' isDismissable={false}>
      <a className='dummy'>Link</a>
      <a className='dummy'>Link 2</a>
      Watch out!
    </Alert>
  )

  expect(alert.children()).toHaveLength(3)
})

test('set up correctly', () => {
  const alert = shallow(
    <Alert variation='warning' isDismissable={false}>Watch out!</Alert>
  )
  expect(alert.type()).toBe('div')
  expect(alert.hasClass('alert-warning')).toBe(true)
  expect(alert.text()).toBe('Watch out!')
})

test('is dismissable', () => {
  const alert = shallow(
    <Alert isDismissable>Watch out!</Alert>
  )
  let closeButton = alert.find('.close')
  expect(closeButton.exists()).toBe(true)

  expect(alert.html()).not.toBeNull()
  closeButton.simulate('click', {preventDefault: () => {}})
  expect(alert.html()).toBeNull()
})
