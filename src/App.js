import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(10);
  }, [count]);

  return (
    <div className="App">
      <button onClick={() => setCount(18)}>Add</button>
    </div>
  );
}
