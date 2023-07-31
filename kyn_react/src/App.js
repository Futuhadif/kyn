import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Pages/Register/Register";
import About from "./Pages/About Us/AboutUs";
import Contact from "./Pages/Contact Us/Contact";
import ListStore from './Pages/Stores/ListStore';
import AddStore from './Pages/Stores/AddStore';
import { useContext } from 'react';
import AuthContext from './Comp/Context/auth-context';
import Regulations from './Pages/Terms & Conds/TermsConds';
import Login from './Pages/Login/Login';

function App() {
	const authCtx = useContext(AuthContext);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to="/kyn" replace />}></Route>
				<Route path="/kyn" element={<Home></Home>}></Route>
				<Route path="/about-us" element={<About></About>}></Route>
				<Route path="/contact-us" element={<Contact></Contact>}></Route>
				<Route path="/stores" element={authCtx.isLoggedIn ? <ListStore /> : <Navigate to="/login" />}></Route>
				<Route path="/addStore" element={<AddStore></AddStore>}></Route>
				<Route path="/regulations" element={<Regulations></Regulations>}></Route>

				{!authCtx.isLoggedIn && (
					<>
						<Route path="/register" element={<Register></Register>}></Route>
						<Route path="/login" element={<Login></Login>}></Route>
					</>
				)}
			</Routes>
		</Router>
	)
}

export default App;
