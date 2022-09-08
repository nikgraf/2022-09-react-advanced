## useState

React 18 introduced "Automatic Batching" of State Updates.

Pro: more efficient state updates
Con: some existing probably won't but might break

```tsx
// Before: only React events were batched.
setTimeout(() => {
  setCount((c) => c + 1);
  setFlag((f) => !f);
  // React will render twice, once for each state update (no batching)
}, 1000);

// After: updates inside of timeouts, promises,
// native event handlers or any other event are batched.
setTimeout(() => {
  setCount((c) => c + 1);
  setFlag((f) => !f);
  // React will only re-render once at the end (that's batching!)
}, 1000);
```

## Demonstrate with +2 how the behaviour kept the same

## Recommendation for Concurrency

btw best to always do this

```tsx
setValue((prevValue) => prevValue + 1);
```

See `demo-sync-issue`
