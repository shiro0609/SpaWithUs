import React, { useState } from "react";
import { services, Location } from "../Data";

const Form = () => {
	const [serviceType, setServiceType] = useState("normal"); // 'normal' or 'packages'
	const [servicesSelected, setServicesSelected] = useState([
		{ service: "", duration: "", price: 0 },
	]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [selectedLocation, setSelectedLocation] = useState("");
	const [totalPrice, setTotalPrice] = useState(0);

	const timeOptions = generateTimeOptions(); // Assuming generateTimeOptions is defined to generate valid time slots

	// Function to generate time options (from 10:00 AM to 6:00 PM with 30-minute intervals)
	function generateTimeOptions() {
		const times = [];
		let currentHour = 10;
		let currentMinute = 0;

		while (currentHour < 18 || (currentHour === 18 && currentMinute === 0)) {
			const hour = currentHour.toString().padStart(2, "0");
			const minute = currentMinute.toString().padStart(2, "0");
			times.push(`${hour}:${minute}`);

			currentMinute += 30;
			if (currentMinute === 60) {
				currentMinute = 0;
				currentHour += 1;
			}
		}

		return times;
	}

	const handleServiceTypeChange = (type) => {
		setServiceType(type);
		setServicesSelected([{ service: "", duration: "", price: 0 }]); // Reset selected services
		setTotalPrice(0); // Reset total price
	};

	const handleServiceChange = (index, value) => {
		const updatedServices = [...servicesSelected];
		updatedServices[index].service = value;
		updatedServices[index].duration = "";
		updatedServices[index].price = 0; // Reset price when service changes
		setServicesSelected(updatedServices);
		updateTotalPrice(updatedServices);
	};

	const handleDurationChange = (index, duration) => {
		const updatedServices = [...servicesSelected];
		updatedServices[index].duration = duration;
		updatedServices[index].price = calculateServicePrice(index, duration);
		setServicesSelected(updatedServices);
		updateTotalPrice(updatedServices);
	};

	const calculateServicePrice = (index, duration = "") => {
		const selectedService = servicesSelected[index].service;
		if (serviceType === "normal" && selectedService) {
			const durationOption = services[serviceType][selectedService].find(
				(option) => option.duration === `${duration} mins`
			);
			return durationOption
				? parseFloat(durationOption.price.replace("RM ", ""))
				: 0;
		} else if (serviceType === "packages") {
			const selectedPackage = services[serviceType][selectedService];
			return selectedPackage
				? parseFloat(selectedPackage.price.replace("RM ", ""))
				: 0;
		}
		return 0;
	};

	const updateTotalPrice = (updatedServices) => {
		const newTotal = updatedServices.reduce(
			(total, serviceObj) => total + serviceObj.price,
			0
		);
		setTotalPrice(newTotal);
	};

	const addService = () => {
		setServicesSelected([
			...servicesSelected,
			{ service: "", duration: "", price: 0 },
		]);
	};

	const removeService = (index) => {
		const updatedServices = servicesSelected.filter((_, i) => i !== index);
		setServicesSelected(updatedServices);
		updateTotalPrice(updatedServices);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Booking confirmed! Total Price: $${totalPrice.toFixed(2)}`);
	};

	return (
		<div className="max-w-lg mx-auto p-4 border rounded-lg shadow-lg bg-white">
			<h2 className="text-2xl font-bold mb-4">Book Your Services</h2>
			<form onSubmit={handleSubmit}>
				{/* Customer Details */}
				<div className="mb-4">
					<label className="block font-semibold mb-1 ">Name</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						className="w-full p-2 border border-black rounded"
					/>
				</div>

				<div className="mb-4">
					<label className="block font-semibold mb-1">Email</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="w-full p-2 border border-black rounded"
					/>
				</div>

				<div className="mb-4">
					<label className="block font-semibold mb-1">Phone Number</label>
					<input
						type="text"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						required
						className="w-full p-2 border border-black rounded"
					/>
				</div>

				{/* Date Selection */}
				<div className="mb-4">
					<label className="block font-semibold mb-1">Select Date</label>
					<input
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						required
						className="w-full p-2 border border-black rounded"
					/>
				</div>

				{/* Time Selection */}
				<div className="mb-4">
					<label className="block font-semibold mb-1">Select Time</label>
					<select
						value={time}
						onChange={(e) => setTime(e.target.value)}
						required
						className="w-full p-2 border border-black rounded"
					>
						<option value="" disabled>
							Select time...
						</option>
						{timeOptions.map((timeOption) => (
							<option key={timeOption} value={timeOption}>
								{timeOption}
							</option>
						))}
					</select>
				</div>

				{/* Outlet Selection */}
				<div className="mb-4">
					<label className="block font-semibold mb-1">Select Location</label>
					<select
						value={selectedLocation}
						onChange={(e) => setSelectedLocation(e.target.value)}
						required
						className="w-full p-2 border border-black rounded"
					>
						<option value="" disabled>
							Select a location...
						</option>
						{Location.map((loc, index) => (
							<option key={index} value={loc.name}>
								{loc.name}
							</option>
						))}
					</select>
				</div>

				{/* Service Type Selection */}
				<div className="mb-4">
					<label className="block font-semibold mb-1">
						Select Service Type
					</label>
					<div className="flex items-center">
						<label className="mr-4">
							<input
								type="radio"
								name="serviceType"
								value="normal"
								checked={serviceType === "normal"}
								onChange={() => handleServiceTypeChange("normal")}
								className="mr-2"
							/>
							Normal Services
						</label>
						<label>
							<input
								type="radio"
								name="serviceType"
								value="packages"
								checked={serviceType === "packages"}
								onChange={() => handleServiceTypeChange("packages")}
								className="mr-2"
							/>
							Packages
						</label>
					</div>
				</div>

				{/* Multiple Service Selection */}
				{servicesSelected.map((serviceObj, index) => (
					<div key={index} className="mb-4 border p-3 rounded bg-gray-300">
						<div className="flex justify-between items-center">
							<h3 className="font-semibold">Service {index + 1}</h3>
							{servicesSelected.length > 1 && (
								<button
									type="button"
									onClick={() => removeService(index)}
									className="text-red-500 hover:underline"
								>
									Remove
								</button>
							)}
						</div>

						{/* Service Dropdown */}
						<label className="block font-semibold mb-1">Select Service</label>
						<select
							value={serviceObj.service}
							onChange={(e) => {
								// Reset duration when service is changed
								handleServiceChange(index, e.target.value);
								handleDurationChange(index, ""); // Reset duration
							}}
							className="w-full p-2 border border-black rounded"
							required
						>
							<option value="" disabled>
								Select a service...
							</option>
							{Object.keys(services[serviceType]).map((serviceName) => (
								<option key={serviceName} value={serviceName}>
									{serviceName}
								</option>
							))}
						</select>

						{/* Duration for Normal Services */}
						{serviceType === "normal" && serviceObj.service && (
							<>
								<label className="block font-semibold mb-1 mt-2">
									Select Duration
								</label>
								<select
									value={serviceObj.duration || ""}
									onChange={(e) =>
										handleDurationChange(index, parseInt(e.target.value) || "")
									}
									className="w-full p-2 border rounded"
									required
								>
									<option value="" disabled>
										Select an option...
									</option>
									{services[serviceType][serviceObj.service].map((option) => (
										<option
											key={option.duration}
											value={parseInt(option.duration)}
										>
											{option.duration} - {option.price}
										</option>
									))}
								</select>
							</>
						)}

						{/* Price Display */}
						{serviceObj.name && (
							<div className="mt-2">
								<p className="font-semibold">{serviceObj.name}</p>
							</div>
						)}
					</div>
				))}

				{/* Add Service Button */}
				{serviceType === "normal" && (
					<button
						type="button"
						onClick={addService}
						className="text-blue-600 hover:underline mb-4"
					>
						+ Add Another Service
					</button>
				)}

				{/* Total Price */}
				<div className="mt-4">
					<p className="font-semibold">
						Total Price: RM{totalPrice.toFixed(2)}
					</p>
				</div>

				{/* Submit Button */}
				<button
					type="submit"
					className="w-full bg-black text-white p-2 rounded mt-4 hover:bg-gray-800 hover:scale-105 duration-300"
				>
					Confirm Booking
				</button>
			</form>
		</div>
	);
};

export default Form;
