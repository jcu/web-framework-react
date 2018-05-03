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

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'resolveVersionString',
    value: function resolveVersionString() {
      // this bit of fancy footwork makes the `version` prop
      // work as a boolean, to use a default value:
      //     <Footer version />
      // and also as a string to supply a value directly:
      //     <Footer version="1.2.3" />
      var vString = this.props.version;
      if (vString === true) {
        // boolean true means they've requested the default version
        vString = process.env.REACT_APP_VERSION || '';
      } else if (vString === false) {
        // boolean false means some looney has passed in `false`
        vString = '';
      }
      // vString is now one of:
      //     - the string specified as the `version` prop value
      //     - the string from the REACT_APP_VERSION env var
      //     - '' coz REACT_APP_VERSION wasn't set
      //     - '' coz that's the prop's default value
      //     - '' coz the weirdo user passed in `false`
      return vString;
    }
  }, {
    key: 'render',
    value: function render() {
      var versionTag = this.resolveVersionString();
      if (versionTag !== '') {
        // if the user provided a versionUrl..
        if (this.props.versionUrl) {
          versionTag = _react2.default.createElement(
            'a',
            { href: this.props.versionUrl },
            versionTag
          );
        }
        // TODO: bootstrap 'pull-*-right' will become 'float-*-right'
        versionTag = _react2.default.createElement(
          'div',
          { className: 'pull-xs-right float-xs-right' },
          versionTag
        );
      }

      return _react2.default.createElement(
        'footer',
        { className: 'container jcu-footer' },
        _react2.default.createElement(
          'div',
          { className: 'row jcu-colophon' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            versionTag,
            _react2.default.createElement(
              'ul',
              { className: 'list-inline' },
              _react2.default.createElement(
                'li',
                { className: 'list-inline-item' },
                'Copyright \xA9 1995 to ',
                new Date().getFullYear(),
                ' James Cook University.  All rights reserved.'
              ),
              _react2.default.createElement(
                'li',
                { className: 'list-inline-item' },
                'ABN 46253211955'
              ),
              _react2.default.createElement(
                'li',
                { className: 'list-inline-item' },
                'CRICOS Provider Code 00117J'
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

Footer.propTypes = {
  /** Include a version number (defaults to the app version, otherwise specify a string) */
  version: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  /** Displayed version number will be a link to this URL */
  versionUrl: _propTypes2.default.string
};
Footer.defaultProps = {
  version: ''
};
exports.default = Footer;