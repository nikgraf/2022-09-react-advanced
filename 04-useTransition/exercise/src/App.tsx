import { useState } from "react";
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

function App() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        onChange={({ target }) => {
          setQuery(() => target.value);
        }}
        value={query}
        type="text"
      />
      <Names query={query} />
    </div>
  );
}

export default App;
