## useDeferredValue

useDeferredValue(value) is hook that accepts a value and returns a new copy of the value that will defer to more urgent updates. The previous value is kept until urgent updates have completed. Then, the new value is rendered. This hook is similar to using debouncing or throttling to defer updates.

https://medium.com/ovrsea/asynchronous-rendering-with-usedeferredvalue-ce7b3675151f
Neat trick showing which one is stale: compare values
That said it might get expensive with more complex values e.g. large nested objects.

## Future usage

Avoid loading states in combination with Suspense data loading.

https://github.com/reactwg/react-18/discussions/129

> Here, the example does not do useDeferredValue:
> https://codesandbox.io/s/priceless-cannon-yhbqce?file=/src/App.js
> As you can see, when you type into the input, the combobox results constantly turn into "Loading..." and then back into results.

> This version does useDeferredValue:
> https://codesandbox.io/s/romantic-tharp-wedx58?file=/src/App.js
> When you type into the input, the previous combobox results are dimmed out while we're refetching.

## Exercise

Switching between the users is very slow due the slow hash calculation. Use `useDeferredValue` to deferre rendering the `VerificationCode` component.

In addition show the calculating indicator in case the deferredValue currently is stale (out of date).

## Resources

https://reactjs.org/docs/hooks-reference.html#usedeferredvalue
