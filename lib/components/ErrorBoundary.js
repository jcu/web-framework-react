'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Alert = require('./Alert');

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorBoundary = function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    _classCallCheck(this, ErrorBoundary);

    var _this = _possibleConstructorReturn(this, (ErrorBoundary.__proto__ || Object.getPrototypeOf(ErrorBoundary)).call(this, props));

    _this.state = { hasError: false };
    return _this;
  }

  // eslint-disable-next-line handle-callback-err


  _createClass(ErrorBoundary, [{
    key: 'componentDidCatch',
    value: function componentDidCatch(error, info) {
      this.setState({ hasError: true, details: arguments });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.hasError) {
        return _react2.default.createElement(
          'div',
          { className: 'container m-t-3' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-10 col-xs-push-1' },
              _react2.default.createElement(
                _Alert2.default,
                { type: 'danger', isDismissable: false },
                _react2.default.createElement(
                  'p',
                  { className: 'lead' },
                  'Oops! An error occurred within this app.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'You can try ',
                  _react2.default.createElement(
                    'a',
                    { href: window.location.href },
                    'reloading'
                  ),
                  ' the page to see if that fixes the issue.'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'm-b-2' },
                  'If the problem persists, contact the',
                  ' ',
                  _react2.default.createElement(
                    'a',
                    { href: this.props.helpUrl },
                    this.props.helpContact
                  ),
                  ' and let us know about your issue, including the URL you\'re on. You can copy and paste the following:'
                ),
                _react2.default.createElement(
                  'pre',
                  null,
                  'App: ',
                  this.props.appName,
                  '\n',
                  this.props.appContact && _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    'App Contact: ',
                    this.props.appContact,
                    '\n'
                  ),
                  'URL: ',
                  window.location.href,
                  '\n',
                  'Browser: ',
                  navigator.userAgent,
                  '\n',
                  'Details: [tell us what you were trying to do and what happened]'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Thanks for your patience!'
                )
              )
            )
          )
        );
      }
      return this.props.children;
    }
  }]);

  return ErrorBoundary;
}(_react2.default.Component);

ErrorBoundary.propTypes = {
  children: _propTypes2.default.node,
  appName: _propTypes2.default.string.isRequired,
  appContact: _propTypes2.default.string,
  helpContact: _propTypes2.default.string.isRequired,
  helpUrl: _propTypes2.default.string.isRequired
};
ErrorBoundary.defaultProps = {
  helpContact: 'IT Helpdesk',
  helpUrl: 'https://www.jcu.edu.au/helpdesk'
};
exports.default = ErrorBoundary;