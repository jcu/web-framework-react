const colors = {
  primary: '#06c'
}

module.exports = {
  theme: {
    color: {
      sidebarBackground: colors.primary
    },
    fontFamily: {
      base: null // Use defaults from Web Framework
    },
    borderRadius: 0
  },
  styles: {
    ComponentsList: {
      item: {
        '& a': {
          'color': 'rgba(255, 255, 255, 0.9) !important',
          '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer',
            color: '#fff !important'
          }
        }
      }
    }
  }
}
