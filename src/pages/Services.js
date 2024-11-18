import React from "react";
import Hero from "../components/Hero";
import { ServiceCard } from "../components/Card";
import { ServiceType } from "../Data";

const Services = () => {
	return (
		<div className="flex flex-col py-16 ">
			<Hero title="Services" />
			<div className="text-center text-2xl font-bold p-5">
				What we provided to our customers
			</div>
			<div className="grid gap-1 md:gap-0 md:grid-cols-2 text-center ">
				{ServiceType.map((data) => (
					<ServiceCard name={data.name} link={data.link} />
				))}
			</div>
		</div>
	);
};

export default Services;
