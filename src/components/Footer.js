import React from "react";
import { NavLink } from "react-router-dom";
import { NavItem, SocialMedia } from "../Data";

const Footer = () => {
	return (
		<div className="flex flex-col gap-8 bg-black text-white px-10 pt-5 pb-2">
			<div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
				<div className="max-w-96 flex flex-col gap-2 items-center md:items-start">
					<div className="text-5xl font-extrabold">SpaWithUs</div>
					<div>
						Enjoy relaxation within busy life. Founded in 2017. Our mission and
						vision is create a place where people can take a break from the
						hustle of their life
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<div className="font-bold text-2xl">Directory</div>
					<div className="flex flex-col gap-1">
						{NavItem.map((data) => (
							<NavLink
								key={data.link}
								to={data.link}
								className="hover:scale-110 duration-200"
							>
								{data.name}
							</NavLink>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-4 items-center">
					<div className="font-bold text-2xl">Follow Us</div>
					<div className="flex flex-row gap-4">
						{SocialMedia.map((data) => (
							<a
								href={data.link}
								target="_blank"
								rel="noopener noreferrer"
								className="flex justify-center items-center hover:scale-110 duration-200"
							>
								{data.img}
							</a>
						))}
					</div>
				</div>
			</div>
			<div className="text-center text-xs">
				2024@SpaWithUs Designed by ShiroLam
			</div>
		</div>
	);
};

export default Footer;
