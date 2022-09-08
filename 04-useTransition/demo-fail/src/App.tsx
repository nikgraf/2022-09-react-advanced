import { useState, useTransition } from "react";
import { useRemark } from "react-remark";
import defaultText from "./text";

function App() {
  const [text, setText] = useState(defaultText);
  // const [preview, setPreview] = useState("");
  const [content, setMarkdownSource] = useRemark();
  const [isPending, startTransition] = useTransition();

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%" }}>
        <textarea
          style={{ width: "90%", height: "90vh" }}
          defaultValue={text}
          onChange={({ target }) => {
            setText(target.value);
            // setMarkdownSource(target.value);
            startTransition(() => {
              setMarkdownSource(target.value);
            });
            // startTransition(() => {
            //   setPreview(target.value);
            // });
          }}
        />
        {isPending ? "pending" : null}
      </div>
      <div style={{ width: "50%", opacity: isPending ? 0.5 : 1 }}>
        {content}
      </div>
    </div>
  );
}

export default App;
