import React from "react";
import { FaStar } from "react-icons/fa";

const Review = ({ reviewData }) => {
	return (
		<div className="flex flex-col w-72 md:w-96 gap-4 bg-gray-100 p-4 text-black rounded-2xl">
			<div className="flex justify-between items-center">
				<div className="flex gap-2 items-center">
					<div className="w-7 h-7 flex items-center justify-center text-center rounded-full bg-red-500">
						{reviewData.profile}
					</div>
					<span>{reviewData.name}</span>
				</div>
				<div className="flex gap-1 text-orange-500">
					{Array.from({ length: reviewData.rating }, (_, i) => (
						<FaStar key={i} />
					))}
				</div>
			</div>
			<p>{reviewData.review}</p>
			<div className="flex justify-between items-center">
				<span>{reviewData.date}</span>
				<button className="p-1 px-2 bg-gray-900 hover:bg-gray-950 border border-gray-950 bg-opacity-60">
					<ion-icon name="share-outline"></ion-icon> Share
				</button>
			</div>
		</div>
	);
};

export default Review;
