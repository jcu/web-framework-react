'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders without crashing', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, null));
});

test('render logo variations', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, { logo: 'mono' }));
  (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, { logo: 'colour' }));
});

test('links to app url', function () {
  var url = 'https://example.com';
  var header = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, { url: url }));
  expect(header.find('a[href="' + url + '"]')).not.toBeNull();
});

test('shows logo variation', function () {
  var header = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, { logo: 'mono' }));
  expect(header.find('img').html()).toMatch('mono');
});

test('shows custom logo url', function () {
  var logoUrl = 'https://example.com/logo.svg';
  var header = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, { logo: logoUrl }));
  expect(header.find('img').html()).toMatch(logoUrl);
});

test('shows app name', function () {
  var header = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, { appName: 'Hello world' }));
  expect(header.contains('Hello world')).toBe(true);
});