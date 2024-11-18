import React from "react";
import HeroCarousel, {
	CarouselSide,
	ReviewCarousel,
} from "../components/Carousel";
import Card, { LongCard } from "../components/Card";
import { CardData } from "../Data";

const Home = () => {
	return (
		<div className="flex flex-col pt-16 bg-gray-100">
			<HeroCarousel />

			<div className="flex flex-col justify-center items-center px-10 h-40">
				<div className="font-bold text-xl ">Take a break from busy life</div>
				<div className="text-center">
					Immerse yourself in healing & relaxation- a meditative therapy from
					busy and quick-pace life.
				</div>
			</div>

			<CarouselSide />

			<div className="flex flex-col gap-4 py-10">
				<div className="text-center text-4xl font-bold">#SpaWithUs</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center justify-center">
					{CardData.map((data) => (
						<LongCard img={data.img} title={data.title} link={data.link} />
					))}
				</div>
			</div>

			<ReviewCarousel />

			<div className="flex flex-col gap-4 py-10">
				<div className="text-center text-4xl font-bold">Highlights</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center justify-center">
					{CardData.map((data) => (
						<Card img={data.img} title={data.title} link={data.link} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
