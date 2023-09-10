import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavBar />
        </div>

        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
