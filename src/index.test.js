import * as WebFramework from './index'

test('is importable', () => {
  expect(WebFramework).toMatchObject({})
})

test('framework contains components', () => {
  expect(WebFramework.Button).toBeTruthy()
})
