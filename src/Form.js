import { useState } from "react";

export default function Form({ setName }) {
  const [content, setContent] = useState("");

  return (
    <div id="searchbar">
      <input
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setName(content);
        }}
      >
        Get Character
      </button>
    </div>
  );
}
