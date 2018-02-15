'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ContentArea = require('./ContentArea');

var _ContentArea2 = _interopRequireDefault(_ContentArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders without crashing', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(_ContentArea2.default, null));
});

test('renders if empty', function () {
  var contentArea = (0, _enzyme.shallow)(_react2.default.createElement(_ContentArea2.default, null));
  expect(contentArea.html()).not.toBeNull();
});

test('renders child nodes', function () {
  var contentArea = (0, _enzyme.shallow)(_react2.default.createElement(
    _ContentArea2.default,
    null,
    _react2.default.createElement(
      'em',
      null,
      'Test'
    ),
    _react2.default.createElement(
      'b',
      null,
      'More content'
    )
  ));
  expect(contentArea.contains(_react2.default.createElement(
    'em',
    null,
    'Test'
  ))).toBe(true);
  expect(contentArea.contains(_react2.default.createElement(
    'b',
    null,
    'More content'
  ))).toBe(true);
});