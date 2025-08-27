import { useState } from "react";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Restaurant />
    </>
  );
}

export default App;
