import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./Form";
import Data from "./Data";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Form />}></Route>
          <Route exact path="/data" element={<Data />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
