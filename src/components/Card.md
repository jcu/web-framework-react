```jsx
<Card>
  <h3 className="card-title">Card Title</h3>
  <p className="card-text">
    This is a standard Card.
  </p>
</Card>
```

All of the available variations are demonstrated here:

```jsx
{ Card.variations.filter(v => !!v).map((variation, i) =>
  <Card
    key={i}
    variation={variation}
    className={(variation && variation.includes('inverse')) ? 'bg-inverse' : null}>
    <h3 className="card-title">Card Title</h3>
    <p className="card-text">
      This is a card with <code>variation=&quot;{variation}&quot;</code>
    </p>
  </Card>
)}
```
