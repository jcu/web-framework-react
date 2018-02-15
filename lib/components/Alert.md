Basic HTML:

```html
<div class="alert alert-info">
  <strong>O-Week Begins Tomorrow!</strong> Don&apos;t forget to get your textbooks.
</div>
```

As a React component:

```jsx
<Alert>
  <strong>O-Week Begins Tomorrow!</strong> Don&apos;t forget to get your textbooks.
</Alert>
```

All of the available variations are demonstrated here:

```jsx
<div>
  { Alert.variations.map((variation, i) =>
  <Alert key={i} variation={variation}>
    This is an alert with <code>variation=&quot;{variation}&quot;</code>
    </Alert>
  )}
</div>
```
