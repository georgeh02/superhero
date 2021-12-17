import { useEffect, useState } from "react";
import Title from "./Title";
import Form from "./Form";
import Info from "./Info";
import "./App.css";

export default function App() {
  const [name, setName] = useState("30");
  const [data, setData] = useState("");

  useEffect(() => {
    const url = `https://akabab.github.io/superhero-api/api/id/${name.toLowerCase()}.json`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(null));
  }, [name]);

  return (
    <div className="App">
      <Title title="Super Hero Search" />
      <Form setName={setName} />
      <Info data={data} />
    </div>
  );
}
