import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Test from "./pages/Test";
import HandpokedTattoos from "./pages/HandpokedTattoos";
import HandpokedDrawings from "./pages/HandpokedDrawings";
import EngravingTattoos from "./pages/EngravingTattoos";
import EngravingDrawings from "./pages/EngravingDrawings";
import ColoredDrawings from "./pages/ColoredDrawings";
import Pictures from "./pages/Pictures";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/categories" element={<Categories></Categories>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/test" element={<Test></Test>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="handpokedtattoos"
          element={<HandpokedTattoos></HandpokedTattoos>}
        ></Route>
        <Route
          path="handpokeddrawings"
          element={<HandpokedDrawings></HandpokedDrawings>}
        ></Route>
        <Route
          path="engravingtattoos"
          element={<EngravingTattoos></EngravingTattoos>}
        ></Route>
        <Route
          path="engravingdrawings"
          element={<EngravingDrawings></EngravingDrawings>}
        ></Route>
        <Route
          path="coloreddrawings"
          element={<ColoredDrawings></ColoredDrawings>}
        ></Route>
        <Route path="pictures" element={<Pictures></Pictures>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
