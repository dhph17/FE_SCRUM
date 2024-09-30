import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import Start from "./pages/start/start";
import Register from "./pages/register/register"; // Import your new Register component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Update this line

function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Start />} /> {/* Update for v6 */}
          <Route path="/register" element={<Register />} /> {/* Update for v6 */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
