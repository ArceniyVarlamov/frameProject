import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import FramePage from "./pages/frame";
import SignUpPage from "./pages/singUp";
import EmailPage from "./pages/withEmail";
import SignInPage from "./pages/signIn";
import EndRegister from "./pages/endRegister";
import AccountPage from "./pages/account";
import useCheckRegister from "./utils/registration/useCheckRegister";
import CollectionPage from "./pages/collection";
import CollectionsPage from "./pages/collections";
import MePage from "./pages/me";
import Error from "./components/functional/Error";
import CreatePage from "./pages/create";

function App() {
	// useCheckRegister();

	return (
		<BrowserRouter>
			<Error />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/frame/:id' element={<FramePage />} />
				<Route path='/registration' element={<SignUpPage />} />
				<Route path='/login' element={<SignInPage />} />
				<Route path='/email/:type' element={<EmailPage />} />
				<Route path='/registered' element={<EndRegister />} />
				<Route path='/me' element={<MePage />} />
				<Route path='/account/:username' element={<AccountPage />} />
				<Route path='/collection/:id' element={<CollectionPage />} />
				<Route path='/collections/:username' element={<CollectionsPage />} />
				<Route path='/create' element={<CreatePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
