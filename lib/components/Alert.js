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

var variations = ['success', 'info', 'warning', 'danger'];

/**
 * Banner that provides a notice or other key information the user needs to
 * know or otherwise focus on.
 */

var Alert = function (_Component) {
  _inherits(Alert, _Component);

  function Alert(props) {
    _classCallCheck(this, Alert);

    var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

    _this.handleDismiss = function (event) {
      event.preventDefault();
      _this.setState({ isDissmissed: true });
    };

    _this.state = {
      isDissmissed: false
    };
    return _this;
  }

  _createClass(Alert, [{
    key: 'render',
    value: function render() {
      if (!this.props.children || this.state.isDissmissed) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'alert alert-' + this.props.variation, role: 'alert' },
        this.props.isDismissable && _react2.default.createElement(
          'button',
          { type: 'button', className: 'close', 'aria-label': 'Close', onClick: this.handleDismiss },
          _react2.default.createElement(
            'span',
            { 'aria-hidden': 'true' },
            '\xD7'
          )
        ),
        this.props.children
      );
    }
  }]);

  return Alert;
}(_react.Component);

Alert.propTypes = {
  variation: _propTypes2.default.oneOf(variations),
  /** If false, the alert cannot be closed using the close button */
  isDismissable: _propTypes2.default.bool,
  children: _propTypes2.default.node
};
Alert.defaultProps = {
  variation: 'info',
  isDismissable: true
};
Alert.variations = variations;
exports.default = Alert;