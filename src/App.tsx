import { useState } from "react";
import Counters from "./components/Counters";

function App() {
  const [count, setCount] = useState<number>(0);
  const incr = (): void => setCount(count + 1); 

  return (
    <div>
      <Counters incr={incr} count={count} />
      <p>Hello world</p>
    </div>
  );
}

export default App;
