'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders without crashing', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(_Button2.default, null));
});

test('renders with options', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(
    _Button2.default,
    { variation: 'secondary' },
    'Click me'
  ));
});

test('do not render if empty', function () {
  var button = (0, _enzyme.shallow)(_react2.default.createElement(_Button2.default, null));
  expect(button.html()).toBeNull();
});

test('renders child nodes', function () {
  var button = (0, _enzyme.shallow)(_react2.default.createElement(
    _Button2.default,
    { variation: 'warning' },
    _react2.default.createElement(
      'em',
      null,
      'Test'
    ),
    _react2.default.createElement(
      'b',
      null,
      'Click me'
    )
  ));

  expect(button.children()).toHaveLength(2);
  expect(button.contains(_react2.default.createElement(
    'b',
    null,
    'Click me'
  ))).toBe(true);
});

test('set up correctly', function () {
  var button = (0, _enzyme.shallow)(_react2.default.createElement(
    _Button2.default,
    { variation: 'warning', className: 'extra' },
    'Click me'
  ));
  expect(button.type()).toBe('button');
  expect(button.hasClass('btn-warning')).toBe(true);
  expect(button.hasClass('extra')).toBe(true);
  expect(button.text()).toBe('Click me');
});

test('configured events occur', function () {
  var result = void 0;
  function click() {
    result = 'success';
  }
  var button = (0, _enzyme.shallow)(_react2.default.createElement(
    _Button2.default,
    { onClick: click },
    'Click me'
  ));
  expect(result).toBeUndefined();
  button.simulate('click');
  expect(result).toBe('success');
});

test('does not show progress', function () {
  var button = (0, _enzyme.shallow)(_react2.default.createElement(
    _Button2.default,
    null,
    'Sending\u2026'
  ));
  var indicator = button.find('ActivityIndicator');
  expect(indicator.exists()).toBe(false);
});

test('indicates progress', function () {
  var button = (0, _enzyme.shallow)(_react2.default.createElement(
    _Button2.default,
    { inProgress: true },
    'Sending\u2026'
  ));
  var indicator = button.find('ActivityIndicator');
  expect(indicator.exists()).toBe(true);
});