import React, { useState } from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

const AuthPage = () => {
	const [isLogin, setIsLogin] = useState(true);

	const toggleForm = () => {
		setIsLogin(!isLogin);
	};

	return (
		<div className="flex items-center justify-center min-h-screen pt-16 bg-gray-100">
			<div className="w-full max-w-md">
				{isLogin ? <Login /> : <Signup />}
				<button
					onClick={toggleForm}
					className="mt-4 px-8 text-center text-blue-600 hover:underline focus:outline-none"
				>
					{isLogin
						? "Don't have an account? Sign Up"
						: "Already have an account? Log In"}
				</button>
			</div>
		</div>
	);
};

export default AuthPage;
