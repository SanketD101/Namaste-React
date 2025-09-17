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
import ImageGallery from "./components/ImageGallery";
import HigherOrderFun from "./components/HigherOrderFun";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <CharacterCount /> */}
        {/* <ChipsInput /> */}

        <Routes>
          <Route path="/" element={<Restaurant />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contact" element={<Contect />} />
          <Route path="/getday" element={<GetWeekday />} />
          <Route path="/chips" element={<ChipsInput />} />
          <Route path="/CharacterCount" element={<CharacterCount />} />
          <Route path="/ImageGallery" element={<ImageGallery />} />
          <Route path="/HigherOrderFun" element={<HigherOrderFun />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
