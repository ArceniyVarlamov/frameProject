import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import FramePage from './pages/frame';
import RegistrationPage from './pages/registrationWith';
import EmailPage from './pages/withEmail';
import LoginPage from './pages/loginWith';
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="frame/:id" element={<FramePage/>}/>
        <Route path="/registration" element={<RegistrationPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="email/:type" element={<EmailPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
