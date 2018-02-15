'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _NavItem = require('./NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders without crashing', function () {
  var navItem = (0, _enzyme.shallow)(_react2.default.createElement(
    _NavItem2.default,
    null,
    _react2.default.createElement(
      'b',
      null,
      'Hello world'
    )
  ));
  expect(navItem.contains(_react2.default.createElement(
    'b',
    null,
    'Hello world'
  ))).toBe(true);
});

test('renders with options', function () {
  var navItem = (0, _enzyme.shallow)(_react2.default.createElement(
    _NavItem2.default,
    { className: 'pull-right' },
    'Home'
  ));
  expect(navItem.hasClass('pull-right')).toBe(true);
});