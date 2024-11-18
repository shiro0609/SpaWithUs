import React from "react";
import Hero from "../components/Hero";
import { OfferCard } from "../components/Card";
import { OfferDeals } from "../Data";

const Offers = () => {
	return (
		<div className="py-16">
			<Hero title="Offers & Deals" />

			<div className="text-center">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta atque
				eligendi dolores. Sit est dolor soluta non nisi debitis! Consectetur sed
				voluptates facilis possimus architecto! Culpa non cupiditate quo
				molestias?
			</div>

			<div className="grid gap-1 md:gap-0 md:grid-cols-2 text-center ">
				{OfferDeals.map((data) => (
					<OfferCard
						name={data.name}
						desc={data.desc}
						link={data.link}
						location={data.location}
						price={data.price}
					/>
				))}
			</div>
		</div>
	);
};

export default Offers;
