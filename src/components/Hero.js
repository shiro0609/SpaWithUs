import React from "react";
import HeroImg from "../assets/hero1.jpg";

const Hero = ({ title }) => {
	return (
		<div
			className="h-96"
			style={{
				backgroundImage: `url(${HeroImg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="flex flex-col items-center justify-center gap-4 h-full bg-black bg-opacity-50">
				<div className="flex flex-col items-center">
					<h2 className="text-white text-5xl font-bold">{title}</h2>
				</div>
			</div>
		</div>
	);
};

export default Hero;
