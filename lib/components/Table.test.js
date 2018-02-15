'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Table = require('./Table');

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var columns = [{ id: 'first' }, { id: 'last', display: 'Surname' }];
var data = [{ first: 'David', last: 'Jones' }, { first: 'John', last: 'Smith' }, { first: 'David', last: 'Anders' }];

test('renders without crashing', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(_Table2.default, null));
});

test('renders with options', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(_Table2.default, { data: data, columns: columns, sortable: true }));
});

test('renders table contents', function () {
  var table = (0, _enzyme.shallow)(_react2.default.createElement(_Table2.default, { data: data, columns: columns }));

  expect(table.find('th')).toHaveLength(2);
  expect(table.find('tr')).toHaveLength(4); // Header + data rows
  expect(table.find('td')).toHaveLength(6);
});

test('renders column display headers', function () {
  var table = (0, _enzyme.shallow)(_react2.default.createElement(_Table2.default, { data: data, columns: columns }));
  // Render if id only
  expect(table.find('th').contains('first')).toBe(true);
  // Render display over id
  expect(table.find('th').contains('last')).toBe(false);
  expect(table.find('th').contains('Surname')).toBe(true);
});

test('is sortable', function () {
  var table = (0, _enzyme.shallow)(_react2.default.createElement(_Table2.default, { data: data, columns: columns }));
  expect(table.find('th').first().prop('onClick')).toBeInstanceOf(Function);
});

test('disable sorting', function () {
  var table = (0, _enzyme.shallow)(_react2.default.createElement(_Table2.default, { sortable: false, data: data, columns: columns }));
  expect(table.find('th').first().prop('onClick')).toBeFalsy();
});

test('interaction by changing sort order', function () {
  var table = (0, _enzyme.mount)(_react2.default.createElement(_Table2.default, { data: data, columns: columns }));

  // By default, we sort on first column so this will always come first
  // (surname is not sorted)
  expect(table.find('td').at(0).text()).toMatch('David');
  expect(table.find('td').at(1).text()).toMatch('Jones');
  table.find('th').at(0).simulate('click');
  expect(table.find('td').at(0).text()).toMatch('John');
  expect(table.find('td').at(1).text()).toMatch('Smith');

  // Change sort to be surname, ascending
  table.find('th').at(1).simulate('click');
  expect(table.find('td').at(0).text()).toMatch('David');
  expect(table.find('td').at(1).text()).toMatch('Anders');
  // Change sort to be surname, descending
  table.find('th').at(1).simulate('click');
  expect(table.find('td').at(0).text()).toMatch('John');
  expect(table.find('td').at(1).text()).toMatch('Smith');
  // Change sort to be surname, ascending again
  table.find('th').at(1).simulate('click');
  expect(table.find('td').at(0).text()).toMatch('David');
  expect(table.find('td').at(1).text()).toMatch('Anders');

  // Change sort to be firstname, ascending (surname not sorted)
  table.find('th').at(0).simulate('click');
  expect(table.find('td').at(0).text()).toMatch('David');
  expect(table.find('td').at(1).text()).toMatch('Jones');
});

test('specify default renderer', function () {
  var table = (0, _enzyme.shallow)(_react2.default.createElement(_Table2.default, {
    data: data,
    columns: columns,
    defaultRenderer: function defaultRenderer(value) {
      return value.toUpperCase();
    }
  }));
  expect(table.find('td').contains('DAVID')).toBe(true);
  expect(table.find('td').contains('JONES')).toBe(true);
});

test('specify specific renderers', function () {
  var table = (0, _enzyme.shallow)(_react2.default.createElement(_Table2.default, {
    data: data,
    columns: columns,
    renderers: { first: function first(value) {
        return value.toUpperCase();
      } }
  }));
  expect(table.find('td').contains('DAVID')).toBe(true);
  expect(table.find('td').contains('Anders')).toBe(true);
  expect(table.find('td').contains('Jones')).toBe(true);
  expect(table.find('td').contains('JOHN')).toBe(true);
  expect(table.find('td').contains('Smith')).toBe(true);
});

test('specify row key callable', function () {
  var rowKeyFn = jest.fn().mockReturnThis();
  (0, _enzyme.shallow)(_react2.default.createElement(_Table2.default, {
    data: data,
    columns: columns,
    rowKey: rowKeyFn
  }));
  expect(rowKeyFn).toHaveBeenCalledTimes(data.length);
});