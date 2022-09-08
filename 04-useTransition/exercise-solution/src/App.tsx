import { useState, useTransition, memo, useEffect } from "react";
import { faker } from "@faker-js/faker";

type NameProps = {
  name: string;
  highlight: string;
};

export const names = Array.from(Array(20000), () => {
  return faker.name.findName();
});

const Name: React.FC<NameProps> = ({ name, highlight }) => {
  const index = name.toLowerCase().indexOf(highlight.toLowerCase());
  return (
    <div>
      {index === -1 ? (
        <>{name}</>
      ) : (
        <>
          {name.slice(0, index)}
          <span style={{ background: "yellow" }}>
            {name.slice(index, index + highlight.length)}
          </span>
          {name.slice(index + highlight.length)}
        </>
      )}
    </div>
  );
};

const Names = ({ query }: any) => {
  return (
    <>
      {names.map((name, i) => (
        <Name key={i} name={name} highlight={query} />
      ))}
    </>
  );
};

const MemoedNames = memo(Names);

function App() {
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState("");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    console.log(query, highlight);
  });

  return (
    <div>
      <input
        onChange={({ target }) => {
          setQuery(() => target.value);
          // setHighlight(target.value);
          startTransition(() => setHighlight(target.value));
        }}
        value={query}
        type="text"
      />
      {isPending ? "calculating" : null}
      <MemoedNames query={highlight} />
    </div>
  );
}

export default App;
