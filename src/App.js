import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import DefaultLayout from "./DefaultLayout"
import Home from './pages/Home';
import About from "./pages/About"
import MyFiles from './pages/MyFiles';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/myFiles" element={<MyFiles />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
