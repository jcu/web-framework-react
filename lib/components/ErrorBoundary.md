If an exception occurs within this component, it gets caught and handled like so:

```jsx
// Dummy Component that errors during rendering
function Uhoh () {
  throw 'Boom'
}

<ErrorBoundary appName="Your app name" appContact="Contact name">
  <Uhoh />
</ErrorBoundary>
```
