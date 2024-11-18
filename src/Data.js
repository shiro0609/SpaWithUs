import Hero1 from "./assets/hero1.jpg";
import Hero2 from "./assets/hero2.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const NavItem = [
	{
		name: "Services",
		link: "/services",
	},
	{
		name: "Offers & Deals",
		link: "/offers",
	},
	{
		name: "Reservation",
		link: "/reservation",
	},
	{
		name: "Contact",
		link: "/contact",
	},
	{
		name: "Login/Signup",
		link: "/auth",
	},
];

export const SocialMedia = [
	{
		name: "Facebook",
		link: "https://www.facebook.com",
		img: <FaFacebook className="w-7 h-7" />,
	},
	{
		name: "Instagram",
		link: "https://www.instagram.com",
		img: <FaInstagram className="w-7 h-7" />,
	},
	{
		name: "Tiktok",
		link: "https://www.tiktok.com",
		img: <FaTiktok className="w-7 h-7" />,
	},
	{
		name: "Twitter",
		link: "https://www.twitter.com",
		img: <FaTwitter className="w-7 h-7" />,
	},
];

export const CarouselData = [
	{
		img: Hero1,
		title: "Massage",
		desc: "test",
		link: "/services",
	},
	{
		img: Hero2,
		title: "Spa Treatment",
		desc: "testing",
		link: "/services",
	},
	{
		img: Hero1,
		title: "Essential Oils",
		desc: "test3",
		link: "/offers",
	},
];

// export const SideCarouselData = [{}];

export const CardData = [
	{
		img: Hero1,
		title: "Weekend Special",
		link: "/offers",
	},
	{
		img: Hero2,
		title: "November Promo",
		link: "/offers",
	},
	{
		img: Hero1,
		title: "Essential Oils Deals",
		link: "/offers",
	},
];

export const ReviewData = [
	{
		profile: "A",
		name: "Albert",
		review: "Best",
		date: "Feb 13, 2023",
		rating: 4,
	},
	{
		profile: "B",
		name: "Benard",
		review: "Lorem ipsum",
		date: "Feb 13, 2023",
		rating: 5,
	},
	{
		profile: "C",
		name: "Calvin",
		review:
			"Gorgeous design! Even more responsive than the previous version. A pleasure to use!",
		date: "Feb 13, 2023",
		rating: 4,
	},
];

export const ServiceType = [
	{
		name: "Onsen",
		link: "/onsen",
	},
	{
		name: "Body Scrub",
		link: "/body-scrub",
	},
	{
		name: "Herbal Healing",
		link: "/herbal-healing",
	},
	{
		name: "Aroma Bath",
		link: "/aroma-bath",
	},
	{
		name: "Hair Cream Bath Massage",
		link: "/hair-cream-bath-massage",
	},
	{
		name: "Head Neck Shoulder Foot Massage",
		link: "/head-neck-shoulder-foot-massage",
	},
	{
		name: "Full Body Massage",
		link: "/full-body-massage",
	},
	{
		name: "Deep Tissue Massage",
		link: "/deep-tissue Massage",
	},
	{
		name: "Lymphatic Detox Massage",
		link: "/lymphatic-detox-massage",
	},
	{
		name: "Pregnancy Massage",
		link: "/pregnancy-massage",
	},
];

export const Location = [
	{
		name: "SpaWithUs main branch",
		location: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
		phone: "0123456789",
	},
	{
		name: "SpaWithUs Mt.Crystal",
		location: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
		phone: "0123456789",
	},
	{
		name: "SpaWithUs Beauty Town",
		location:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
		phone: "0123456789",
	},
	{
		name: "SpaWithUs Premium Street",
		location: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
		phone: "0123456789",
	},
];

