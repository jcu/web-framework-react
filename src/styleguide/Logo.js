import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'rsg-components/Styled'

const styles = ({ fontFamily, color }) => ({
  logo: {
    textAlign: 'center',
    color: color.baseBackground
  }
})

export function LogoRenderer ({ classes, children }) {
  return (
    <h1 className={classes.logo}>
      <img
        className="img-fluid center-block"
        src="https://cdn.jcu.edu.au/1.0.0-beta.1/images/jcua-logo-mono-reversed.svg"
        alt="James Cook University"
      />
      <br />
      {children}
    </h1>
  )
}

LogoRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
}

export default Styled(styles)(LogoRenderer)
