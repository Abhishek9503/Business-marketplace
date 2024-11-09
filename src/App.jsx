import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SmoothScrollComponent from "./components/common/SmoothScroll";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <SmoothScrollComponent />
      <Routes>
        {/* Main Dashboard Route */}
        <Route path="/" element={<Dashboard />} />
      
      </Routes>
    </Router>
  );
}

export default App;
