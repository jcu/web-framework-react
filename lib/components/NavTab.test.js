'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _NavTab = require('./NavTab');

var _NavTab2 = _interopRequireDefault(_NavTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders without crashing', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(
    _NavTab2.default,
    { to: '/' },
    'Home'
  ));
});

test('renders with options', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(
    _NavTab2.default,
    { to: '/', exact: false },
    'Home'
  ));
});

test('renders children', function () {
  var navTab = (0, _enzyme.shallow)(_react2.default.createElement(
    _NavTab2.default,
    { to: '/' },
    _react2.default.createElement('img', { src: 'icon.svg' }),
    _react2.default.createElement(
      'b',
      null,
      'Home'
    )
  ));
  expect(navTab.find('NavLink').children()).toHaveLength(2);
});