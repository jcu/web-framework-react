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

var Table = function (_Component) {
  _inherits(Table, _Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.renderColumn = function (column, value, row, table) {
      if (_this.props.renderers && _this.props.renderers[column]) {
        return _this.props.renderers[column](value, row, table);
      }

      if (_this.props.defaultRenderer) {
        return _this.props.defaultRenderer(value, row, table);
      }

      return value;
    };

    _this.handleHeaderClick = function (column, event) {
      event.preventDefault();
      var direction = 'asc';
      // Invert the sort order if re-selecting same column
      if (_this.state.sortOrder.column === column) {
        direction = _this.state.sortOrder.direction === 'asc' ? 'desc' : 'asc';
      }
      _this.setState({
        sortOrder: { column: column, direction: direction }
      });
    };

    _this.state = {
      sortOrder: {
        column: _this.props.columns.length ? _this.props.columns[0].id : null,
        direction: 'asc'
      }
    };
    return _this;
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.data.length === 0 || this.props.columns.length === 0) {
        return null;
      }

      var data = JSON.parse(JSON.stringify(this.props.data));
      if (this.props.sortable) {
        data.sort(function (a, b) {
          var first = a[_this2.state.sortOrder.column];
          var second = b[_this2.state.sortOrder.column];
          if (first === second) {
            return 0;
          } else if (first > second) {
            return _this2.state.sortOrder.direction === 'asc' ? 1 : -1;
          } else {
            return _this2.state.sortOrder.direction === 'asc' ? -1 : 1;
          }
        });
      }

      return _react2.default.createElement(
        'table',
        { className: 'table ' + this.props.className },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            this.props.columns.map(function (column) {
              var isSortable = _this2.props.sortable && column.sortable !== false;
              var isSortColumn = _this2.state.sortOrder.column === column.id;
              return _react2.default.createElement(
                'th',
                {
                  key: column.id,
                  onClick: isSortable ? function (event) {
                    return _this2.handleHeaderClick(column.id, event);
                  } : undefined,
                  style: isSortable ? { cursor: 'pointer',
                    userSelect: 'none',
                    MozUserSelect: 'none',
                    WebkitUserSelect: 'none' } : null },
                column.display || column.id,
                isSortable && (isSortColumn ? _react2.default.createElement(
                  'span',
                  { className: 'text-primary' },
                  _this2.state.sortOrder.direction === 'asc' ? '\xA0\u25B2' : '\xA0\u25BC'
                ) : _react2.default.createElement(
                  'span',
                  { style: { visibility: 'hidden' } },
                  '\xA0\u25BC'
                ))
              );
            })
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          data.map(function (row, index) {
            return _react2.default.createElement(
              'tr',
              { key: _this2.props.rowKey ? _this2.props.rowKey(row, index) : index },
              _this2.props.columns.map(function (column) {
                return _react2.default.createElement(
                  'td',
                  { key: column.id },
                  _this2.renderColumn(column.id, row[column.id], row, data)
                );
              })
            );
          })
        )
      );
    }
  }]);

  return Table;
}(_react.Component);

Table.propTypes = {
  className: _propTypes2.default.string,
  data: _propTypes2.default.array.isRequired,
  defaultRenderer: _propTypes2.default.func,
  renderers: _propTypes2.default.object,
  columns: _propTypes2.default.array.isRequired,
  rowKey: _propTypes2.default.func,
  sortable: _propTypes2.default.bool
};
Table.defaultProps = {
  className: '',
  data: [],
  renderers: {},
  columns: [],
  sortable: true
};
exports.default = Table;