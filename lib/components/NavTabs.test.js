'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _NavTabs = require('./NavTabs');

var _NavTabs2 = _interopRequireDefault(_NavTabs);

var _NavTab = require('./NavTab');

var _NavTab2 = _interopRequireDefault(_NavTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders without crashing', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(_NavTabs2.default, null));
});

test('do not render if empty', function () {
  var navTabs = (0, _enzyme.shallow)(_react2.default.createElement(_NavTabs2.default, null));
  expect(navTabs.html()).toBeNull();
});

test('renders children', function () {
  var navTabs = (0, _enzyme.shallow)(_react2.default.createElement(
    _NavTabs2.default,
    null,
    _react2.default.createElement(
      _NavTab2.default,
      { to: '/' },
      'Home'
    ),
    _react2.default.createElement(
      _NavTab2.default,
      { to: '/about' },
      'About'
    )
  ));
  expect(navTabs.children()).toHaveLength(2);
  expect(navTabs.find('NavTab')).toHaveLength(2);
});