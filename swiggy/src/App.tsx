import { useState } from "react";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Product from "./components/Product";
import Contect from "./components/Contect";
import ChipsInput from "./components/ChipsInput";
import GetWeekday from "./components/GetWeekday";
import CharacterCount from "./components/CharacterCount";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <CharacterCount />
        {/* <ChipsInput /> */}

        <Routes>
          <Route path="/" element={<Restaurant />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contact" element={<Contect />} />
          <Route path="/getday" element={<GetWeekday />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
