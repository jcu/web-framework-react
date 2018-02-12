import React, { Component } from 'react'

export default class Footer extends Component {
  render () {
    return (
      <footer className="container jcu-footer">
        <div className="row jcu-colophon">
          <div className="col-xs-12">
            <ul className="list-inline">
              <li className="list-inline-item">
                Copyright &copy; 1995 to {(new Date()).getFullYear()} James Cook University.  All rights reserved.
              </li>
              <li className="list-inline-item">ABN 46253211955</li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}
