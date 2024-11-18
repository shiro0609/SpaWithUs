import React from "react";
import Hero from "../components/Hero";
import { Location } from "../Data";

const Contact = () => {
	return (
		<div className="flex flex-col py-16">
			<Hero title="Contact Us" />
			<div className="flex flex-col gap-6 px-10">
				<div className="text-lg text-justify md:text-left">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea possimus
					perferendis necessitatibus nam numquam, obcaecati praesentium
					consequatur odio unde libero aliquid. Nobis veniam ratione esse
					quisquam fugit mollitia quam fugiat.
				</div>

				<div className="flex flex-col items-center">
					<div className="text-2xl font-semibold">Our Outlets</div>
					{/* tablet & desktop view  */}
					<table className="hidden md:block md:w-11/12 w-full border border-black border-separate">
						<thead className="bg-black text-white">
							<tr>
								<th className="border border-black w-1/4">Outlets</th>
								<th className="border border-black">Location</th>
								<th className="border border-black">Phone</th>
							</tr>
						</thead>
						<tbody>
							{Location.map((data) => (
								<tr>
									<td className="border border-black">{data.name}</td>
									<td className="border border-black">{data.location}</td>
									<td className="border border-black">{data.phone}</td>
								</tr>
							))}
						</tbody>
					</table>

					{/* mobile view  */}
					<table className="md:hidden w-full border border-black border-separate">
						<thead className="bg-black text-white">
							<tr>
								<th className="border border-black">Outlets</th>
								<th className="border border-black">Location</th>
							</tr>
						</thead>
						{Location.map((data) => (
							<tbody className="">
								<tr>
									<td className="border border-black">{data.name}</td>
									<td className="border border-black">{data.location}</td>
								</tr>
								<tr>
									<td className="pb-3">phone:</td>
									<td className="pb-3">{data.phone}</td>
								</tr>
							</tbody>
						))}
					</table>
				</div>

				<div>
					For any more inquries, you can reach us by sending email to
					<b> enquiry@spawithus.com</b>
				</div>
			</div>
		</div>
	);
};

export default Contact;
