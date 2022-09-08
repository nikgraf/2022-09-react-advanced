import { useState, useTransition, memo } from "react";

const SlowUI = ({ value }: any) => (
  <>
    {Array(value)
      .fill(1)
      .map((_, index) => (
        <span key={index}>{value - index} </span>
      ))}
  </>
);

const MemoedSlowUI = memo(SlowUI);

function App() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(50000);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    setValue((prevValue) => prevValue + 1);
    startTransition(() => setValue2((prevValue) => prevValue + 1));
  };

  return (
    <>
      <button onClick={handleClick}>{value}</button>
      <div
        style={{
          opacity: isPending ? 0.5 : 1,
        }}
      >
        <MemoedSlowUI value={value2} />
      </div>
    </>
  );
}

export default App;
