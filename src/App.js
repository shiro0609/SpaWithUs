import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import Footer from "./components/Footer";
import AuthPage from "./pages/Auth";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/services" element={<Services />} />
				<Route path="/offers" element={<Offers />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/reservation" element={<Reservation />} />
				<Route path="/auth" element={<AuthPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
