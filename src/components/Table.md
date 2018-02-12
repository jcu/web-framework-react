```jsx
const data = [
  { a: 1, b: 2, c: 3 },
  { a: 'a', b: 'b', c: 'c' }
]
const columns = [
  { id: 'a', display: 'Column A' },
  { id: 'b', display: 'Column B' },
  { id: 'c', display: 'Column C' }
];

<Table data={data} columns={columns} />
```
