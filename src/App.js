import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Catalog from "./pages/Catalog";
import Content from "./components/Content";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Content />}>
            <Route path="" element={<Catalog />} />
            <Route path=":id" element={<Detail />} />
            <Route path="search/:keyword" element={<Catalog />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
