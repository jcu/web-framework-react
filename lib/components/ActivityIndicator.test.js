'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ActivityIndicator = require('./ActivityIndicator');

var _ActivityIndicator2 = _interopRequireDefault(_ActivityIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders without crashing', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(_ActivityIndicator2.default, null));
});

test('renders with options', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(_ActivityIndicator2.default, { alt: 'It\'s happening!' }));
});

test('set up correctly', function () {
  var indicator = (0, _enzyme.shallow)(_react2.default.createElement(_ActivityIndicator2.default, { inline: false }));
  expect(indicator.type()).toBe('img');
});

test('different types', function () {
  var indicator = (0, _enzyme.shallow)(_react2.default.createElement(_ActivityIndicator2.default, { variation: 'light' }));
  expect(indicator.type()).toBe('img');
});