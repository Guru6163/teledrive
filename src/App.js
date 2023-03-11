import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import DefaultLayout from "./DefaultLayout"
import Home from './pages/Home';
import About from "./pages/About"

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<DefaultLayout component={Home} />} />
          <Route path="/about" element={<DefaultLayout component={About} />} />
          <Route path="/login" element={<DefaultLayout component={Login} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
