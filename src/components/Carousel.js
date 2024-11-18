import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CarouselData, ReviewData } from "../Data";
import Review from "./Review";

const HeroCarousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	// Function to go to the next slide
	const nextSlide = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % CarouselData.length);
	};

	// Auto-play feature for the carousel
	useEffect(() => {
		const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative w-full h-96 overflow-hidden">
			{CarouselData.map((CarouselData, index) => (
				<div
					key={index}
					className={`absolute inset-0 transition-opacity duration-1000 ${
						index === activeIndex ? "opacity-100" : "opacity-0"
					}`}
					style={{
						backgroundImage: `url(${CarouselData.img})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<div className="flex flex-col items-center justify-center gap-4 h-full bg-black bg-opacity-50">
						<div className="flex flex-col items-center">
							<h2 className="text-white text-2xl font-bold">
								{CarouselData.title}
							</h2>
							<div className="text-white">{CarouselData.desc}</div>
						</div>
						<NavLink
							to={CarouselData.link}
							className="text-white border-2 border-white px-3 py-2"
						>
							See More
						</NavLink>
					</div>
				</div>
			))}

			{/* Left and right navigation */}
			<button
				onClick={() =>
					setActiveIndex((prevIndex) =>
						prevIndex === 0 ? CarouselData.length - 1 : prevIndex - 1
					)
				}
				className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50"
			>
				&#10094;
			</button>
			<button
				onClick={() => nextSlide()}
				className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50"
			>
				&#10095;
			</button>
		</div>
	);
};
export default HeroCarousel;

const CarouselSide = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	// Function to go to the next slide
	const nextSlide = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % CarouselData.length);
	};

	// Auto-play feature for the carousel
	useEffect(() => {
		const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-white bg-black md:h-[450px] p-10">
			<div className="flex flex-col justify-center max-w-60 text-center md:text-left">
				<h2 className="text-4xl font-bold">Outlets</h2>
				<div>
					Find your hidden spot within the busy city life or slow paced town
				</div>
			</div>

			{/* Carousel item */}
			<div className="relative w-full md:w-2/3 h-96 overflow-hidden">
				{CarouselData.map((CarouselData, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-opacity duration-1000 ${
							index === activeIndex ? "opacity-100" : "opacity-0"
						}`}
						style={{
							backgroundImage: `url(${CarouselData.img})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						<div className="flex flex-col items-center justify-end gap-4 h-full pb-4 bg-black bg-opacity-50">
							<div className="flex flex-col items-center">
								<h2 className=" text-2xl font-bold">{CarouselData.title}</h2>
								<div>{CarouselData.desc}</div>
							</div>
						</div>
					</div>
				))}

				{/* Left and right navigation */}
				<button
					onClick={() =>
						setActiveIndex((prevIndex) =>
							prevIndex === 0 ? CarouselData.length - 1 : prevIndex - 1
						)
					}
					className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2  bg-black bg-opacity-50"
				>
					&#10094;
				</button>
				<button
					onClick={() => nextSlide()}
					className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2  bg-black bg-opacity-50"
				>
					&#10095;
				</button>
			</div>
		</div>
	);
};
export { CarouselSide };

const ReviewCarousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const nextSlide = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % ReviewData.length);
	};

	useEffect(() => {
		const interval = setInterval(nextSlide, 5000); // Auto-play every 5 seconds
		return () => clearInterval(interval);
	}, []);

	const goToPreviousSlide = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? ReviewData.length - 1 : prevIndex - 1
		);
	};

	return (
		<div className="flex flex-col text-white bg-gray-800 pt-6">
			<h2 className="text-2xl md:text-4xl font-bold  text-center">
				How People Rate Us
			</h2>

			<div className="relative flex flex-col h-72 justify-center items-center gap-4  p-10">
				{/* Carousel item (showing only the active review) */}
				<Review reviewData={ReviewData[activeIndex]} />

				{/* Left and right navigation */}
				<button
					onClick={goToPreviousSlide}
					className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black bg-opacity-50"
				>
					&#10094;
				</button>
				<button
					onClick={nextSlide}
					className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black bg-opacity-50"
				>
					&#10095;
				</button>
			</div>
		</div>
	);
};

export { ReviewCarousel };
