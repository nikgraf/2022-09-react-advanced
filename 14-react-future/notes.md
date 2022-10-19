## Explain / demo

## use

https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md
https://github.com/reactjs/rfcs/pull/229

What does really change?

### Data fetching

Before:

```tsx
const { data, isFetching} = useQuery(...);
```

After:

```tsx
// It suspends!
const data = use(fetchQuery(...));
```

### Other "Usable" types

Before:

```tsx
const theme = useThemeContext();
```

After:

```tsx
const theme = use(ThemeContext);
```

### Use can be used conditionally

```tsx
function Note({ id, shouldIncludeAuthor }) {
  const note = use(fetchNote(id));

  let byline = null;
  if (shouldIncludeAuthor) {
    const author = use(fetchNoteAuthor(note.authorId));
    byline = <h2>{author.displayName}</h2>;
  }

  return (
    <div>
      <h1>{note.title}</h1>
      {byline}
      <section>{note.body}</section>
    </div>
  );
}
```

### Let's wait for the `cache` RFC

## useEvent (canceled?)

https://typeofnan.dev/what-the-useevent-react-hook-is-and-isnt/

https://github.com/reactjs/rfcs/pull/220
https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md

Why not use `useCallback`?
see https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md#drawbacks

## <Offscreen>

https://reactjs.org/blog/2022/03/29/react-v18.html#what-is-concurrent-react

## React Server Errors

https://github.com/reactjs/rfcs/blob/useevent/text/0215-server-errors-in-react-18.md

## injectToStream

https://github.com/reactjs/rfcs/pull/219

## React Server Components

https://github.com/reactjs/rfcs/pull/188
https://github.com/reactjs/rfcs/pull/189

## Lazy Context Propagation?

React Fiber

https://github.com/reactjs/rfcs/blob/useevent/text/0118-lazy-context-propagation.md

## Test Selectors?

https://github.com/reactjs/rfcs/pull/221
