'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _TabContent = require('./TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders without crashing', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(_TabContent2.default, null));
});

test('do not render if empty', function () {
  var tabContent = (0, _enzyme.shallow)(_react2.default.createElement(_TabContent2.default, null));
  expect(tabContent.html()).toBeNull();
});

test('renders children', function () {
  var tabContent = (0, _enzyme.shallow)(_react2.default.createElement(
    _TabContent2.default,
    null,
    'Hello world'
  ));
  expect(tabContent.find('.tab-content').exists()).toBe(true);
  expect(tabContent.text()).toMatch('Hello world');
});