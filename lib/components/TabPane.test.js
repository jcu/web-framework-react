'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _TabPane = require('./TabPane');

var _TabPane2 = _interopRequireDefault(_TabPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders without crashing', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(_TabPane2.default, { id: 'home' }));
});

test('render if empty', function () {
  var tabPane = (0, _enzyme.shallow)(_react2.default.createElement(_TabPane2.default, { id: 'home' }));
  expect(tabPane.html()).not.toBeNull();
});

test('renders children', function () {
  var tabPane = (0, _enzyme.shallow)(_react2.default.createElement(
    _TabPane2.default,
    { id: 'home' },
    _react2.default.createElement(
      'h1',
      null,
      'Heading'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Content'
    )
  ));
  expect(tabPane.children()).toHaveLength(2);
});

test('tab pane is not active', function () {
  var tabPane = (0, _enzyme.shallow)(_react2.default.createElement(_TabPane2.default, { id: 'home' }));
  expect(tabPane.hasClass('active')).toBe(false);

  tabPane = (0, _enzyme.shallow)(_react2.default.createElement(_TabPane2.default, { id: 'home', activeTabe: 'elsewhere' }));
  expect(tabPane.hasClass('active')).toBe(false);
});

test('becomes active tab', function () {
  var tabPane = (0, _enzyme.shallow)(_react2.default.createElement(_TabPane2.default, { id: 'home', activeTab: 'home' }));
  expect(tabPane.hasClass('active')).toBe(true);
});