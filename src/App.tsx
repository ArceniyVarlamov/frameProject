import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import FramePage from './pages/frame';
import RegistrationPage from './pages/registrationWith';
import EmailPage from './pages/withEmail';
import LoginPage from './pages/loginWith';
import RegisteredPage from './pages/registered';
import AccountPage from './pages/account';
import useCheckRegister from './utils/registration/useCheckRegister';
import CollectionPage from './pages/collection';
import CollectionsPage from './pages/collections';
import MePage from './pages/me';
import Error from "./components/functional/Error";

function App() {
  
  useCheckRegister()

  return (
    <BrowserRouter>
      <Error/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/frame/:id" element={<FramePage/>}/>
        <Route path="/registration" element={<RegistrationPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/email/:type" element={<EmailPage/>}/>
        <Route path="/registered" element={<RegisteredPage/>}/>
        <Route path="/me" element={<MePage/>}/>
        <Route path="/account/:username" element={<AccountPage/>}/>
        <Route path="/collection/:id" element={<CollectionPage/>}/>
        <Route path="/collections/:username" element={<CollectionsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
