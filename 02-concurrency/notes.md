## Concurrency

-> multiple computations are happening at the same time

## What?

> Concurrent Mode is a set of new features that help React apps stay responsive and gracefully adjust to the user’s device capabilities and network speed.

https://reactjs.org/docs/concurrent-mode-intro.html

- Render a React tree in the background without blocking the current React tree due concurrent rendering.
- Rendering is interruptable and can continued later on

Benefits:

- Not blocking an input while calculating a larger update.
- Stay on the old UI for a bit until the new UI is in a good enough state.

## UX

> Stay on the old UI for a bit until the new UI is in a good enough state.

Is this actually better? Yes, I didn't believe, but it is!

## New hooks

- useTransition
- useDeferredValue

- startTransition (for class components or where useTransition is not possible)

## Behaviour changes

### Existing Hooks

- useState
- useEffect / useLayoutEffect

### New Hooks

- useSyncExternalStore
- useInsetionEffect

### What's coming next

Suspense for data fetching

Let's dive in!
