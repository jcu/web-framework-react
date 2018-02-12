```jsx
<div>
  <Button variation="primary">Primary button</Button> {' '}
  <Button variation="secondary">Secondary button</Button> {' '}
</div>
```

All of the available variations are demonstrated here:

```jsx
{ Button.variations.map((variation, i) =>
  <React.Fragment key={i}>
    <Button variation={variation}>{variation}</Button>{' '}
  </React.Fragment>
)}
```