export const OfferDeals = [
	{
		name: "Weekday Special",
		desc: "- Full Body Massage + Head Neck Shoulder Massage <br>- 90 mins <br>- start at 10a.m. to 2p.m.",
		price: "RM 200",
		location: "SpaWithUs Mt.Crystal, SpaWithUs Premium Street",
		link: "/offers/weekday",
	},
	{
		name: "Weekend Special",
		desc: "- Lymphatic Detox Massage <br>- 90 mins <br>- First 10 customers only, First come first serve basis",
		price: "RM 300",
		location: "All outlets",
		link: "/offers/weekend",
	},
	{
		name: "November Special",
		desc: "- Onsen with Body Scrub <br>- 120 mins <br>- First 10 customers only, First come first serve basis",
		price: "RM 349",
		location:
			"SpaWithUs main branch, SpaWithUs BeautyTown, SpaWithUs Mt.Crystal",
		link: "/offers/november",
	},
	{
		name: "Essential Oil Special",
		desc: "- Buy 3 Get 1 Free <br>- Essential Oil Type: Lemongrass, Mandarin, Vannila <br>- Limited stocks available only.",
		price: "RM 80",
		location: "main branch",
		link: "/offers/products",
	},
	{
		name: "11.11 Special",
		desc: "- Get SECOND Essential Oil for RM 11 <br>- Essential Oil Type: Lemongrass, Mandarin, Vannila <br>- Limited stocks available only.",
		price: "",
		location: "main branch",
		link: "/offers/products",
	},
	{
		name: "First Trial Body Massage",
		desc: "- Full Body Massage/ Head Neck Shoulder Massage <br>- 45 mins <br>- Applicable for new customer only.T&C apply.",
		price: "RM 80",
		location: "all outlets",
		link: "/offers/first-trial",
	},
];

export const services = {
	normal: {
		Onsen: [
			{ price: "129.00", duration: "30 mins" },
			{ price: "240.00", duration: "60 mins" },
		],
		"Body Scrub": [
			{ price: "RM 79.00", duration: "30 mins" },
			{ price: "RM 140.00", duration: "60 mins" },
		],
		"Herbal Healing": [
			{ price: "RM 129.00", duration: "30 mins" },
			{ price: "RM 240.00", duration: "60 mins" },
			{ price: "RM 350.00", duration: "90 mins" },
		],
		"Aroma Bath": [
			{ price: "RM 129.00", duration: "30 mins" },
			{ price: "RM 240.00", duration: "60 mins" },
			{ price: "RM 350.00", duration: "90 mins" },
		],
		"Hair Cream Bath Massage": [
			{ price: "RM 79.00", duration: "30 mins" },
			{ price: "RM 140.00", duration: "60 mins" },
		],
		"Head Neck Shoulder Foot Massage": [
			{ price: "RM 79.00", duration: "30 mins" },
			{ price: "RM 140.00", duration: "60 mins" },
		],
		"Full Body Massage": [
			{ price: "RM 79.00", duration: "30 mins" },
			{ price: "RM 140.00", duration: "60 mins" },
		],
		"Deep Tissue Massage": [
			{ price: "RM 79.00", duration: "30 mins" },
			{ price: "RM 140.00", duration: "60 mins" },
		],
		"Lymphatic Detox Massage": [
			{ price: "RM 79.00", duration: "30 mins" },
			{ price: "RM 140.00", duration: "60 mins" },
		],
		"Pregnancy Massage": [
			{ price: "RM 79.00", duration: "30 mins" },
			{ price: "RM 140.00", duration: "60 mins" },
		],
	},
	packages: {
		"Package 1 - 120 mins of Onsen + Head Neck Shoulder Massage": {
			name: "120 mins of Onsen + Head Neck Shoulder Massage",
			price: "RM 300",
		},
		"Package 2 - 120 mins of Onsen + Full Body Massage": {
			desc: "120 mins of Onsen + Full Body Massage",
			price: "RM 400",
		},
		"Package 3 - 180 mins of Onsen + Full Body Massage + Hair Cream Bath Massage":
			{
				desc: "180 mins of Onsen + Full Body Massage + Hair Cream Bath Massage",
				price: "RM 300",
			},
		"Package 4 - 180 mins of Onsen + Body Scrub + Full Body Massage": {
			desc: "180 mins of Onsen + Body Scrub + Full Body Massage",
			price: "RM 300",
		},
		"Package 5 - 240 mins of Onsen + Body Scrub + Aroma Bath + Full Body Massage":
			{
				desc: "240 mins of Onsen + Body Scrub + Aroma Bath + Full Body Massage",
				price: "RM 300",
			},
	},
};
