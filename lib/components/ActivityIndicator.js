'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _puff = require('../img/puff.svg');

var _puff2 = _interopRequireDefault(_puff);

var _puffDark = require('../img/puff-dark.svg');

var _puffDark2 = _interopRequireDefault(_puffDark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Simple visual indicator showing that some form of activity is occurring.
 * Several variations are available for different styling.
 */
var ActivityIndicator = function (_Component) {
  _inherits(ActivityIndicator, _Component);

  function ActivityIndicator() {
    _classCallCheck(this, ActivityIndicator);

    return _possibleConstructorReturn(this, (ActivityIndicator.__proto__ || Object.getPrototypeOf(ActivityIndicator)).apply(this, arguments));
  }

  _createClass(ActivityIndicator, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('img', {
        className: this.props.className,
        src: this.props.variation === 'dark' ? _puffDark2.default : _puff2.default,
        alt: this.props.alt,
        style: this.props.inline && { width: '2ch', verticalAlign: 'sub' }
      });
    }
  }]);

  return ActivityIndicator;
}(_react.Component);

ActivityIndicator.propTypes = {
  variation: _propTypes2.default.oneOf(['light', 'dark']).isRequired,
  /** Whether the indicator is used inline with text */
  inline: _propTypes2.default.bool.isRequired,
  className: _propTypes2.default.string,
  /** Alt text for this indicator image */
  alt: _propTypes2.default.string.isRequired
};
ActivityIndicator.defaultProps = {
  variation: 'dark',
  inline: true,
  alt: 'Action in progress'
};
exports.default = ActivityIndicator;