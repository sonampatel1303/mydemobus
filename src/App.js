import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Sample from './components/sample';
import Booking from './components/booking';
import Payment from './components/payment';
import BusRoutes from './components/routes';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sample" element={<Sample />} />
    <Route path="/booking" element={<Booking />} />
    <Route path="/payment" element={<Payment />} />
    <Route path="/routes" element={<BusRoutes />} />
    </Routes>
     </Router>
    </div>
  );
}

export default App;
