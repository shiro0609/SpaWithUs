import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { NavItem } from "../Data";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef(null);

	const toggleMenu = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			// Close menu if clicking outside of it or on the FaBars icon
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				closeMenu();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="fixed z-50 flex justify-between items-center h-16 px-10 w-full bg-black">
			<NavLink to="/">
				<div className="text-white font-extrabold text-3xl">SpaWithUs</div>
			</NavLink>

			{/* Tablet/Desktop view */}
			<div className="hidden md:flex gap-6 text-white">
				{NavItem.map((data) => (
					<NavLink
						key={data.link}
						to={data.link}
						className="font-bold hover:scale-125 duration-200"
					>
						{data.name}
					</NavLink>
				))}
			</div>

			{/* mobile view */}
			<div className="md:hidden text-white">
				<FaBars className=" cursor-pointer" onClick={toggleMenu} />
				{isMenuOpen && (
					<div
						ref={menuRef}
						className="absolute top-16 left-0 w-full bg-black flex flex-col items-end gap-4 px-10 pb-4"
					>
						{NavItem.map((data) => (
							<NavLink
								key={data.link}
								to={data.link}
								className="font-semibold text-lg"
								onClick={closeMenu} // Close menu on link click
							>
								{data.name}
							</NavLink>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
