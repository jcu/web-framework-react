'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ErrorBoundary = require('./ErrorBoundary');

var _ErrorBoundary2 = _interopRequireDefault(_ErrorBoundary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders without crashing', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(_ErrorBoundary2.default, { appName: 'Test' }));
});

test('renders with options', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(_ErrorBoundary2.default, {
    appName: 'Test',
    appContact: 'JCU',
    helpContact: 'Helpdesk',
    helpUrl: 'https://example.com'
  }));
});

test('renders child nodes', function () {
  // Use mount instead of shallow to work around
  // https://github.com/airbnb/enzyme/issues/1213#issuecomment-361822184
  var eb = (0, _enzyme.mount)(_react2.default.createElement(
    _ErrorBoundary2.default,
    { appName: 'Test' },
    _react2.default.createElement(
      'a',
      { className: 'dummy' },
      'Link'
    ),
    _react2.default.createElement(
      'a',
      { className: 'dummy' },
      'Link 2'
    )
  ));
  expect(eb.children()).toHaveLength(2);
});

test('renders alert on error', function () {
  var eb = (0, _enzyme.shallow)(_react2.default.createElement(_ErrorBoundary2.default, { appName: 'Test' }));
  eb.setState({ hasError: true });
  expect(eb.find('Alert')).toBePresent();
});

test('renders alert on uncaught exception', function () {
  var Uhoh = function Uhoh() {
    throw 'Kaboom'; // eslint-disable-line no-throw-literal
  };
  var App = function App() {};
  // This causes react-dom to log an error, but the tests succeed
  var eb = (0, _enzyme.mount)(_react2.default.createElement(
    _ErrorBoundary2.default,
    { appName: 'Test', appContact: 'JCU' },
    _react2.default.createElement(Uhoh, null),
    _react2.default.createElement(App, null)
  ));
  expect(eb.find('Alert')).toBePresent();
  expect(eb.find('App')).not.toBePresent();
});