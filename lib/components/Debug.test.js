'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Debug = require('./Debug');

var _Debug2 = _interopRequireDefault(_Debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Take care to restore NODE_ENV during any of these tests
// or the remainder of tests in other files will break

test('renders without crashing', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(_Debug2.default, { object: { hello: 'world' } }));
});

test('does not render in test', function () {
  var debug = (0, _enzyme.shallow)(_react2.default.createElement(_Debug2.default, { object: { hello: 'world' } }));
  expect(debug.html()).toBeNull();
});

test('only renders in development', function () {
  var originalEnv = process.env.NODE_ENV;

  process.env.NODE_ENV = 'development';
  var debug = (0, _enzyme.shallow)(_react2.default.createElement(_Debug2.default, { object: 'hello' }));
  expect(debug.html()).not.toBeNull();

  process.env.NODE_ENV = 'production';
  var debugProd = (0, _enzyme.shallow)(_react2.default.createElement(_Debug2.default, { object: 'hello' }));
  expect(debugProd.html()).toBeNull();

  process.env.NODE_ENV = originalEnv;
});

test('renders if forced', function () {
  var originalEnv = process.env.NODE_ENV;

  process.env.NODE_ENV = 'production';
  var debug = (0, _enzyme.shallow)(_react2.default.createElement(_Debug2.default, { object: 'hello', forceDisplay: true }));
  expect(debug.html()).not.toBeNull();

  process.env.NODE_ENV = originalEnv;
});