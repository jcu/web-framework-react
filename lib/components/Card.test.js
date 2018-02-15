'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders without crashing', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(_Card2.default, null));
});

test('renders with options', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(
    _Card2.default,
    { variation: 'inverse' },
    'Hello world'
  ));
});

test('do not render if empty', function () {
  var card = (0, _enzyme.shallow)(_react2.default.createElement(_Card2.default, null));
  expect(card.html()).toBeNull();
});

test('renders child nodes', function () {
  var card = (0, _enzyme.shallow)(_react2.default.createElement(
    _Card2.default,
    null,
    _react2.default.createElement(
      'em',
      null,
      'Test'
    )
  ));
  expect(card.children()).toHaveLength(1);
  expect(card.contains(_react2.default.createElement(
    'em',
    null,
    'Test'
  ))).toBe(true);
});