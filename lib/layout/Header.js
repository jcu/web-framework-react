'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var logo = this.props.logo;

      // TODO: Could add lots more varities here (JCUS, etc)
      switch (logo) {
        case 'mono':
          logo = 'https://cdn.web.jcu.io/1.0.0-beta.1/images/jcua-logo-mono.svg';
          break;
        case 'mono-reversed':
          logo = 'https://cdn.web.jcu.io/1.0.0-beta.1/images/jcua-logo-mono-reversed.svg';
          break;
        case 'colour':
          logo = 'https://cdn.web.jcu.io/1.0.0-beta.1/images/jcua-logo-colour.svg';
          break;
        default:
          break;
      }

      var url = this.props.url || window.location.href;

      return _react2.default.createElement(
        'header',
        { className: 'container jcu-header jcu-header--banner jcu-bg--gradient-blue' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-lg-10 col-lg-offset-1 p-y-1 jcu-bg--black-75pc' },
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-6' },
                  _react2.default.createElement(
                    'a',
                    { href: url },
                    _react2.default.createElement('img', { className: 'img-fluid', src: logo, alt: 'JCU Australia logo' })
                  )
                ),
                this.props.appName && _react2.default.createElement(
                  'div',
                  { className: 'col-xs-6 text-sm-right' },
                  _react2.default.createElement(
                    'h1',
                    { className: 'jcu-header__page-title', id: 'page-title' },
                    _react2.default.createElement(
                      'span',
                      { className: 'sr-only' },
                      'James Cook University '
                    ),
                    this.props.appName
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

Header.propTypes = {
  logo: _propTypes2.default.string,
  url: _propTypes2.default.string,
  appName: _propTypes2.default.string
};
Header.defaultProps = {
  logo: 'mono-reversed'
};
exports.default = Header;