## TypeScript Changes

All the changes are documented here: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210

The probably most important change: `children` are not automatically added to `React.FC`.

You now can make children mandatory, optional or not allowed.

```tsx
import { useId } from "react";

const Checkbox: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input id={id} type="checkbox" name="react" />
    </>
  );
};

export default Checkbox;
```

vs

mandatory children? (they can be null and undefined)

```tsx
import { useId } from "react";

type Props = {
  children: React.ReactNode;
};

const Checkbox: React.FC<Props> = ({ children }) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input id={id} type="checkbox" name="react" />
    </>
  );
};

export default Checkbox;
```

## IMPORTANT: there is a codemod to update the types

```
npx types-react-codemod preset-18 ./src
```

https://github.com/eps1lon/types-react-codemod
