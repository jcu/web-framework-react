'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders without crashing', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(_Footer2.default, null));
});

test('shows current year', function () {
  var footer = (0, _enzyme.shallow)(_react2.default.createElement(_Footer2.default, null));
  var currentYear = new Date().getFullYear();
  expect(footer.contains(currentYear)).toBe(true);
});