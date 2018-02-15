This includes `NavTab` and `NavItem` as child components.

```jsx
const { StaticRouter } = require('react-router-dom')
const { NavTab, NavItem } = require('..');

<StaticRouter location="/" context={{}}>
  <NavTabs>
    <NavTab to="/">Home</NavTab>
    <NavTab to="/about">About</NavTab>
    <NavTab to="/about">Contact</NavTab>
    <NavItem className="pull-xs-right">
      <a className="nav-link" href="/login">Login</a>
    </NavItem>
  </NavTabs>
</StaticRouter>
```
