'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Alert = require('./Alert');

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders without crashing', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(_Alert2.default, null));
});

test('renders with options', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(
    _Alert2.default,
    { variation: 'warning' },
    'Watch out!'
  ));
});

test('do not render if empty', function () {
  var alert = (0, _enzyme.shallow)(_react2.default.createElement(_Alert2.default, { variation: 'warning' }));
  expect(alert.html()).toBeNull();
});

test('renders child nodes', function () {
  var alert = (0, _enzyme.shallow)(_react2.default.createElement(
    _Alert2.default,
    { variation: 'warning', isDismissable: false },
    _react2.default.createElement(
      'a',
      { className: 'dummy' },
      'Link'
    ),
    _react2.default.createElement(
      'a',
      { className: 'dummy' },
      'Link 2'
    ),
    'Watch out!'
  ));

  expect(alert.children()).toHaveLength(3);
});

test('set up correctly', function () {
  var alert = (0, _enzyme.shallow)(_react2.default.createElement(
    _Alert2.default,
    { variation: 'warning', isDismissable: false },
    'Watch out!'
  ));
  expect(alert.type()).toBe('div');
  expect(alert.hasClass('alert-warning')).toBe(true);
  expect(alert.text()).toBe('Watch out!');
});

test('is dismissable', function () {
  var alert = (0, _enzyme.shallow)(_react2.default.createElement(
    _Alert2.default,
    { isDismissable: true },
    'Watch out!'
  ));
  var closeButton = alert.find('.close');
  expect(closeButton.exists()).toBe(true);

  expect(alert.html()).not.toBeNull();
  closeButton.simulate('click', { preventDefault: function preventDefault() {} });
  expect(alert.html()).toBeNull();
});