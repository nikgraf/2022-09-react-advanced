## Merging Refs

What is the use-case?

When you need a ref for a hook in your component on and element, but also want to pass a ref (forwardRef) from the parent component to the same child element.

You really rarely need it, but when you do it's really good to know how to do it.

## Demo Solution

## How is it implemented?

see https://github.com/gregberge/react-merge-refs
or https://github.com/floating-ui/floating-ui/blob/master/packages/react/src/hooks/useMergeRefs.ts

```tsx
import * as React from "react";

export function useMergeRefs<Instance>(
  refs: Array<React.Ref<Instance>>
): React.RefCallback<Instance> | null {
  return React.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }

    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          (ref as React.MutableRefObject<Instance | null>).current = value;
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}
```

## Many implementations

- https://floating-ui.com/docs/usemergerefs
- https://chakra-ui.com/docs/hooks/use-merge-refs
- https://reverb.rockcontent.com/hooks/useMergeRefs/

## Exercise

As soon as the Input element should enter the viewport start animating the placeholder.

```tsx
const { ref, inView } = useInView();
const myRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  if (inView) {
    console.log("Input is in view");
    myRef.current?.setAttribute("placeholder", "H");
    setTimeout(() => {
      myRef.current?.setAttribute("placeholder", "He");
      setTimeout(() => {
        myRef.current?.setAttribute("placeholder", "Hel");
        setTimeout(() => {
          myRef.current?.setAttribute("placeholder", "Hell");
          setTimeout(() => {
            myRef.current?.setAttribute("placeholder", "Hello");
          }, 150);
        }, 150);
      }, 150);
    }, 150);
  }
}, [inView]);
```

Use the useMergeRefs hook to merge the refs and apply to the input element.

## References

- useMergeRefs
- https://codesandbox.io/s/xenodochial-grass-js3bo9?file=/src/Tooltip.tsx:3383-3395
