import React from 'react'
import { shallow, mount } from 'enzyme'
import Table from './Table'

const columns = [
  { id: 'first' },
  { id: 'last', display: 'Surname' }
]
const data = [
  { first: 'David', last: 'Jones' },
  { first: 'John', last: 'Smith' },
  { first: 'David', last: 'Anders' }
]

test('renders without crashing', () => {
  shallow(<Table />)
})

test('renders with options', () => {
  shallow(<Table data={data} columns={columns} sortable />)
})

test('renders responsive', () => {
  const hack = mount(<div><Table data={data} columns={columns} responsive /></div>)
  const tableWrapper = hack.children()
  expect(tableWrapper.children().first()).toMatchSelector('div.table-responsive')
})

test('renders unresponive', () => {
  const hack = mount(<div><Table data={data} columns={columns} responsive={false} /></div>)
  const table = hack.children()
  expect(table.children().first()).toHaveTagName('table')
})

test('renders table contents', () => {
  const table = shallow(<Table data={data} columns={columns} />)

  expect(table.find('th')).toHaveLength(2)
  expect(table.find('tr')).toHaveLength(4) // Header + data rows
  expect(table.find('td')).toHaveLength(6)
})

test('renders column display headers', () => {
  const table = shallow(<Table data={data} columns={columns} />)
  // Render if id only
  expect(table.find('th').contains('first')).toBe(true)
  // Render display over id
  expect(table.find('th').contains('last')).toBe(false)
  expect(table.find('th').contains('Surname')).toBe(true)
})

test('is sortable', () => {
  const table = shallow(<Table data={data} columns={columns} />)
  expect(table.find('th').first().prop('onClick')).toBeInstanceOf(Function)
})

test('disable sorting', () => {
  const table = shallow(<Table sortable={false} data={data} columns={columns} />)
  expect(table.find('th').first().prop('onClick')).toBeFalsy()
})

test('interaction by changing sort order', () => {
  const table = mount(<Table data={data} columns={columns} />)

  // By default, we sort on first column so this will always come first
  // (surname is not sorted)
  expect(table.find('td').at(0).text()).toMatch('David')
  expect(table.find('td').at(1).text()).toMatch('Jones')
  table.find('th').at(0).simulate('click')
  expect(table.find('td').at(0).text()).toMatch('John')
  expect(table.find('td').at(1).text()).toMatch('Smith')

  // Change sort to be surname, ascending
  table.find('th').at(1).simulate('click')
  expect(table.find('td').at(0).text()).toMatch('David')
  expect(table.find('td').at(1).text()).toMatch('Anders')
  // Change sort to be surname, descending
  table.find('th').at(1).simulate('click')
  expect(table.find('td').at(0).text()).toMatch('John')
  expect(table.find('td').at(1).text()).toMatch('Smith')
  // Change sort to be surname, ascending again
  table.find('th').at(1).simulate('click')
  expect(table.find('td').at(0).text()).toMatch('David')
  expect(table.find('td').at(1).text()).toMatch('Anders')

  // Change sort to be firstname, ascending (surname not sorted)
  table.find('th').at(0).simulate('click')
  expect(table.find('td').at(0).text()).toMatch('David')
  expect(table.find('td').at(1).text()).toMatch('Jones')
})

test('specify default renderer', () => {
  const table = shallow(
    <Table
      data={data}
      columns={columns}
      defaultRenderer={ value => value.toUpperCase() }
    />
  )
  expect(table.find('td').contains('DAVID')).toBe(true)
  expect(table.find('td').contains('JONES')).toBe(true)
})

test('specify specific renderers', () => {
  const table = shallow(
    <Table
      data={data}
      columns={columns}
      renderers={{ first: value => value.toUpperCase() }}
    />
  )
  expect(table.find('td').contains('DAVID')).toBe(true)
  expect(table.find('td').contains('Anders')).toBe(true)
  expect(table.find('td').contains('Jones')).toBe(true)
  expect(table.find('td').contains('JOHN')).toBe(true)
  expect(table.find('td').contains('Smith')).toBe(true)
})

test('specify row key callable', () => {
  const rowKeyFn = jest.fn().mockReturnThis()
  shallow(
    <Table
      data={data}
      columns={columns}
      rowKey={rowKeyFn}
    />
  )
  expect(rowKeyFn).toHaveBeenCalledTimes(data.length)
})
