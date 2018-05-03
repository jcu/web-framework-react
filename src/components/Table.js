import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Table extends Component {
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.array.isRequired,
    defaultRenderer: PropTypes.func,
    renderers: PropTypes.object,
    columns: PropTypes.array.isRequired,
    rowKey: PropTypes.func,
    sortable: PropTypes.bool,
    responsive: PropTypes.bool
  }

  static defaultProps = {
    className: '',
    data: [],
    renderers: {},
    columns: [],
    sortable: true,
    responsive: true
  }

  constructor (props) {
    super(props)
    this.state = {
      sortOrder: {
        column: this.props.columns.length ? this.props.columns[0].id : null,
        direction: 'asc'
      }
    }
  }

  renderColumn = (column, value, row, table) => {
    if (this.props.renderers && this.props.renderers[column]) {
      return this.props.renderers[column](value, row, table)
    }

    if (this.props.defaultRenderer) {
      return this.props.defaultRenderer(value, row, table)
    }

    return value
  }

  handleHeaderClick = (column, event) => {
    event.preventDefault()
    let direction = 'asc'
    // Invert the sort order if re-selecting same column
    if (this.state.sortOrder.column === column) {
      direction = this.state.sortOrder.direction === 'asc' ? 'desc' : 'asc'
    }
    this.setState({
      sortOrder: { column, direction }
    })
  }

  render () {
    if (this.props.data.length === 0 || this.props.columns.length === 0) {
      return null
    }

    let data = JSON.parse(JSON.stringify(this.props.data))
    if (this.props.sortable) {
      data.sort((a, b) => {
        const first = a[this.state.sortOrder.column]
        const second = b[this.state.sortOrder.column]
        if (first === second) {
          return 0
        } else if (first > second) {
          return this.state.sortOrder.direction === 'asc' ? 1 : -1
        } else {
          return this.state.sortOrder.direction === 'asc' ? -1 : 1
        }
      })
    }

    const table = (
      <table className={'table ' + this.props.className}>
        <thead>
          <tr>
            {this.props.columns.map(column => {
              const isSortable =
                this.props.sortable && column.sortable !== false
              const isSortColumn = this.state.sortOrder.column === column.id
              return (
                <th
                  key={column.id}
                  onClick={
                    isSortable
                      ? event => this.handleHeaderClick(column.id, event)
                      : undefined
                  }
                  style={
                    isSortable
                      ? {
                        cursor: 'pointer',
                        userSelect: 'none',
                        MozUserSelect: 'none',
                        WebkitUserSelect: 'none'
                      }
                      : null
                  }
                >
                  {column.display || column.id}
                  {isSortable &&
                    (isSortColumn ? (
                      <span className='text-primary'>
                        {this.state.sortOrder.direction === 'asc'
                          ? '\u00A0▲'
                          : '\u00A0▼'}
                      </span>
                    ) : (
                      <span style={{ visibility: 'hidden' }}>&nbsp;▼</span>
                    ))}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={this.props.rowKey ? this.props.rowKey(row, index) : index}>
              {this.props.columns.map(column => (
                <td key={column.id}>
                  {this.renderColumn(column.id, row[column.id], row, data)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )

    return (
      <React.Fragment>
        {this.props.responsive ? (
          <div className='table-responsive'>{table}</div>
        ) : (
          table
        )}
      </React.Fragment>
    )
  }
}
