This is currently debugging the given data structure but will accept any
JSON-stringifiable object, such as a component's state or any other data.

```jsx
// Can be any other object or data structure from your app
const data = { inProgress: true, name: 'James Cook', action: 'studying' };
<Debug object={data} forceDisplay />
```

In this demo, we use `forceDisplay` to always display the debugged output,
irrespective of whether we have built for development or production. In
production systems, `Debug` output is hidden automatically so you should omit
this prop.

