import './App.css';
import Hello from './components/Hello';
import Login from './components/Login';

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/hello' element={<Hello />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
