import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import NavItem from './NavItem'

export default class NavTab extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    className: PropTypes.string,
    exact: PropTypes.bool,
    children: PropTypes.node.isRequired
  }

  render () {
    return (
      <NavItem key={this.props.to} className={this.props.className}>
        <NavLink
          to={this.props.to}
          activeClassName='active'
          exact={this.props.exact}
          className='nav-link'
          role='tab'
        >
          {this.props.children}
        </NavLink>
      </NavItem>
    )
  }
}
