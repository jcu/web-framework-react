const path = require('path')
const { theme, styles } = require('./src/styleguide/styles')
const pkg = require('./package.json')

module.exports = {
  title: 'JCU Web Framework',
  template: './public/index.html',
  theme,
  styles,
  highlightTheme: 'jcu-light', // XXX To be removed on next release of styleguist
  editorConfig: {
    theme: 'jcu-light'
  },
  dangerouslyUpdateWebpackConfig: (webpackConfig, env) => {
    webpackConfig.resolve.alias['rsg-codemirror-theme.css'] =
      path.join(__dirname, 'src/styleguide/jcu-light.css')
    return webpackConfig
  },
  sections: [
    { name: 'Introduction', content: 'docs/introduction.md' },
    {
      name: 'Perceptual Patterns',
      content: 'docs/perceptual-patterns/index.md',
      sections: [
        {
          name: 'Typography',
          content: 'docs/perceptual-patterns/typography.md'
        },
        {
          name: 'Colours',
          content: 'docs/perceptual-patterns/colours.md'
        }
      ]
    },
    {
      name: 'Functional Patterns',
      content: 'docs/functional-patterns/index.md',
      sections: [
        {
          name: 'Components',
          components: 'src/components/**/*.js'
        },
        {
          name: 'Layout',
          components: 'src/layout/**/*.js'
        }
      ]
    }
  ],
  skipComponentsWithoutExample: true,
  getComponentPathLine (componentPath) {
    const name = path.basename(componentPath, '.js')
    return `import { ${name} } from '${pkg.name}'`
  },
  styleguideComponents: {
    LogoRenderer: path.join(__dirname, 'src/styleguide/Logo')
  }
}
