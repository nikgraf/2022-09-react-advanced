# Code Splitting with Reacy.lazy (and the bundler of your choice)

```tsx
import { lazy, Suspense } from "react";

const MarkdownPreview = lazy(() => import("./MarkdownPreview.js"));

const App = () => (
  <div>
    <h1>Markdown Editor</h1>
    <MarkdownEditor />
    <Suspense fallback={<div>loading …</div>}>
      <h2>Preview</h2>
      <MarkdownPreview />
    </Suspense>
  </div>
);
```

## Demo

https://beta.reactjs.org/reference/react/lazy
or the solution

## Where to use it?

- very large components
- large components that are not above the initial fold
- per page works surprisingly well

## Exercise

## Code-splitting with React.lazy

1. Add the following Chart component to your page and make sure it's loading later.

```jsx
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Chart() {
  return (
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="amt"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
  );
}

export default Chart;
```

## References

- https://beta.reactjs.org/reference/react/lazy
