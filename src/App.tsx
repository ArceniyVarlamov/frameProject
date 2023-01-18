import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import FramePage from './pages/frame';
import RegistrationPage from './pages/registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="frame/:id" element={<FramePage/>}/>
        <Route path="/registration" element={<RegistrationPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
