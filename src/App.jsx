import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./components/layouts/Layouts";
import { Home, Contact, About } from "./pages/index";
import Groceries from "./pages/groceries/Groceries";
import Vegetables from "./pages/vegetables/Vegetables";
import Non_veg from "./pages/non_veg/Non_veg";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="groceries" element={<Groceries />} />
            <Route path="vegetables" element={<Vegetables />} />
            <Route path="non-veg" element={<Non_veg />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
