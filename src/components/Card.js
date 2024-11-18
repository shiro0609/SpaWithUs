import React from "react";
import { NavLink } from "react-router-dom";
import img from "../assets/hero1.jpg";
import { FaLocationDot } from "react-icons/fa6";

const Card = ({ img, title, link }) => {
	return (
		<div className="block w-72 rounded-lg bg-white shadow-md shadow-black hover:scale-105 duration-300">
			<img className="rounded-t-lg w-full h-40" src={img} alt="" />
			<div className="p-4">
				<h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
					{title}
				</h5>
				<NavLink to={link} className="underline underline-offset-4">
					See More
				</NavLink>
			</div>
		</div>
	);
};

export default Card;

const LongCard = ({ img }) => {
	return (
		<div className="block h-96 w-72 bg-gray-100 hover:-translate-y-3 duration-300">
			<img className="w-full h-full" src={img} alt="" />
		</div>
	);
};

export { LongCard };

const ServiceCard = ({ name, link }) => {
	return (
		<div
			className="h-56"
			style={{
				backgroundImage: `url(${img})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="flex flex-col items-center justify-center gap-4 h-full text-white bg-black bg-opacity-70 hover:bg-blue-900 hover:bg-opacity-70">
				<div className="flex flex-col items-center">
					<h2 className="text-2xl font-bold">{name}</h2>
				</div>
				<NavLink to={link} className="border-2 border-white px-3 py-2">
					Read More
				</NavLink>
			</div>
		</div>
	);
};

export { ServiceCard };

const OfferCard = ({ name, desc, link, location, price }) => {
	const renderDesc = (desc) => {
		const parts = desc.split("<br>");
		return parts.map((part, index) => <p key={index}>{part}</p>);
	};

	return (
		<div
			className="h-96"
			style={{
				backgroundImage: `url(${img})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="flex flex-col items-center justify-center gap-4 h-full text-white bg-black bg-opacity-70 hover:bg-blue-900 hover:bg-opacity-70">
				<div className="flex flex-col text-left max-w-80 md:max-w-96 items-center">
					<h2 className="text-2xl font-bold">{name}</h2>
					<div className="text-sm">{renderDesc(desc)}</div>
					<div className="font-bold">{price}</div>
					<div className="flex flex-row items-center gap-2">
						<FaLocationDot />
						<p className="text-sm">{location}</p>
					</div>
				</div>
				<NavLink to={link} className="border-2 border-white px-3 py-2">
					Read More
				</NavLink>
			</div>
		</div>
	);
};

export { OfferCard };
