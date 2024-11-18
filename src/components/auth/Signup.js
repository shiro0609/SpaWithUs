import React, { useState } from "react";

const Signup = () => {
	const [identifier, setIdentifier] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// You can add validation or API calls here for either email or phone signup
		console.log("Sign Up attempt:", { identifier, password, confirmPassword });
	};

	const handleIdentifierChange = (e) => {
		const value = e.target.value;
		setIdentifier(value);
	};

	return (
		<div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4">
			<h2 className="text-2xl font-semibold text-center text-gray-700">
				Sign Up
			</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label className="block text-gray-600">Email or Phone</label>
					<input
						type="text"
						value={identifier}
						onChange={handleIdentifierChange}
						className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
						placeholder="Enter your email or phone"
					/>
				</div>
				<div>
					<label htmlFor="password" className="block text-gray-600">
						Password
					</label>
					<input
						id="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
						placeholder="Enter your password"
					/>
				</div>
				<div>
					<label htmlFor="confirm-password" className="block text-gray-600">
						Confirm Password
					</label>
					<input
						id="confirm-password"
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
						placeholder="Confirm your password"
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
				>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default Signup;
