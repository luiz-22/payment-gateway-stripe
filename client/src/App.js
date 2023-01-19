import './App.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./redux/actions"
import { Routes, Route } from "react-router-dom"
import Navbar from './components/NavBar';
import { Home } from './components/Home';
import PayGateway from './components/PayGateway';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay" element={<PayGateway />} />
      </Routes>
    </div>
  );
}

export default App;
