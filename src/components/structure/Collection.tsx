import useAccountCurrent from "./../../hooks/get/useAccountCurrent";
import conditional from "./../../utils/functional/condition";
import { useEffect, useState } from "react";
import arrow from "../../images/Arrow-down.png";
import Following from "./Following";
import Image from "./Image";
import useAccountCollections from "../../hooks/get/useAccountCollections";
import useAccountCollection from "./../../hooks/get/useAccontCollection";
import { IAccountCollection, IData } from "./../../interface";
import { Link } from "react-router-dom";

export default function Collection({
	id,
	frameHeight,
	...props
}: {
	id: string | null | undefined;
	frameHeight: number;
}) {
	// const {
	// 	dataCollection,
	// 	dataCollectionPhotos,
	// 	loadCollection,
	// } = useAccountCollection(id);
	// console.log(dataCollection, dataCollectionPhotos);
	const dataCollection = {
		id: "BsKfcfuIheU",
		title: "deserts",
		description: null,
		published_at: "2023-02-21T12:01:07Z",
		last_collected_at: "2023-02-21T12:01:53Z",
		updated_at: "2023-02-21T12:01:53Z",
		curated: false,
		featured: false,
		total_photos: 4,
		private: false,
		share_key: "1a8d85aaa200483e82860518a6b9c20c",
		tags: [
			{
				type: "landing_page",
				title: "desert",
				source: {
					ancestry: {
						type: {
							slug: "images",
							pretty_slug: "Images",
						},
						category: {
							slug: "nature",
							pretty_slug: "Nature",
						},
						subcategory: {
							slug: "desert",
							pretty_slug: "Desert",
						},
					},
					title: "Desert images",
					subtitle: "Download free desert images",
					description:
						"Choose from a curated selection of desert photos. Always free on Unsplash.",
					meta_title: "20+ Free Desert Pictures & Stock Photos on Unsplash",
					meta_description:
						"Choose from hundreds of free desert pictures. Download HD desert photos for free on Unsplash.",
					cover_photo: {
						id: "L75D18aVal8",
						slug: "L75D18aVal8",
						created_at: "2017-10-29T22:41:48Z",
						updated_at: "2023-06-11T12:02:10Z",
						promoted_at: null,
						width: 4928,
						height: 3264,
						color: "#a6c0c0",
						blur_hash: "LsG[sURjRPayLNWBn$ayElofozoJ",
						description:
							"Walking down the Wildcat trail in Monument Valley opens up this magnificent view to everyone. Amazing weather and good light helped us with this picture.",
						alt_description: "landscape photography of rock formation",
						urls: {
							raw: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3",
							full: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
							regular:
								"https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
							small:
								"https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
							thumb:
								"https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
							small_s3:
								"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1509316785289-025f5b846b35",
						},
						links: {
							self: "https://api.unsplash.com/photos/L75D18aVal8",
							html: "https://unsplash.com/photos/L75D18aVal8",
							download: "https://unsplash.com/photos/L75D18aVal8/download",
							download_location:
								"https://api.unsplash.com/photos/L75D18aVal8/download",
						},
						likes: 1184,
						liked_by_user: false,
						current_user_collections: [],
						sponsorship: null,
						topic_submissions: {},
						premium: false,
						plus: false,
						user: {
							id: "ShDq6xH5EIw",
							updated_at: "2023-06-09T17:14:48Z",
							username: "gkumar2175",
							name: "Ganapathy Kumar",
							first_name: "Ganapathy",
							last_name: "Kumar",
							twitter_username: null,
							portfolio_url: "http://flickr.com/callmegk",
							bio: "Optics Engineer based out of Albuquerque, New Mexico. Obsessed with clouds, golden rays illuminating the green, the dark night sky, city skylines and landscapes. ",
							location: "Albuquerque, NM",
							links: {
								self: "https://api.unsplash.com/users/gkumar2175",
								html: "https://unsplash.com/@gkumar2175",
								photos: "https://api.unsplash.com/users/gkumar2175/photos",
								likes: "https://api.unsplash.com/users/gkumar2175/likes",
								portfolio:
									"https://api.unsplash.com/users/gkumar2175/portfolio",
								following:
									"https://api.unsplash.com/users/gkumar2175/following",
								followers:
									"https://api.unsplash.com/users/gkumar2175/followers",
							},
							profile_image: {
								small:
									"https://images.unsplash.com/profile-1645546823484-5c8b0aabd4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
								medium:
									"https://images.unsplash.com/profile-1645546823484-5c8b0aabd4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
								large:
									"https://images.unsplash.com/profile-1645546823484-5c8b0aabd4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
							},
							instagram_username: "gkumar21",
							total_collections: 2,
							total_likes: 849,
							total_photos: 92,
							accepted_tos: true,
							for_hire: false,
							social: {
								instagram_username: "gkumar21",
								portfolio_url: "http://flickr.com/callmegk",
								twitter_username: null,
								paypal_email: null,
							},
						},
					},
				},
			},
			{
				type: "landing_page",
				title: "wallpaper",
				source: {
					ancestry: {
						type: {
							slug: "wallpapers",
							pretty_slug: "HD Wallpapers",
						},
					},
					title: "Hd wallpapers",
					subtitle: "Download free wallpapers",
					description:
						"Choose from the highest quality selection of high-definition wallpapers–all submitted by our talented community of contributors. Free to download and use for your mobile and desktop screens.",
					meta_title:
						"Download Free HD Wallpapers [Mobile + Desktop] | Unsplash",
					meta_description:
						"Download the best HD and Ultra HD Wallpapers for free. Use them as wallpapers for your mobile or desktop screens.",
					cover_photo: {
						id: "VEkIsvDviSs",
						slug: "VEkIsvDviSs",
						created_at: "2018-10-23T05:38:21Z",
						updated_at: "2023-06-09T07:04:17Z",
						promoted_at: "2018-10-24T13:12:35Z",
						width: 5000,
						height: 3333,
						color: "#f3c0c0",
						blur_hash: "LlLf,=%2WBax}nfhfkj[^iW.WBof",
						description:
							"Life is full of adventures. This image was created during one of my own adventures on the top of Fronalpstock in Switzerland. During the day thousands and thousands of tourists  where passing by this spot. But the last chairlift was running at 5:30pm. Suddently the place became very quiet and calm. The fog started to clear up and reveal the two peaks.  This image represents one of the most beautiful sunsets I ever saw.",
						alt_description: "a mountain with a pink sky above the clouds",
						urls: {
							raw: "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3",
							full: "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
							regular:
								"https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
							small:
								"https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
							thumb:
								"https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
							small_s3:
								"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1540270776932-e72e7c2d11cd",
						},
						links: {
							self: "https://api.unsplash.com/photos/VEkIsvDviSs",
							html: "https://unsplash.com/photos/VEkIsvDviSs",
							download: "https://unsplash.com/photos/VEkIsvDviSs/download",
							download_location:
								"https://api.unsplash.com/photos/VEkIsvDviSs/download",
						},
						likes: 1090,
						liked_by_user: false,
						current_user_collections: [],
						sponsorship: null,
						topic_submissions: {
							nature: {
								status: "approved",
								approved_on: "2020-04-06T14:20:12Z",
							},
							wallpapers: {
								status: "approved",
								approved_on: "2020-04-06T14:20:09Z",
							},
						},
						premium: false,
						plus: false,
						user: {
							id: "1oL7MvktvW4",
							updated_at: "2023-06-09T06:47:13Z",
							username: "borisbaldinger",
							name: "Boris Baldinger",
							first_name: "Boris",
							last_name: "Baldinger",
							twitter_username: "borisbaldinger",
							portfolio_url: "https://www.boris-baldinger.com",
							bio: "Father of 3 | Business photographer with a fable for nature | Speaker | Teacher | Social Media Fan",
							location: "Switzerland",
							links: {
								self: "https://api.unsplash.com/users/borisbaldinger",
								html: "https://unsplash.com/@borisbaldinger",
								photos: "https://api.unsplash.com/users/borisbaldinger/photos",
								likes: "https://api.unsplash.com/users/borisbaldinger/likes",
								portfolio:
									"https://api.unsplash.com/users/borisbaldinger/portfolio",
								following:
									"https://api.unsplash.com/users/borisbaldinger/following",
								followers:
									"https://api.unsplash.com/users/borisbaldinger/followers",
							},
							profile_image: {
								small:
									"https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
								medium:
									"https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
								large:
									"https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
							},
							instagram_username: "borisbaldinger",
							total_collections: 3,
							total_likes: 71,
							total_photos: 16,
							accepted_tos: true,
							for_hire: true,
							social: {
								instagram_username: "borisbaldinger",
								portfolio_url: "https://www.boris-baldinger.com",
								twitter_username: "borisbaldinger",
								paypal_email: null,
							},
						},
					},
				},
			},
			{
				type: "search",
				title: "outdoor",
			},
			{
				type: "search",
				title: "dune",
			},
			{
				type: "landing_page",
				title: "background",
				source: {
					ancestry: {
						type: {
							slug: "backgrounds",
							pretty_slug: "Backgrounds",
						},
					},
					title: "Hq background images",
					subtitle: "Download free backgrounds",
					description:
						"Browse our beautiful selection of free background images–all submitted by our community of talented contributors and completely free to download and use.",
					meta_title:
						"Best 100+ Free Background Images [HD] | Download your next background photo on Unsplash",
					meta_description:
						"Download the perfect background images. Find over 100+ of the best free background images. Free for commercial use ✓ No attribution required ✓ Copyright-free ✓",
					cover_photo: {
						id: "fMUIVein7Ng",
						slug: "fMUIVein7Ng",
						created_at: "2017-05-15T23:49:10Z",
						updated_at: "2023-06-12T23:01:24Z",
						promoted_at: "2017-05-16T09:06:41Z",
						width: 3847,
						height: 5583,
						color: "#c0d9d9",
						blur_hash: "LtJ@tjEyjFj[lov~Rja{-Cx]bbWC",
						description:
							"After getting many photos for a project, I am also trying to get images to share with the Unsplash community. Here’s an attempt at abstracting a detail of the amazing architecture of CCPV.",
						alt_description: "closeup photo of black and red building",
						urls: {
							raw: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3",
							full: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
							regular:
								"https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
							small:
								"https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
							thumb:
								"https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
							small_s3:
								"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1494891848038-7bd202a2afeb",
						},
						links: {
							self: "https://api.unsplash.com/photos/fMUIVein7Ng",
							html: "https://unsplash.com/photos/fMUIVein7Ng",
							download: "https://unsplash.com/photos/fMUIVein7Ng/download",
							download_location:
								"https://api.unsplash.com/photos/fMUIVein7Ng/download",
						},
						likes: 1873,
						liked_by_user: false,
						current_user_collections: [],
						sponsorship: null,
						topic_submissions: {
							"architecture-interior": {
								status: "approved",
								approved_on: "2020-04-06T14:20:14Z",
							},
							wallpapers: {
								status: "approved",
								approved_on: "2020-04-06T14:20:09Z",
							},
							"color-of-water": {
								status: "approved",
								approved_on: "2022-04-21T15:04:21Z",
							},
						},
						premium: false,
						plus: false,
						user: {
							id: "hnq0aaqF_Qo",
							updated_at: "2023-06-09T04:33:30Z",
							username: "scottwebb",
							name: "Scott Webb",
							first_name: "Scott",
							last_name: "Webb",
							twitter_username: null,
							portfolio_url: "https://scottwebb.me/",
							bio: "If you like my work and you'd like to support me, you can consider a donation 👉  http://www.paypal.me/scottrwebb | Donation goal for a new lens: $351.01 of $449 | Thank you Jay D. 🙏",
							location: "London, Ontario, Canada",
							links: {
								self: "https://api.unsplash.com/users/scottwebb",
								html: "https://unsplash.com/@scottwebb",
								photos: "https://api.unsplash.com/users/scottwebb/photos",
								likes: "https://api.unsplash.com/users/scottwebb/likes",
								portfolio: "https://api.unsplash.com/users/scottwebb/portfolio",
								following: "https://api.unsplash.com/users/scottwebb/following",
								followers: "https://api.unsplash.com/users/scottwebb/followers",
							},
							profile_image: {
								small:
									"https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
								medium:
									"https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
								large:
									"https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
							},
							instagram_username: "scottwebb",
							total_collections: 46,
							total_likes: 4152,
							total_photos: 804,
							accepted_tos: true,
							for_hire: true,
							social: {
								instagram_username: "scottwebb",
								portfolio_url: "https://scottwebb.me/",
								twitter_username: null,
								paypal_email: null,
							},
						},
					},
				},
			},
			{
				type: "search",
				title: "soil",
			},
		],
		links: {
			self: "https://api.unsplash.com/collections/BsKfcfuIheU",
			html: "https://unsplash.com/collections/BsKfcfuIheU/deserts",
			photos: "https://api.unsplash.com/collections/BsKfcfuIheU/photos",
			related: "https://api.unsplash.com/collections/BsKfcfuIheU/related",
		},
		user: {
			id: "PYipZnf-Pzk",
			updated_at: "2023-06-13T14:02:04Z",
			username: "arceniy",
			name: "Arceniy Varlamov",
			first_name: "Arceniy",
			last_name: "Varlamov",
			twitter_username: null,
			portfolio_url: null,
			bio: "I love chocolate",
			location: "World",
			links: {
				self: "https://api.unsplash.com/users/arceniy",
				html: "https://unsplash.com/@arceniy",
				photos: "https://api.unsplash.com/users/arceniy/photos",
				likes: "https://api.unsplash.com/users/arceniy/likes",
				portfolio: "https://api.unsplash.com/users/arceniy/portfolio",
				following: "https://api.unsplash.com/users/arceniy/following",
				followers: "https://api.unsplash.com/users/arceniy/followers",
			},
			profile_image: {
				small:
					"https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
				medium:
					"https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
				large:
					"https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
			},
			instagram_username: null,
			total_collections: 4,
			total_likes: 1,
			total_photos: 0,
			accepted_tos: true,
			for_hire: true,
			social: {
				instagram_username: null,
				portfolio_url: null,
				twitter_username: null,
				paypal_email: null,
			},
		},
		cover_photo: {
			id: "pVr6wvUneMk",
			slug: "pVr6wvUneMk",
			created_at: "2018-11-16T20:58:43Z",
			updated_at: "2023-06-17T18:04:56Z",
			promoted_at: "2018-11-18T18:20:29Z",
			width: 5835,
			height: 3890,
			color: "#d9c0a6",
			blur_hash: "LhMY[}oJWVj[~poLayj[Ioj[j@WV",
			description: "after a sand storm the the air cleans up quickly",
			alt_description: "dessert field",
			urls: {
				raw: "https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3",
				full: "https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
				regular:
					"https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
				small:
					"https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
				thumb:
					"https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
				small_s3:
					"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1542401886-65d6c61db217",
			},
			links: {
				self: "https://api.unsplash.com/photos/pVr6wvUneMk",
				html: "https://unsplash.com/photos/pVr6wvUneMk",
				download: "https://unsplash.com/photos/pVr6wvUneMk/download",
				download_location:
					"https://api.unsplash.com/photos/pVr6wvUneMk/download",
			},
			likes: 1680,
			liked_by_user: false,
			current_user_collections: [
				{
					id: "BsKfcfuIheU",
					title: "deserts",
					description: null,
					published_at: "2023-02-21T12:01:07Z",
					last_collected_at: "2023-02-21T12:01:53Z",
					updated_at: "2023-02-21T12:01:53Z",
					curated: false,
					featured: false,
					total_photos: 4,
					private: false,
					share_key: "1a8d85aaa200483e82860518a6b9c20c",
					tags: [
						{
							type: "landing_page",
							title: "desert",
							source: {
								ancestry: {
									type: {
										slug: "images",
										pretty_slug: "Images",
									},
									category: {
										slug: "nature",
										pretty_slug: "Nature",
									},
									subcategory: {
										slug: "desert",
										pretty_slug: "Desert",
									},
								},
								title: "Desert images",
								subtitle: "Download free desert images",
								description:
									"Choose from a curated selection of desert photos. Always free on Unsplash.",
								meta_title:
									"20+ Free Desert Pictures & Stock Photos on Unsplash",
								meta_description:
									"Choose from hundreds of free desert pictures. Download HD desert photos for free on Unsplash.",
								cover_photo: {
									id: "L75D18aVal8",
									slug: "L75D18aVal8",
									created_at: "2017-10-29T22:41:48Z",
									updated_at: "2023-06-11T12:02:10Z",
									promoted_at: null,
									width: 4928,
									height: 3264,
									color: "#a6c0c0",
									blur_hash: "LsG[sURjRPayLNWBn$ayElofozoJ",
									description:
										"Walking down the Wildcat trail in Monument Valley opens up this magnificent view to everyone. Amazing weather and good light helped us with this picture.",
									alt_description: "landscape photography of rock formation",
									urls: {
										raw: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3",
										full: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
										regular:
											"https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
										small:
											"https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
										thumb:
											"https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
										small_s3:
											"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1509316785289-025f5b846b35",
									},
									links: {
										self: "https://api.unsplash.com/photos/L75D18aVal8",
										html: "https://unsplash.com/photos/L75D18aVal8",
										download:
											"https://unsplash.com/photos/L75D18aVal8/download",
										download_location:
											"https://api.unsplash.com/photos/L75D18aVal8/download",
									},
									likes: 1184,
									liked_by_user: false,
									current_user_collections: [],
									sponsorship: null,
									topic_submissions: {},
									premium: false,
									plus: false,
									user: {
										id: "ShDq6xH5EIw",
										updated_at: "2023-06-09T17:14:48Z",
										username: "gkumar2175",
										name: "Ganapathy Kumar",
										first_name: "Ganapathy",
										last_name: "Kumar",
										twitter_username: null,
										portfolio_url: "http://flickr.com/callmegk",
										bio: "Optics Engineer based out of Albuquerque, New Mexico. Obsessed with clouds, golden rays illuminating the green, the dark night sky, city skylines and landscapes. ",
										location: "Albuquerque, NM",
										links: {
											self: "https://api.unsplash.com/users/gkumar2175",
											html: "https://unsplash.com/@gkumar2175",
											photos:
												"https://api.unsplash.com/users/gkumar2175/photos",
											likes: "https://api.unsplash.com/users/gkumar2175/likes",
											portfolio:
												"https://api.unsplash.com/users/gkumar2175/portfolio",
											following:
												"https://api.unsplash.com/users/gkumar2175/following",
											followers:
												"https://api.unsplash.com/users/gkumar2175/followers",
										},
										profile_image: {
											small:
												"https://images.unsplash.com/profile-1645546823484-5c8b0aabd4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
											medium:
												"https://images.unsplash.com/profile-1645546823484-5c8b0aabd4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
											large:
												"https://images.unsplash.com/profile-1645546823484-5c8b0aabd4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
										},
										instagram_username: "gkumar21",
										total_collections: 2,
										total_likes: 849,
										total_photos: 92,
										accepted_tos: true,
										for_hire: false,
										social: {
											instagram_username: "gkumar21",
											portfolio_url: "http://flickr.com/callmegk",
											twitter_username: null,
											paypal_email: null,
										},
									},
								},
							},
						},
						{
							type: "landing_page",
							title: "wallpaper",
							source: {
								ancestry: {
									type: {
										slug: "wallpapers",
										pretty_slug: "HD Wallpapers",
									},
								},
								title: "Hd wallpapers",
								subtitle: "Download free wallpapers",
								description:
									"Choose from the highest quality selection of high-definition wallpapers–all submitted by our talented community of contributors. Free to download and use for your mobile and desktop screens.",
								meta_title:
									"Download Free HD Wallpapers [Mobile + Desktop] | Unsplash",
								meta_description:
									"Download the best HD and Ultra HD Wallpapers for free. Use them as wallpapers for your mobile or desktop screens.",
								cover_photo: {
									id: "VEkIsvDviSs",
									slug: "VEkIsvDviSs",
									created_at: "2018-10-23T05:38:21Z",
									updated_at: "2023-06-09T07:04:17Z",
									promoted_at: "2018-10-24T13:12:35Z",
									width: 5000,
									height: 3333,
									color: "#f3c0c0",
									blur_hash: "LlLf,=%2WBax}nfhfkj[^iW.WBof",
									description:
										"Life is full of adventures. This image was created during one of my own adventures on the top of Fronalpstock in Switzerland. During the day thousands and thousands of tourists  where passing by this spot. But the last chairlift was running at 5:30pm. Suddently the place became very quiet and calm. The fog started to clear up and reveal the two peaks.  This image represents one of the most beautiful sunsets I ever saw.",
									alt_description:
										"a mountain with a pink sky above the clouds",
									urls: {
										raw: "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3",
										full: "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
										regular:
											"https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
										small:
											"https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
										thumb:
											"https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
										small_s3:
											"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1540270776932-e72e7c2d11cd",
									},
									links: {
										self: "https://api.unsplash.com/photos/VEkIsvDviSs",
										html: "https://unsplash.com/photos/VEkIsvDviSs",
										download:
											"https://unsplash.com/photos/VEkIsvDviSs/download",
										download_location:
											"https://api.unsplash.com/photos/VEkIsvDviSs/download",
									},
									likes: 1090,
									liked_by_user: false,
									current_user_collections: [],
									sponsorship: null,
									topic_submissions: {
										nature: {
											status: "approved",
											approved_on: "2020-04-06T14:20:12Z",
										},
										wallpapers: {
											status: "approved",
											approved_on: "2020-04-06T14:20:09Z",
										},
									},
									premium: false,
									plus: false,
									user: {
										id: "1oL7MvktvW4",
										updated_at: "2023-06-09T06:47:13Z",
										username: "borisbaldinger",
										name: "Boris Baldinger",
										first_name: "Boris",
										last_name: "Baldinger",
										twitter_username: "borisbaldinger",
										portfolio_url: "https://www.boris-baldinger.com",
										bio: "Father of 3 | Business photographer with a fable for nature | Speaker | Teacher | Social Media Fan",
										location: "Switzerland",
										links: {
											self: "https://api.unsplash.com/users/borisbaldinger",
											html: "https://unsplash.com/@borisbaldinger",
											photos:
												"https://api.unsplash.com/users/borisbaldinger/photos",
											likes:
												"https://api.unsplash.com/users/borisbaldinger/likes",
											portfolio:
												"https://api.unsplash.com/users/borisbaldinger/portfolio",
											following:
												"https://api.unsplash.com/users/borisbaldinger/following",
											followers:
												"https://api.unsplash.com/users/borisbaldinger/followers",
										},
										profile_image: {
											small:
												"https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
											medium:
												"https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
											large:
												"https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
										},
										instagram_username: "borisbaldinger",
										total_collections: 3,
										total_likes: 71,
										total_photos: 16,
										accepted_tos: true,
										for_hire: true,
										social: {
											instagram_username: "borisbaldinger",
											portfolio_url: "https://www.boris-baldinger.com",
											twitter_username: "borisbaldinger",
											paypal_email: null,
										},
									},
								},
							},
						},
						{
							type: "search",
							title: "outdoor",
						},
						{
							type: "search",
							title: "dune",
						},
						{
							type: "landing_page",
							title: "background",
							source: {
								ancestry: {
									type: {
										slug: "backgrounds",
										pretty_slug: "Backgrounds",
									},
								},
								title: "Hq background images",
								subtitle: "Download free backgrounds",
								description:
									"Browse our beautiful selection of free background images–all submitted by our community of talented contributors and completely free to download and use.",
								meta_title:
									"Best 100+ Free Background Images [HD] | Download your next background photo on Unsplash",
								meta_description:
									"Download the perfect background images. Find over 100+ of the best free background images. Free for commercial use ✓ No attribution required ✓ Copyright-free ✓",
								cover_photo: {
									id: "fMUIVein7Ng",
									slug: "fMUIVein7Ng",
									created_at: "2017-05-15T23:49:10Z",
									updated_at: "2023-06-12T23:01:24Z",
									promoted_at: "2017-05-16T09:06:41Z",
									width: 3847,
									height: 5583,
									color: "#c0d9d9",
									blur_hash: "LtJ@tjEyjFj[lov~Rja{-Cx]bbWC",
									description:
										"After getting many photos for a project, I am also trying to get images to share with the Unsplash community. Here’s an attempt at abstracting a detail of the amazing architecture of CCPV.",
									alt_description: "closeup photo of black and red building",
									urls: {
										raw: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3",
										full: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
										regular:
											"https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
										small:
											"https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
										thumb:
											"https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
										small_s3:
											"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1494891848038-7bd202a2afeb",
									},
									links: {
										self: "https://api.unsplash.com/photos/fMUIVein7Ng",
										html: "https://unsplash.com/photos/fMUIVein7Ng",
										download:
											"https://unsplash.com/photos/fMUIVein7Ng/download",
										download_location:
											"https://api.unsplash.com/photos/fMUIVein7Ng/download",
									},
									likes: 1873,
									liked_by_user: false,
									current_user_collections: [],
									sponsorship: null,
									topic_submissions: {
										"architecture-interior": {
											status: "approved",
											approved_on: "2020-04-06T14:20:14Z",
										},
										wallpapers: {
											status: "approved",
											approved_on: "2020-04-06T14:20:09Z",
										},
										"color-of-water": {
											status: "approved",
											approved_on: "2022-04-21T15:04:21Z",
										},
									},
									premium: false,
									plus: false,
									user: {
										id: "hnq0aaqF_Qo",
										updated_at: "2023-06-09T04:33:30Z",
										username: "scottwebb",
										name: "Scott Webb",
										first_name: "Scott",
										last_name: "Webb",
										twitter_username: null,
										portfolio_url: "https://scottwebb.me/",
										bio: "If you like my work and you'd like to support me, you can consider a donation 👉  http://www.paypal.me/scottrwebb | Donation goal for a new lens: $351.01 of $449 | Thank you Jay D. 🙏",
										location: "London, Ontario, Canada",
										links: {
											self: "https://api.unsplash.com/users/scottwebb",
											html: "https://unsplash.com/@scottwebb",
											photos: "https://api.unsplash.com/users/scottwebb/photos",
											likes: "https://api.unsplash.com/users/scottwebb/likes",
											portfolio:
												"https://api.unsplash.com/users/scottwebb/portfolio",
											following:
												"https://api.unsplash.com/users/scottwebb/following",
											followers:
												"https://api.unsplash.com/users/scottwebb/followers",
										},
										profile_image: {
											small:
												"https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
											medium:
												"https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
											large:
												"https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
										},
										instagram_username: "scottwebb",
										total_collections: 46,
										total_likes: 4152,
										total_photos: 804,
										accepted_tos: true,
										for_hire: true,
										social: {
											instagram_username: "scottwebb",
											portfolio_url: "https://scottwebb.me/",
											twitter_username: null,
											paypal_email: null,
										},
									},
								},
							},
						},
						{
							type: "search",
							title: "soil",
						},
					],
					links: {
						self: "https://api.unsplash.com/collections/BsKfcfuIheU",
						html: "https://unsplash.com/collections/BsKfcfuIheU/deserts",
						photos: "https://api.unsplash.com/collections/BsKfcfuIheU/photos",
						related: "https://api.unsplash.com/collections/BsKfcfuIheU/related",
					},
				},
			],
			sponsorship: null,
			topic_submissions: {
				wallpapers: {
					status: "approved",
					approved_on: "2020-04-06T14:20:09Z",
				},
			},
			user: {
				id: "eXEoGifqQY4",
				updated_at: "2023-06-17T17:51:16Z",
				username: "wolfgang_hasselmann",
				name: "Wolfgang Hasselmann",
				first_name: "Wolfgang",
				last_name: "Hasselmann",
				twitter_username: null,
				portfolio_url: "https://www.youtube.com/@wolfgang_hasselmann/videos",
				bio: "I am a photographer and enjoy my hobby.\r\nI like to share my pictures for free, but if you feel you would like to donate, do it not to me but to:  Médecins Sans Frontières   https://www.msf.org/donate  \r\n",
				location: "Germany ",
				links: {
					self: "https://api.unsplash.com/users/wolfgang_hasselmann",
					html: "https://unsplash.com/@wolfgang_hasselmann",
					photos: "https://api.unsplash.com/users/wolfgang_hasselmann/photos",
					likes: "https://api.unsplash.com/users/wolfgang_hasselmann/likes",
					portfolio:
						"https://api.unsplash.com/users/wolfgang_hasselmann/portfolio",
					following:
						"https://api.unsplash.com/users/wolfgang_hasselmann/following",
					followers:
						"https://api.unsplash.com/users/wolfgang_hasselmann/followers",
				},
				profile_image: {
					small:
						"https://images.unsplash.com/profile-1516997253075-2a25da8007e7?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
					medium:
						"https://images.unsplash.com/profile-1516997253075-2a25da8007e7?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
					large:
						"https://images.unsplash.com/profile-1516997253075-2a25da8007e7?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
				},
				instagram_username: null,
				total_collections: 75,
				total_likes: 12254,
				total_photos: 15075,
				accepted_tos: true,
				for_hire: false,
				social: {
					instagram_username: null,
					portfolio_url: "https://www.youtube.com/@wolfgang_hasselmann/videos",
					twitter_username: null,
					paypal_email: null,
				},
			},
		},
		preview_photos: [
			{
				id: "pVr6wvUneMk",
				slug: "pVr6wvUneMk",
				created_at: "2018-11-16T20:58:43Z",
				updated_at: "2023-06-17T18:04:56Z",
				blur_hash: "LhMY[}oJWVj[~poLayj[Ioj[j@WV",
				urls: {
					raw: "https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3",
					full: "https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
					regular:
						"https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
					small:
						"https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
					thumb:
						"https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
					small_s3:
						"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1542401886-65d6c61db217",
				},
			},
			{
				id: "wkMd_DylG8I",
				slug: "wkMd_DylG8I",
				created_at: "2019-06-05T20:40:21Z",
				updated_at: "2023-06-17T12:07:32Z",
				blur_hash: "LGFrLw-os,of3Gt7s-s:D+R*NHt6",
				urls: {
					raw: "https://images.unsplash.com/photo-1559767180-47d8f4919e5d?ixlib=rb-4.0.3",
					full: "https://images.unsplash.com/photo-1559767180-47d8f4919e5d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
					regular:
						"https://images.unsplash.com/photo-1559767180-47d8f4919e5d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
					small:
						"https://images.unsplash.com/photo-1559767180-47d8f4919e5d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
					thumb:
						"https://images.unsplash.com/photo-1559767180-47d8f4919e5d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
					small_s3:
						"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1559767180-47d8f4919e5d",
				},
			},
			{
				id: "PP8Escz15d8",
				slug: "PP8Escz15d8",
				created_at: "2017-02-27T12:05:10Z",
				updated_at: "2023-06-17T17:01:13Z",
				blur_hash: "LlL47:NGaxWC*0WBj?j[x^j@R*oL",
				urls: {
					raw: "https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-4.0.3",
					full: "https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
					regular:
						"https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
					small:
						"https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
					thumb:
						"https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
					small_s3:
						"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1488197047962-b48492212cda",
				},
			},
			{
				id: "Xc6gtOwSMSA",
				slug: "Xc6gtOwSMSA",
				created_at: "2017-11-28T09:21:40Z",
				updated_at: "2023-06-18T02:02:28Z",
				blur_hash: "LyIg.xWBSiofT}j]jtfk58ofr=ay",
				urls: {
					raw: "https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?ixlib=rb-4.0.3",
					full: "https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
					regular:
						"https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
					small:
						"https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
					thumb:
						"https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
					small_s3:
						"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1511860810434-a92f84c6f01e",
				},
			},
		],
		meta: {
			title: null,
			description: null,
			index: false,
		},
	};

	const dataCollectionPhotos = [
		{
			id: "pVr6wvUneMk",
			slug: "pVr6wvUneMk",
			created_at: "2018-11-16T20:58:43Z",
			updated_at: "2023-06-17T18:04:56Z",
			promoted_at: "2018-11-18T18:20:29Z",
			width: 5835,
			height: 3890,
			color: "#d9c0a6",
			blur_hash: "LhMY[}oJWVj[~poLayj[Ioj[j@WV",
			description: "after a sand storm the the air cleans up quickly",
			alt_description: "dessert field",
			urls: {
				raw: "https://images.unsplash.com/photo-1542401886-65d6c61db217?ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258MXxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3",
				full: "https://images.unsplash.com/photo-1542401886-65d6c61db217?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258MXxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3&q=85",
				regular:
					"https://images.unsplash.com/photo-1542401886-65d6c61db217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258MXxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3&q=80&w=1080",
				small:
					"https://images.unsplash.com/photo-1542401886-65d6c61db217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258MXxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3&q=80&w=400",
				thumb:
					"https://images.unsplash.com/photo-1542401886-65d6c61db217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258MXxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3&q=80&w=200",
				small_s3:
					"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1542401886-65d6c61db217",
			},
			links: {
				self: "https://api.unsplash.com/photos/pVr6wvUneMk",
				html: "https://unsplash.com/photos/pVr6wvUneMk",
				download:
					"https://unsplash.com/photos/pVr6wvUneMk/download?ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258MXxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw",
				download_location:
					"https://api.unsplash.com/photos/pVr6wvUneMk/download?ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258MXxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw",
			},
			likes: 1680,
			liked_by_user: false,
			current_user_collections: [
				{
					id: "BsKfcfuIheU",
					title: "deserts",
					description: null,
					published_at: "2023-02-21T12:01:07Z",
					last_collected_at: "2023-02-21T12:01:53Z",
					updated_at: "2023-02-21T12:01:53Z",
					curated: false,
					featured: false,
					total_photos: 4,
					private: false,
					share_key: "1a8d85aaa200483e82860518a6b9c20c",
					tags: [
						{
							type: "landing_page",
							title: "desert",
							source: {
								ancestry: {
									type: {
										slug: "images",
										pretty_slug: "Images",
									},
									category: {
										slug: "nature",
										pretty_slug: "Nature",
									},
									subcategory: {
										slug: "desert",
										pretty_slug: "Desert",
									},
								},
								title: "Desert images",
								subtitle: "Download free desert images",
								description:
									"Choose from a curated selection of desert photos. Always free on Unsplash.",
								meta_title:
									"20+ Free Desert Pictures & Stock Photos on Unsplash",
								meta_description:
									"Choose from hundreds of free desert pictures. Download HD desert photos for free on Unsplash.",
								cover_photo: {
									id: "L75D18aVal8",
									slug: "L75D18aVal8",
									created_at: "2017-10-29T22:41:48Z",
									updated_at: "2023-06-11T12:02:10Z",
									promoted_at: null,
									width: 4928,
									height: 3264,
									color: "#a6c0c0",
									blur_hash: "LsG[sURjRPayLNWBn$ayElofozoJ",
									description:
										"Walking down the Wildcat trail in Monument Valley opens up this magnificent view to everyone. Amazing weather and good light helped us with this picture.",
									alt_description: "landscape photography of rock formation",
									urls: {
										raw: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3",
										full: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
										regular:
											"https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
										small:
											"https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
										thumb:
											"https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
										small_s3:
											"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1509316785289-025f5b846b35",
									},
									links: {
										self: "https://api.unsplash.com/photos/L75D18aVal8",
										html: "https://unsplash.com/photos/L75D18aVal8",
										download:
											"https://unsplash.com/photos/L75D18aVal8/download",
										download_location:
											"https://api.unsplash.com/photos/L75D18aVal8/download",
									},
									likes: 1184,
									liked_by_user: false,
									current_user_collections: [],
									sponsorship: null,
									topic_submissions: {},
									premium: false,
									plus: false,
									user: {
										id: "ShDq6xH5EIw",
										updated_at: "2023-06-09T17:14:48Z",
										username: "gkumar2175",
										name: "Ganapathy Kumar",
										first_name: "Ganapathy",
										last_name: "Kumar",
										twitter_username: null,
										portfolio_url: "http://flickr.com/callmegk",
										bio: "Optics Engineer based out of Albuquerque, New Mexico. Obsessed with clouds, golden rays illuminating the green, the dark night sky, city skylines and landscapes. ",
										location: "Albuquerque, NM",
										links: {
											self: "https://api.unsplash.com/users/gkumar2175",
											html: "https://unsplash.com/@gkumar2175",
											photos:
												"https://api.unsplash.com/users/gkumar2175/photos",
											likes: "https://api.unsplash.com/users/gkumar2175/likes",
											portfolio:
												"https://api.unsplash.com/users/gkumar2175/portfolio",
											following:
												"https://api.unsplash.com/users/gkumar2175/following",
											followers:
												"https://api.unsplash.com/users/gkumar2175/followers",
										},
										profile_image: {
											small:
												"https://images.unsplash.com/profile-1645546823484-5c8b0aabd4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
											medium:
												"https://images.unsplash.com/profile-1645546823484-5c8b0aabd4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
											large:
												"https://images.unsplash.com/profile-1645546823484-5c8b0aabd4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
										},
										instagram_username: "gkumar21",
										total_collections: 2,
										total_likes: 849,
										total_photos: 92,
										accepted_tos: true,
										for_hire: false,
										social: {
											instagram_username: "gkumar21",
											portfolio_url: "http://flickr.com/callmegk",
											twitter_username: null,
											paypal_email: null,
										},
									},
								},
							},
						},
						{
							type: "landing_page",
							title: "wallpaper",
							source: {
								ancestry: {
									type: {
										slug: "wallpapers",
										pretty_slug: "HD Wallpapers",
									},
								},
								title: "Hd wallpapers",
								subtitle: "Download free wallpapers",
								description:
									"Choose from the highest quality selection of high-definition wallpapers–all submitted by our talented community of contributors. Free to download and use for your mobile and desktop screens.",
								meta_title:
									"Download Free HD Wallpapers [Mobile + Desktop] | Unsplash",
								meta_description:
									"Download the best HD and Ultra HD Wallpapers for free. Use them as wallpapers for your mobile or desktop screens.",
								cover_photo: {
									id: "VEkIsvDviSs",
									slug: "VEkIsvDviSs",
									created_at: "2018-10-23T05:38:21Z",
									updated_at: "2023-06-09T07:04:17Z",
									promoted_at: "2018-10-24T13:12:35Z",
									width: 5000,
									height: 3333,
									color: "#f3c0c0",
									blur_hash: "LlLf,=%2WBax}nfhfkj[^iW.WBof",
									description:
										"Life is full of adventures. This image was created during one of my own adventures on the top of Fronalpstock in Switzerland. During the day thousands and thousands of tourists  where passing by this spot. But the last chairlift was running at 5:30pm. Suddently the place became very quiet and calm. The fog started to clear up and reveal the two peaks.  This image represents one of the most beautiful sunsets I ever saw.",
									alt_description:
										"a mountain with a pink sky above the clouds",
									urls: {
										raw: "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3",
										full: "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
										regular:
											"https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
										small:
											"https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
										thumb:
											"https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
										small_s3:
											"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1540270776932-e72e7c2d11cd",
									},
									links: {
										self: "https://api.unsplash.com/photos/VEkIsvDviSs",
										html: "https://unsplash.com/photos/VEkIsvDviSs",
										download:
											"https://unsplash.com/photos/VEkIsvDviSs/download",
										download_location:
											"https://api.unsplash.com/photos/VEkIsvDviSs/download",
									},
									likes: 1090,
									liked_by_user: false,
									current_user_collections: [],
									sponsorship: null,
									topic_submissions: {
										nature: {
											status: "approved",
											approved_on: "2020-04-06T14:20:12Z",
										},
										wallpapers: {
											status: "approved",
											approved_on: "2020-04-06T14:20:09Z",
										},
									},
									premium: false,
									plus: false,
									user: {
										id: "1oL7MvktvW4",
										updated_at: "2023-06-09T06:47:13Z",
										username: "borisbaldinger",
										name: "Boris Baldinger",
										first_name: "Boris",
										last_name: "Baldinger",
										twitter_username: "borisbaldinger",
										portfolio_url: "https://www.boris-baldinger.com",
										bio: "Father of 3 | Business photographer with a fable for nature | Speaker | Teacher | Social Media Fan",
										location: "Switzerland",
										links: {
											self: "https://api.unsplash.com/users/borisbaldinger",
											html: "https://unsplash.com/@borisbaldinger",
											photos:
												"https://api.unsplash.com/users/borisbaldinger/photos",
											likes:
												"https://api.unsplash.com/users/borisbaldinger/likes",
											portfolio:
												"https://api.unsplash.com/users/borisbaldinger/portfolio",
											following:
												"https://api.unsplash.com/users/borisbaldinger/following",
											followers:
												"https://api.unsplash.com/users/borisbaldinger/followers",
										},
										profile_image: {
											small:
												"https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
											medium:
												"https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
											large:
												"https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
										},
										instagram_username: "borisbaldinger",
										total_collections: 3,
										total_likes: 71,
										total_photos: 16,
										accepted_tos: true,
										for_hire: true,
										social: {
											instagram_username: "borisbaldinger",
											portfolio_url: "https://www.boris-baldinger.com",
											twitter_username: "borisbaldinger",
											paypal_email: null,
										},
									},
								},
							},
						},
						{
							type: "search",
							title: "outdoor",
						},
						{
							type: "search",
							title: "dune",
						},
						{
							type: "landing_page",
							title: "background",
							source: {
								ancestry: {
									type: {
										slug: "backgrounds",
										pretty_slug: "Backgrounds",
									},
								},
								title: "Hq background images",
								subtitle: "Download free backgrounds",
								description:
									"Browse our beautiful selection of free background images–all submitted by our community of talented contributors and completely free to download and use.",
								meta_title:
									"Best 100+ Free Background Images [HD] | Download your next background photo on Unsplash",
								meta_description:
									"Download the perfect background images. Find over 100+ of the best free background images. Free for commercial use ✓ No attribution required ✓ Copyright-free ✓",
								cover_photo: {
									id: "fMUIVein7Ng",
									slug: "fMUIVein7Ng",
									created_at: "2017-05-15T23:49:10Z",
									updated_at: "2023-06-12T23:01:24Z",
									promoted_at: "2017-05-16T09:06:41Z",
									width: 3847,
									height: 5583,
									color: "#c0d9d9",
									blur_hash: "LtJ@tjEyjFj[lov~Rja{-Cx]bbWC",
									description:
										"After getting many photos for a project, I am also trying to get images to share with the Unsplash community. Here’s an attempt at abstracting a detail of the amazing architecture of CCPV.",
									alt_description: "closeup photo of black and red building",
									urls: {
										raw: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3",
										full: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
										regular:
											"https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
										small:
											"https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
										thumb:
											"https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
										small_s3:
											"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1494891848038-7bd202a2afeb",
									},
									links: {
										self: "https://api.unsplash.com/photos/fMUIVein7Ng",
										html: "https://unsplash.com/photos/fMUIVein7Ng",
										download:
											"https://unsplash.com/photos/fMUIVein7Ng/download",
										download_location:
											"https://api.unsplash.com/photos/fMUIVein7Ng/download",
									},
									likes: 1873,
									liked_by_user: false,
									current_user_collections: [],
									sponsorship: null,
									topic_submissions: {
										"architecture-interior": {
											status: "approved",
											approved_on: "2020-04-06T14:20:14Z",
										},
										wallpapers: {
											status: "approved",
											approved_on: "2020-04-06T14:20:09Z",
										},
										"color-of-water": {
											status: "approved",
											approved_on: "2022-04-21T15:04:21Z",
										},
									},
									premium: false,
									plus: false,
									user: {
										id: "hnq0aaqF_Qo",
										updated_at: "2023-06-09T04:33:30Z",
										username: "scottwebb",
										name: "Scott Webb",
										first_name: "Scott",
										last_name: "Webb",
										twitter_username: null,
										portfolio_url: "https://scottwebb.me/",
										bio: "If you like my work and you'd like to support me, you can consider a donation 👉  http://www.paypal.me/scottrwebb | Donation goal for a new lens: $351.01 of $449 | Thank you Jay D. 🙏",
										location: "London, Ontario, Canada",
										links: {
											self: "https://api.unsplash.com/users/scottwebb",
											html: "https://unsplash.com/@scottwebb",
											photos: "https://api.unsplash.com/users/scottwebb/photos",
											likes: "https://api.unsplash.com/users/scottwebb/likes",
											portfolio:
												"https://api.unsplash.com/users/scottwebb/portfolio",
											following:
												"https://api.unsplash.com/users/scottwebb/following",
											followers:
												"https://api.unsplash.com/users/scottwebb/followers",
										},
										profile_image: {
											small:
												"https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
											medium:
												"https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
											large:
												"https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
										},
										instagram_username: "scottwebb",
										total_collections: 46,
										total_likes: 4152,
										total_photos: 804,
										accepted_tos: true,
										for_hire: true,
										social: {
											instagram_username: "scottwebb",
											portfolio_url: "https://scottwebb.me/",
											twitter_username: null,
											paypal_email: null,
										},
									},
								},
							},
						},
						{
							type: "search",
							title: "soil",
						},
					],
					links: {
						self: "https://api.unsplash.com/collections/BsKfcfuIheU",
						html: "https://unsplash.com/collections/BsKfcfuIheU/deserts",
						photos: "https://api.unsplash.com/collections/BsKfcfuIheU/photos",
						related: "https://api.unsplash.com/collections/BsKfcfuIheU/related",
					},
				},
			],
			sponsorship: null,
			topic_submissions: {
				wallpapers: {
					status: "approved",
					approved_on: "2020-04-06T14:20:09Z",
				},
			},
			user: {
				id: "eXEoGifqQY4",
				updated_at: "2023-06-17T17:51:16Z",
				username: "wolfgang_hasselmann",
				name: "Wolfgang Hasselmann",
				first_name: "Wolfgang",
				last_name: "Hasselmann",
				twitter_username: null,
				portfolio_url: "https://www.youtube.com/@wolfgang_hasselmann/videos",
				bio: "I am a photographer and enjoy my hobby.\r\nI like to share my pictures for free, but if you feel you would like to donate, do it not to me but to:  Médecins Sans Frontières   https://www.msf.org/donate  \r\n",
				location: "Germany ",
				links: {
					self: "https://api.unsplash.com/users/wolfgang_hasselmann",
					html: "https://unsplash.com/@wolfgang_hasselmann",
					photos: "https://api.unsplash.com/users/wolfgang_hasselmann/photos",
					likes: "https://api.unsplash.com/users/wolfgang_hasselmann/likes",
					portfolio:
						"https://api.unsplash.com/users/wolfgang_hasselmann/portfolio",
					following:
						"https://api.unsplash.com/users/wolfgang_hasselmann/following",
					followers:
						"https://api.unsplash.com/users/wolfgang_hasselmann/followers",
				},
				profile_image: {
					small:
						"https://images.unsplash.com/profile-1516997253075-2a25da8007e7?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
					medium:
						"https://images.unsplash.com/profile-1516997253075-2a25da8007e7?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
					large:
						"https://images.unsplash.com/profile-1516997253075-2a25da8007e7?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
				},
				instagram_username: null,
				total_collections: 75,
				total_likes: 12254,
				total_photos: 15075,
				accepted_tos: true,
				for_hire: false,
				social: {
					instagram_username: null,
					portfolio_url: "https://www.youtube.com/@wolfgang_hasselmann/videos",
					twitter_username: null,
					paypal_email: null,
				},
			},
		},
		{
			id: "wkMd_DylG8I",
			slug: "wkMd_DylG8I",
			created_at: "2019-06-05T20:40:21Z",
			updated_at: "2023-06-17T12:07:32Z",
			promoted_at: null,
			width: 3571,
			height: 5000,
			color: "#c08c59",
			blur_hash: "LGFrLw-os,of3Gt7s-s:D+R*NHt6",
			description: null,
			alt_description: "brown desert under blue sky",
			urls: {
				raw: "https://images.unsplash.com/photo-1559767180-47d8f4919e5d?ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258MnxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3",
				full: "https://images.unsplash.com/photo-1559767180-47d8f4919e5d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258MnxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3&q=85",
				regular:
					"https://images.unsplash.com/photo-1559767180-47d8f4919e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258MnxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3&q=80&w=1080",
				small:
					"https://images.unsplash.com/photo-1559767180-47d8f4919e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258MnxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3&q=80&w=400",
				thumb:
					"https://images.unsplash.com/photo-1559767180-47d8f4919e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258MnxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3&q=80&w=200",
				small_s3:
					"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1559767180-47d8f4919e5d",
			},
			links: {
				self: "https://api.unsplash.com/photos/wkMd_DylG8I",
				html: "https://unsplash.com/photos/wkMd_DylG8I",
				download:
					"https://unsplash.com/photos/wkMd_DylG8I/download?ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258MnxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw",
				download_location:
					"https://api.unsplash.com/photos/wkMd_DylG8I/download?ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258MnxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw",
			},
			likes: 705,
			liked_by_user: false,
			current_user_collections: [
				{
					id: "BsKfcfuIheU",
					title: "deserts",
					description: null,
					published_at: "2023-02-21T12:01:07Z",
					last_collected_at: "2023-02-21T12:01:53Z",
					updated_at: "2023-02-21T12:01:53Z",
					curated: false,
					featured: false,
					total_photos: 4,
					private: false,
					share_key: "1a8d85aaa200483e82860518a6b9c20c",
					tags: [
						{
							type: "landing_page",
							title: "desert",
							source: {
								ancestry: {
									type: {
										slug: "images",
										pretty_slug: "Images",
									},
									category: {
										slug: "nature",
										pretty_slug: "Nature",
									},
									subcategory: {
										slug: "desert",
										pretty_slug: "Desert",
									},
								},
								title: "Desert images",
								subtitle: "Download free desert images",
								description:
									"Choose from a curated selection of desert photos. Always free on Unsplash.",
								meta_title:
									"20+ Free Desert Pictures & Stock Photos on Unsplash",
								meta_description:
									"Choose from hundreds of free desert pictures. Download HD desert photos for free on Unsplash.",
								cover_photo: {
									id: "L75D18aVal8",
									slug: "L75D18aVal8",
									created_at: "2017-10-29T22:41:48Z",
									updated_at: "2023-06-11T12:02:10Z",
									promoted_at: null,
									width: 4928,
									height: 3264,
									color: "#a6c0c0",
									blur_hash: "LsG[sURjRPayLNWBn$ayElofozoJ",
									description:
										"Walking down the Wildcat trail in Monument Valley opens up this magnificent view to everyone. Amazing weather and good light helped us with this picture.",
									alt_description: "landscape photography of rock formation",
									urls: {
										raw: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3",
										full: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
										regular:
											"https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
										small:
											"https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
										thumb:
											"https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
										small_s3:
											"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1509316785289-025f5b846b35",
									},
									links: {
										self: "https://api.unsplash.com/photos/L75D18aVal8",
										html: "https://unsplash.com/photos/L75D18aVal8",
										download:
											"https://unsplash.com/photos/L75D18aVal8/download",
										download_location:
											"https://api.unsplash.com/photos/L75D18aVal8/download",
									},
									likes: 1184,
									liked_by_user: false,
									current_user_collections: [],
									sponsorship: null,
									topic_submissions: {},
									premium: false,
									plus: false,
									user: {
										id: "ShDq6xH5EIw",
										updated_at: "2023-06-09T17:14:48Z",
										username: "gkumar2175",
										name: "Ganapathy Kumar",
										first_name: "Ganapathy",
										last_name: "Kumar",
										twitter_username: null,
										portfolio_url: "http://flickr.com/callmegk",
										bio: "Optics Engineer based out of Albuquerque, New Mexico. Obsessed with clouds, golden rays illuminating the green, the dark night sky, city skylines and landscapes. ",
										location: "Albuquerque, NM",
										links: {
											self: "https://api.unsplash.com/users/gkumar2175",
											html: "https://unsplash.com/@gkumar2175",
											photos:
												"https://api.unsplash.com/users/gkumar2175/photos",
											likes: "https://api.unsplash.com/users/gkumar2175/likes",
											portfolio:
												"https://api.unsplash.com/users/gkumar2175/portfolio",
											following:
												"https://api.unsplash.com/users/gkumar2175/following",
											followers:
												"https://api.unsplash.com/users/gkumar2175/followers",
										},
										profile_image: {
											small:
												"https://images.unsplash.com/profile-1645546823484-5c8b0aabd4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
											medium:
												"https://images.unsplash.com/profile-1645546823484-5c8b0aabd4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
											large:
												"https://images.unsplash.com/profile-1645546823484-5c8b0aabd4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
										},
										instagram_username: "gkumar21",
										total_collections: 2,
										total_likes: 849,
										total_photos: 92,
										accepted_tos: true,
										for_hire: false,
										social: {
											instagram_username: "gkumar21",
											portfolio_url: "http://flickr.com/callmegk",
											twitter_username: null,
											paypal_email: null,
										},
									},
								},
							},
						},
						{
							type: "landing_page",
							title: "wallpaper",
							source: {
								ancestry: {
									type: {
										slug: "wallpapers",
										pretty_slug: "HD Wallpapers",
									},
								},
								title: "Hd wallpapers",
								subtitle: "Download free wallpapers",
								description:
									"Choose from the highest quality selection of high-definition wallpapers–all submitted by our talented community of contributors. Free to download and use for your mobile and desktop screens.",
								meta_title:
									"Download Free HD Wallpapers [Mobile + Desktop] | Unsplash",
								meta_description:
									"Download the best HD and Ultra HD Wallpapers for free. Use them as wallpapers for your mobile or desktop screens.",
								cover_photo: {
									id: "VEkIsvDviSs",
									slug: "VEkIsvDviSs",
									created_at: "2018-10-23T05:38:21Z",
									updated_at: "2023-06-09T07:04:17Z",
									promoted_at: "2018-10-24T13:12:35Z",
									width: 5000,
									height: 3333,
									color: "#f3c0c0",
									blur_hash: "LlLf,=%2WBax}nfhfkj[^iW.WBof",
									description:
										"Life is full of adventures. This image was created during one of my own adventures on the top of Fronalpstock in Switzerland. During the day thousands and thousands of tourists  where passing by this spot. But the last chairlift was running at 5:30pm. Suddently the place became very quiet and calm. The fog started to clear up and reveal the two peaks.  This image represents one of the most beautiful sunsets I ever saw.",
									alt_description:
										"a mountain with a pink sky above the clouds",
									urls: {
										raw: "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3",
										full: "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
										regular:
											"https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
										small:
											"https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
										thumb:
											"https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
										small_s3:
											"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1540270776932-e72e7c2d11cd",
									},
									links: {
										self: "https://api.unsplash.com/photos/VEkIsvDviSs",
										html: "https://unsplash.com/photos/VEkIsvDviSs",
										download:
											"https://unsplash.com/photos/VEkIsvDviSs/download",
										download_location:
											"https://api.unsplash.com/photos/VEkIsvDviSs/download",
									},
									likes: 1090,
									liked_by_user: false,
									current_user_collections: [],
									sponsorship: null,
									topic_submissions: {
										nature: {
											status: "approved",
											approved_on: "2020-04-06T14:20:12Z",
										},
										wallpapers: {
											status: "approved",
											approved_on: "2020-04-06T14:20:09Z",
										},
									},
									premium: false,
									plus: false,
									user: {
										id: "1oL7MvktvW4",
										updated_at: "2023-06-09T06:47:13Z",
										username: "borisbaldinger",
										name: "Boris Baldinger",
										first_name: "Boris",
										last_name: "Baldinger",
										twitter_username: "borisbaldinger",
										portfolio_url: "https://www.boris-baldinger.com",
										bio: "Father of 3 | Business photographer with a fable for nature | Speaker | Teacher | Social Media Fan",
										location: "Switzerland",
										links: {
											self: "https://api.unsplash.com/users/borisbaldinger",
											html: "https://unsplash.com/@borisbaldinger",
											photos:
												"https://api.unsplash.com/users/borisbaldinger/photos",
											likes:
												"https://api.unsplash.com/users/borisbaldinger/likes",
											portfolio:
												"https://api.unsplash.com/users/borisbaldinger/portfolio",
											following:
												"https://api.unsplash.com/users/borisbaldinger/following",
											followers:
												"https://api.unsplash.com/users/borisbaldinger/followers",
										},
										profile_image: {
											small:
												"https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
											medium:
												"https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
											large:
												"https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
										},
										instagram_username: "borisbaldinger",
										total_collections: 3,
										total_likes: 71,
										total_photos: 16,
										accepted_tos: true,
										for_hire: true,
										social: {
											instagram_username: "borisbaldinger",
											portfolio_url: "https://www.boris-baldinger.com",
											twitter_username: "borisbaldinger",
											paypal_email: null,
										},
									},
								},
							},
						},
						{
							type: "search",
							title: "outdoor",
						},
						{
							type: "search",
							title: "dune",
						},
						{
							type: "landing_page",
							title: "background",
							source: {
								ancestry: {
									type: {
										slug: "backgrounds",
										pretty_slug: "Backgrounds",
									},
								},
								title: "Hq background images",
								subtitle: "Download free backgrounds",
								description:
									"Browse our beautiful selection of free background images–all submitted by our community of talented contributors and completely free to download and use.",
								meta_title:
									"Best 100+ Free Background Images [HD] | Download your next background photo on Unsplash",
								meta_description:
									"Download the perfect background images. Find over 100+ of the best free background images. Free for commercial use ✓ No attribution required ✓ Copyright-free ✓",
								cover_photo: {
									id: "fMUIVein7Ng",
									slug: "fMUIVein7Ng",
									created_at: "2017-05-15T23:49:10Z",
									updated_at: "2023-06-12T23:01:24Z",
									promoted_at: "2017-05-16T09:06:41Z",
									width: 3847,
									height: 5583,
									color: "#c0d9d9",
									blur_hash: "LtJ@tjEyjFj[lov~Rja{-Cx]bbWC",
									description:
										"After getting many photos for a project, I am also trying to get images to share with the Unsplash community. Here’s an attempt at abstracting a detail of the amazing architecture of CCPV.",
									alt_description: "closeup photo of black and red building",
									urls: {
										raw: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3",
										full: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
										regular:
											"https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
										small:
											"https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
										thumb:
											"https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
										small_s3:
											"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1494891848038-7bd202a2afeb",
									},
									links: {
										self: "https://api.unsplash.com/photos/fMUIVein7Ng",
										html: "https://unsplash.com/photos/fMUIVein7Ng",
										download:
											"https://unsplash.com/photos/fMUIVein7Ng/download",
										download_location:
											"https://api.unsplash.com/photos/fMUIVein7Ng/download",
									},
									likes: 1873,
									liked_by_user: false,
									current_user_collections: [],
									sponsorship: null,
									topic_submissions: {
										"architecture-interior": {
											status: "approved",
											approved_on: "2020-04-06T14:20:14Z",
										},
										wallpapers: {
											status: "approved",
											approved_on: "2020-04-06T14:20:09Z",
										},
										"color-of-water": {
											status: "approved",
											approved_on: "2022-04-21T15:04:21Z",
										},
									},
									premium: false,
									plus: false,
									user: {
										id: "hnq0aaqF_Qo",
										updated_at: "2023-06-09T04:33:30Z",
										username: "scottwebb",
										name: "Scott Webb",
										first_name: "Scott",
										last_name: "Webb",
										twitter_username: null,
										portfolio_url: "https://scottwebb.me/",
										bio: "If you like my work and you'd like to support me, you can consider a donation 👉  http://www.paypal.me/scottrwebb | Donation goal for a new lens: $351.01 of $449 | Thank you Jay D. 🙏",
										location: "London, Ontario, Canada",
										links: {
											self: "https://api.unsplash.com/users/scottwebb",
											html: "https://unsplash.com/@scottwebb",
											photos: "https://api.unsplash.com/users/scottwebb/photos",
											likes: "https://api.unsplash.com/users/scottwebb/likes",
											portfolio:
												"https://api.unsplash.com/users/scottwebb/portfolio",
											following:
												"https://api.unsplash.com/users/scottwebb/following",
											followers:
												"https://api.unsplash.com/users/scottwebb/followers",
										},
										profile_image: {
											small:
												"https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
											medium:
												"https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
											large:
												"https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
										},
										instagram_username: "scottwebb",
										total_collections: 46,
										total_likes: 4152,
										total_photos: 804,
										accepted_tos: true,
										for_hire: true,
										social: {
											instagram_username: "scottwebb",
											portfolio_url: "https://scottwebb.me/",
											twitter_username: null,
											paypal_email: null,
										},
									},
								},
							},
						},
						{
							type: "search",
							title: "soil",
						},
					],
					links: {
						self: "https://api.unsplash.com/collections/BsKfcfuIheU",
						html: "https://unsplash.com/collections/BsKfcfuIheU/deserts",
						photos: "https://api.unsplash.com/collections/BsKfcfuIheU/photos",
						related: "https://api.unsplash.com/collections/BsKfcfuIheU/related",
					},
				},
			],
			sponsorship: null,
			topic_submissions: {},
			user: {
				id: "lMRnIkwLCic",
				updated_at: "2023-06-09T06:31:57Z",
				username: "shot_by_teo",
				name: "Matteo Di Iorio",
				first_name: "Matteo",
				last_name: "Di Iorio",
				twitter_username: null,
				portfolio_url: "http://www.matteodiiorio.com",
				bio: "Graphic designer from Italy, based in London. For more pictures check out Instagram: https://www.instagram.com/teooetph/",
				location: "London",
				links: {
					self: "https://api.unsplash.com/users/shot_by_teo",
					html: "https://unsplash.com/@shot_by_teo",
					photos: "https://api.unsplash.com/users/shot_by_teo/photos",
					likes: "https://api.unsplash.com/users/shot_by_teo/likes",
					portfolio: "https://api.unsplash.com/users/shot_by_teo/portfolio",
					following: "https://api.unsplash.com/users/shot_by_teo/following",
					followers: "https://api.unsplash.com/users/shot_by_teo/followers",
				},
				profile_image: {
					small:
						"https://images.unsplash.com/profile-1557933671328-295e649f6e72?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
					medium:
						"https://images.unsplash.com/profile-1557933671328-295e649f6e72?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
					large:
						"https://images.unsplash.com/profile-1557933671328-295e649f6e72?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
				},
				instagram_username: "shot_by_teooet",
				total_collections: 10,
				total_likes: 16,
				total_photos: 51,
				accepted_tos: true,
				for_hire: false,
				social: {
					instagram_username: "shot_by_teooet",
					portfolio_url: "http://www.matteodiiorio.com",
					twitter_username: null,
					paypal_email: null,
				},
			},
		},
		{
			id: "PP8Escz15d8",
			slug: "PP8Escz15d8",
			created_at: "2017-02-27T12:05:10Z",
			updated_at: "2023-06-17T17:01:13Z",
			promoted_at: "2021-06-19T10:18:02Z",
			width: 3872,
			height: 2592,
			color: "#d9d9d9",
			blur_hash: "LlL47:NGaxWC*0WBj?j[x^j@R*oL",
			description:
				"I was in Namibia directing a professional stills and video crew for a commercial commission. Tracks can take months to be erased by the wind so we had to trek for miles around potential scenes so no to disturb the pristine sand dunes.",
			alt_description: "desert under clear blue sky during daytime",
			urls: {
				raw: "https://images.unsplash.com/photo-1488197047962-b48492212cda?ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258M3xCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3",
				full: "https://images.unsplash.com/photo-1488197047962-b48492212cda?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258M3xCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3&q=85",
				regular:
					"https://images.unsplash.com/photo-1488197047962-b48492212cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258M3xCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3&q=80&w=1080",
				small:
					"https://images.unsplash.com/photo-1488197047962-b48492212cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258M3xCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3&q=80&w=400",
				thumb:
					"https://images.unsplash.com/photo-1488197047962-b48492212cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258M3xCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3&q=80&w=200",
				small_s3:
					"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1488197047962-b48492212cda",
			},
			links: {
				self: "https://api.unsplash.com/photos/PP8Escz15d8",
				html: "https://unsplash.com/photos/PP8Escz15d8",
				download:
					"https://unsplash.com/photos/PP8Escz15d8/download?ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258M3xCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw",
				download_location:
					"https://api.unsplash.com/photos/PP8Escz15d8/download?ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258M3xCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw",
			},
			likes: 2407,
			liked_by_user: false,
			current_user_collections: [
				{
					id: "BsKfcfuIheU",
					title: "deserts",
					description: null,
					published_at: "2023-02-21T12:01:07Z",
					last_collected_at: "2023-02-21T12:01:53Z",
					updated_at: "2023-02-21T12:01:53Z",
					curated: false,
					featured: false,
					total_photos: 4,
					private: false,
					share_key: "1a8d85aaa200483e82860518a6b9c20c",
					tags: [
						{
							type: "landing_page",
							title: "desert",
							source: {
								ancestry: {
									type: {
										slug: "images",
										pretty_slug: "Images",
									},
									category: {
										slug: "nature",
										pretty_slug: "Nature",
									},
									subcategory: {
										slug: "desert",
										pretty_slug: "Desert",
									},
								},
								title: "Desert images",
								subtitle: "Download free desert images",
								description:
									"Choose from a curated selection of desert photos. Always free on Unsplash.",
								meta_title:
									"20+ Free Desert Pictures & Stock Photos on Unsplash",
								meta_description:
									"Choose from hundreds of free desert pictures. Download HD desert photos for free on Unsplash.",
								cover_photo: {
									id: "L75D18aVal8",
									slug: "L75D18aVal8",
									created_at: "2017-10-29T22:41:48Z",
									updated_at: "2023-06-11T12:02:10Z",
									promoted_at: null,
									width: 4928,
									height: 3264,
									color: "#a6c0c0",
									blur_hash: "LsG[sURjRPayLNWBn$ayElofozoJ",
									description:
										"Walking down the Wildcat trail in Monument Valley opens up this magnificent view to everyone. Amazing weather and good light helped us with this picture.",
									alt_description: "landscape photography of rock formation",
									urls: {
										raw: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3",
										full: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
										regular:
											"https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
										small:
											"https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
										thumb:
											"https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
										small_s3:
											"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1509316785289-025f5b846b35",
									},
									links: {
										self: "https://api.unsplash.com/photos/L75D18aVal8",
										html: "https://unsplash.com/photos/L75D18aVal8",
										download:
											"https://unsplash.com/photos/L75D18aVal8/download",
										download_location:
											"https://api.unsplash.com/photos/L75D18aVal8/download",
									},
									likes: 1184,
									liked_by_user: false,
									current_user_collections: [],
									sponsorship: null,
									topic_submissions: {},
									premium: false,
									plus: false,
									user: {
										id: "ShDq6xH5EIw",
										updated_at: "2023-06-09T17:14:48Z",
										username: "gkumar2175",
										name: "Ganapathy Kumar",
										first_name: "Ganapathy",
										last_name: "Kumar",
										twitter_username: null,
										portfolio_url: "http://flickr.com/callmegk",
										bio: "Optics Engineer based out of Albuquerque, New Mexico. Obsessed with clouds, golden rays illuminating the green, the dark night sky, city skylines and landscapes. ",
										location: "Albuquerque, NM",
										links: {
											self: "https://api.unsplash.com/users/gkumar2175",
											html: "https://unsplash.com/@gkumar2175",
											photos:
												"https://api.unsplash.com/users/gkumar2175/photos",
											likes: "https://api.unsplash.com/users/gkumar2175/likes",
											portfolio:
												"https://api.unsplash.com/users/gkumar2175/portfolio",
											following:
												"https://api.unsplash.com/users/gkumar2175/following",
											followers:
												"https://api.unsplash.com/users/gkumar2175/followers",
										},
										profile_image: {
											small:
												"https://images.unsplash.com/profile-1645546823484-5c8b0aabd4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
											medium:
												"https://images.unsplash.com/profile-1645546823484-5c8b0aabd4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
											large:
												"https://images.unsplash.com/profile-1645546823484-5c8b0aabd4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
										},
										instagram_username: "gkumar21",
										total_collections: 2,
										total_likes: 849,
										total_photos: 92,
										accepted_tos: true,
										for_hire: false,
										social: {
											instagram_username: "gkumar21",
											portfolio_url: "http://flickr.com/callmegk",
											twitter_username: null,
											paypal_email: null,
										},
									},
								},
							},
						},
						{
							type: "landing_page",
							title: "wallpaper",
							source: {
								ancestry: {
									type: {
										slug: "wallpapers",
										pretty_slug: "HD Wallpapers",
									},
								},
								title: "Hd wallpapers",
								subtitle: "Download free wallpapers",
								description:
									"Choose from the highest quality selection of high-definition wallpapers–all submitted by our talented community of contributors. Free to download and use for your mobile and desktop screens.",
								meta_title:
									"Download Free HD Wallpapers [Mobile + Desktop] | Unsplash",
								meta_description:
									"Download the best HD and Ultra HD Wallpapers for free. Use them as wallpapers for your mobile or desktop screens.",
								cover_photo: {
									id: "VEkIsvDviSs",
									slug: "VEkIsvDviSs",
									created_at: "2018-10-23T05:38:21Z",
									updated_at: "2023-06-09T07:04:17Z",
									promoted_at: "2018-10-24T13:12:35Z",
									width: 5000,
									height: 3333,
									color: "#f3c0c0",
									blur_hash: "LlLf,=%2WBax}nfhfkj[^iW.WBof",
									description:
										"Life is full of adventures. This image was created during one of my own adventures on the top of Fronalpstock in Switzerland. During the day thousands and thousands of tourists  where passing by this spot. But the last chairlift was running at 5:30pm. Suddently the place became very quiet and calm. The fog started to clear up and reveal the two peaks.  This image represents one of the most beautiful sunsets I ever saw.",
									alt_description:
										"a mountain with a pink sky above the clouds",
									urls: {
										raw: "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3",
										full: "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
										regular:
											"https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
										small:
											"https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
										thumb:
											"https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
										small_s3:
											"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1540270776932-e72e7c2d11cd",
									},
									links: {
										self: "https://api.unsplash.com/photos/VEkIsvDviSs",
										html: "https://unsplash.com/photos/VEkIsvDviSs",
										download:
											"https://unsplash.com/photos/VEkIsvDviSs/download",
										download_location:
											"https://api.unsplash.com/photos/VEkIsvDviSs/download",
									},
									likes: 1090,
									liked_by_user: false,
									current_user_collections: [],
									sponsorship: null,
									topic_submissions: {
										nature: {
											status: "approved",
											approved_on: "2020-04-06T14:20:12Z",
										},
										wallpapers: {
											status: "approved",
											approved_on: "2020-04-06T14:20:09Z",
										},
									},
									premium: false,
									plus: false,
									user: {
										id: "1oL7MvktvW4",
										updated_at: "2023-06-09T06:47:13Z",
										username: "borisbaldinger",
										name: "Boris Baldinger",
										first_name: "Boris",
										last_name: "Baldinger",
										twitter_username: "borisbaldinger",
										portfolio_url: "https://www.boris-baldinger.com",
										bio: "Father of 3 | Business photographer with a fable for nature | Speaker | Teacher | Social Media Fan",
										location: "Switzerland",
										links: {
											self: "https://api.unsplash.com/users/borisbaldinger",
											html: "https://unsplash.com/@borisbaldinger",
											photos:
												"https://api.unsplash.com/users/borisbaldinger/photos",
											likes:
												"https://api.unsplash.com/users/borisbaldinger/likes",
											portfolio:
												"https://api.unsplash.com/users/borisbaldinger/portfolio",
											following:
												"https://api.unsplash.com/users/borisbaldinger/following",
											followers:
												"https://api.unsplash.com/users/borisbaldinger/followers",
										},
										profile_image: {
											small:
												"https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
											medium:
												"https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
											large:
												"https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
										},
										instagram_username: "borisbaldinger",
										total_collections: 3,
										total_likes: 71,
										total_photos: 16,
										accepted_tos: true,
										for_hire: true,
										social: {
											instagram_username: "borisbaldinger",
											portfolio_url: "https://www.boris-baldinger.com",
											twitter_username: "borisbaldinger",
											paypal_email: null,
										},
									},
								},
							},
						},
						{
							type: "search",
							title: "outdoor",
						},
						{
							type: "search",
							title: "dune",
						},
						{
							type: "landing_page",
							title: "background",
							source: {
								ancestry: {
									type: {
										slug: "backgrounds",
										pretty_slug: "Backgrounds",
									},
								},
								title: "Hq background images",
								subtitle: "Download free backgrounds",
								description:
									"Browse our beautiful selection of free background images–all submitted by our community of talented contributors and completely free to download and use.",
								meta_title:
									"Best 100+ Free Background Images [HD] | Download your next background photo on Unsplash",
								meta_description:
									"Download the perfect background images. Find over 100+ of the best free background images. Free for commercial use ✓ No attribution required ✓ Copyright-free ✓",
								cover_photo: {
									id: "fMUIVein7Ng",
									slug: "fMUIVein7Ng",
									created_at: "2017-05-15T23:49:10Z",
									updated_at: "2023-06-12T23:01:24Z",
									promoted_at: "2017-05-16T09:06:41Z",
									width: 3847,
									height: 5583,
									color: "#c0d9d9",
									blur_hash: "LtJ@tjEyjFj[lov~Rja{-Cx]bbWC",
									description:
										"After getting many photos for a project, I am also trying to get images to share with the Unsplash community. Here’s an attempt at abstracting a detail of the amazing architecture of CCPV.",
									alt_description: "closeup photo of black and red building",
									urls: {
										raw: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3",
										full: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
										regular:
											"https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
										small:
											"https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
										thumb:
											"https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
										small_s3:
											"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1494891848038-7bd202a2afeb",
									},
									links: {
										self: "https://api.unsplash.com/photos/fMUIVein7Ng",
										html: "https://unsplash.com/photos/fMUIVein7Ng",
										download:
											"https://unsplash.com/photos/fMUIVein7Ng/download",
										download_location:
											"https://api.unsplash.com/photos/fMUIVein7Ng/download",
									},
									likes: 1873,
									liked_by_user: false,
									current_user_collections: [],
									sponsorship: null,
									topic_submissions: {
										"architecture-interior": {
											status: "approved",
											approved_on: "2020-04-06T14:20:14Z",
										},
										wallpapers: {
											status: "approved",
											approved_on: "2020-04-06T14:20:09Z",
										},
										"color-of-water": {
											status: "approved",
											approved_on: "2022-04-21T15:04:21Z",
										},
									},
									premium: false,
									plus: false,
									user: {
										id: "hnq0aaqF_Qo",
										updated_at: "2023-06-09T04:33:30Z",
										username: "scottwebb",
										name: "Scott Webb",
										first_name: "Scott",
										last_name: "Webb",
										twitter_username: null,
										portfolio_url: "https://scottwebb.me/",
										bio: "If you like my work and you'd like to support me, you can consider a donation 👉  http://www.paypal.me/scottrwebb | Donation goal for a new lens: $351.01 of $449 | Thank you Jay D. 🙏",
										location: "London, Ontario, Canada",
										links: {
											self: "https://api.unsplash.com/users/scottwebb",
											html: "https://unsplash.com/@scottwebb",
											photos: "https://api.unsplash.com/users/scottwebb/photos",
											likes: "https://api.unsplash.com/users/scottwebb/likes",
											portfolio:
												"https://api.unsplash.com/users/scottwebb/portfolio",
											following:
												"https://api.unsplash.com/users/scottwebb/following",
											followers:
												"https://api.unsplash.com/users/scottwebb/followers",
										},
										profile_image: {
											small:
												"https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
											medium:
												"https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
											large:
												"https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
										},
										instagram_username: "scottwebb",
										total_collections: 46,
										total_likes: 4152,
										total_photos: 804,
										accepted_tos: true,
										for_hire: true,
										social: {
											instagram_username: "scottwebb",
											portfolio_url: "https://scottwebb.me/",
											twitter_username: null,
											paypal_email: null,
										},
									},
								},
							},
						},
						{
							type: "search",
							title: "soil",
						},
					],
					links: {
						self: "https://api.unsplash.com/collections/BsKfcfuIheU",
						html: "https://unsplash.com/collections/BsKfcfuIheU/deserts",
						photos: "https://api.unsplash.com/collections/BsKfcfuIheU/photos",
						related: "https://api.unsplash.com/collections/BsKfcfuIheU/related",
					},
				},
			],
			sponsorship: null,
			topic_submissions: {},
			user: {
				id: "k53yNbQhG-s",
				updated_at: "2023-06-16T14:27:46Z",
				username: "keithhardy2001",
				name: "Keith Hardy",
				first_name: "Keith",
				last_name: "Hardy",
				twitter_username: null,
				portfolio_url: "https://www.keith-hardy.co.uk",
				bio: "Professional art director and photo hobbyist",
				location: "London",
				links: {
					self: "https://api.unsplash.com/users/keithhardy2001",
					html: "https://unsplash.com/@keithhardy2001",
					photos: "https://api.unsplash.com/users/keithhardy2001/photos",
					likes: "https://api.unsplash.com/users/keithhardy2001/likes",
					portfolio: "https://api.unsplash.com/users/keithhardy2001/portfolio",
					following: "https://api.unsplash.com/users/keithhardy2001/following",
					followers: "https://api.unsplash.com/users/keithhardy2001/followers",
				},
				profile_image: {
					small:
						"https://images.unsplash.com/profile-fb-1487793365-2a575b3d1dbb.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
					medium:
						"https://images.unsplash.com/profile-fb-1487793365-2a575b3d1dbb.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
					large:
						"https://images.unsplash.com/profile-fb-1487793365-2a575b3d1dbb.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
				},
				instagram_username: "keith_hardy_2001",
				total_collections: 33,
				total_likes: 132,
				total_photos: 29,
				accepted_tos: true,
				for_hire: false,
				social: {
					instagram_username: "keith_hardy_2001",
					portfolio_url: "https://www.keith-hardy.co.uk",
					twitter_username: null,
					paypal_email: null,
				},
			},
		},
		{
			id: "Xc6gtOwSMSA",
			slug: "Xc6gtOwSMSA",
			created_at: "2017-11-28T09:21:40Z",
			updated_at: "2023-06-18T02:02:28Z",
			promoted_at: "2017-11-29T19:12:06Z",
			width: 2592,
			height: 3888,
			color: "#f38c40",
			blur_hash: "LyIg.xWBSiofT}j]jtfk58ofr=ay",
			description: null,
			alt_description: "desert photography during daytime",
			urls: {
				raw: "https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258NHxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3",
				full: "https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258NHxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3&q=85",
				regular:
					"https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258NHxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3&q=80&w=1080",
				small:
					"https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258NHxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3&q=80&w=400",
				thumb:
					"https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258NHxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw&ixlib=rb-4.0.3&q=80&w=200",
				small_s3:
					"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1511860810434-a92f84c6f01e",
			},
			links: {
				self: "https://api.unsplash.com/photos/Xc6gtOwSMSA",
				html: "https://unsplash.com/photos/Xc6gtOwSMSA",
				download:
					"https://unsplash.com/photos/Xc6gtOwSMSA/download?ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258NHxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw",
				download_location:
					"https://api.unsplash.com/photos/Xc6gtOwSMSA/download?ixid=M3w0MDEwNzZ8MHwxfGNvbGxlY3Rpb258NHxCc0tmY2Z1SWhlVXx8fHx8Mnx8MTY4NzA4NTg3MXw",
			},
			likes: 2877,
			liked_by_user: false,
			current_user_collections: [
				{
					id: "BsKfcfuIheU",
					title: "deserts",
					description: null,
					published_at: "2023-02-21T12:01:07Z",
					last_collected_at: "2023-02-21T12:01:53Z",
					updated_at: "2023-02-21T12:01:53Z",
					curated: false,
					featured: false,
					total_photos: 4,
					private: false,
					share_key: "1a8d85aaa200483e82860518a6b9c20c",
					tags: [
						{
							type: "landing_page",
							title: "desert",
							source: {
								ancestry: {
									type: {
										slug: "images",
										pretty_slug: "Images",
									},
									category: {
										slug: "nature",
										pretty_slug: "Nature",
									},
									subcategory: {
										slug: "desert",
										pretty_slug: "Desert",
									},
								},
								title: "Desert images",
								subtitle: "Download free desert images",
								description:
									"Choose from a curated selection of desert photos. Always free on Unsplash.",
								meta_title:
									"20+ Free Desert Pictures & Stock Photos on Unsplash",
								meta_description:
									"Choose from hundreds of free desert pictures. Download HD desert photos for free on Unsplash.",
								cover_photo: {
									id: "L75D18aVal8",
									slug: "L75D18aVal8",
									created_at: "2017-10-29T22:41:48Z",
									updated_at: "2023-06-11T12:02:10Z",
									promoted_at: null,
									width: 4928,
									height: 3264,
									color: "#a6c0c0",
									blur_hash: "LsG[sURjRPayLNWBn$ayElofozoJ",
									description:
										"Walking down the Wildcat trail in Monument Valley opens up this magnificent view to everyone. Amazing weather and good light helped us with this picture.",
									alt_description: "landscape photography of rock formation",
									urls: {
										raw: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3",
										full: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
										regular:
											"https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
										small:
											"https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
										thumb:
											"https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
										small_s3:
											"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1509316785289-025f5b846b35",
									},
									links: {
										self: "https://api.unsplash.com/photos/L75D18aVal8",
										html: "https://unsplash.com/photos/L75D18aVal8",
										download:
											"https://unsplash.com/photos/L75D18aVal8/download",
										download_location:
											"https://api.unsplash.com/photos/L75D18aVal8/download",
									},
									likes: 1184,
									liked_by_user: false,
									current_user_collections: [],
									sponsorship: null,
									topic_submissions: {},
									premium: false,
									plus: false,
									user: {
										id: "ShDq6xH5EIw",
										updated_at: "2023-06-09T17:14:48Z",
										username: "gkumar2175",
										name: "Ganapathy Kumar",
										first_name: "Ganapathy",
										last_name: "Kumar",
										twitter_username: null,
										portfolio_url: "http://flickr.com/callmegk",
										bio: "Optics Engineer based out of Albuquerque, New Mexico. Obsessed with clouds, golden rays illuminating the green, the dark night sky, city skylines and landscapes. ",
										location: "Albuquerque, NM",
										links: {
											self: "https://api.unsplash.com/users/gkumar2175",
											html: "https://unsplash.com/@gkumar2175",
											photos:
												"https://api.unsplash.com/users/gkumar2175/photos",
											likes: "https://api.unsplash.com/users/gkumar2175/likes",
											portfolio:
												"https://api.unsplash.com/users/gkumar2175/portfolio",
											following:
												"https://api.unsplash.com/users/gkumar2175/following",
											followers:
												"https://api.unsplash.com/users/gkumar2175/followers",
										},
										profile_image: {
											small:
												"https://images.unsplash.com/profile-1645546823484-5c8b0aabd4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
											medium:
												"https://images.unsplash.com/profile-1645546823484-5c8b0aabd4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
											large:
												"https://images.unsplash.com/profile-1645546823484-5c8b0aabd4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
										},
										instagram_username: "gkumar21",
										total_collections: 2,
										total_likes: 849,
										total_photos: 92,
										accepted_tos: true,
										for_hire: false,
										social: {
											instagram_username: "gkumar21",
											portfolio_url: "http://flickr.com/callmegk",
											twitter_username: null,
											paypal_email: null,
										},
									},
								},
							},
						},
						{
							type: "landing_page",
							title: "wallpaper",
							source: {
								ancestry: {
									type: {
										slug: "wallpapers",
										pretty_slug: "HD Wallpapers",
									},
								},
								title: "Hd wallpapers",
								subtitle: "Download free wallpapers",
								description:
									"Choose from the highest quality selection of high-definition wallpapers–all submitted by our talented community of contributors. Free to download and use for your mobile and desktop screens.",
								meta_title:
									"Download Free HD Wallpapers [Mobile + Desktop] | Unsplash",
								meta_description:
									"Download the best HD and Ultra HD Wallpapers for free. Use them as wallpapers for your mobile or desktop screens.",
								cover_photo: {
									id: "VEkIsvDviSs",
									slug: "VEkIsvDviSs",
									created_at: "2018-10-23T05:38:21Z",
									updated_at: "2023-06-09T07:04:17Z",
									promoted_at: "2018-10-24T13:12:35Z",
									width: 5000,
									height: 3333,
									color: "#f3c0c0",
									blur_hash: "LlLf,=%2WBax}nfhfkj[^iW.WBof",
									description:
										"Life is full of adventures. This image was created during one of my own adventures on the top of Fronalpstock in Switzerland. During the day thousands and thousands of tourists  where passing by this spot. But the last chairlift was running at 5:30pm. Suddently the place became very quiet and calm. The fog started to clear up and reveal the two peaks.  This image represents one of the most beautiful sunsets I ever saw.",
									alt_description:
										"a mountain with a pink sky above the clouds",
									urls: {
										raw: "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3",
										full: "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
										regular:
											"https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
										small:
											"https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
										thumb:
											"https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
										small_s3:
											"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1540270776932-e72e7c2d11cd",
									},
									links: {
										self: "https://api.unsplash.com/photos/VEkIsvDviSs",
										html: "https://unsplash.com/photos/VEkIsvDviSs",
										download:
											"https://unsplash.com/photos/VEkIsvDviSs/download",
										download_location:
											"https://api.unsplash.com/photos/VEkIsvDviSs/download",
									},
									likes: 1090,
									liked_by_user: false,
									current_user_collections: [],
									sponsorship: null,
									topic_submissions: {
										nature: {
											status: "approved",
											approved_on: "2020-04-06T14:20:12Z",
										},
										wallpapers: {
											status: "approved",
											approved_on: "2020-04-06T14:20:09Z",
										},
									},
									premium: false,
									plus: false,
									user: {
										id: "1oL7MvktvW4",
										updated_at: "2023-06-09T06:47:13Z",
										username: "borisbaldinger",
										name: "Boris Baldinger",
										first_name: "Boris",
										last_name: "Baldinger",
										twitter_username: "borisbaldinger",
										portfolio_url: "https://www.boris-baldinger.com",
										bio: "Father of 3 | Business photographer with a fable for nature | Speaker | Teacher | Social Media Fan",
										location: "Switzerland",
										links: {
											self: "https://api.unsplash.com/users/borisbaldinger",
											html: "https://unsplash.com/@borisbaldinger",
											photos:
												"https://api.unsplash.com/users/borisbaldinger/photos",
											likes:
												"https://api.unsplash.com/users/borisbaldinger/likes",
											portfolio:
												"https://api.unsplash.com/users/borisbaldinger/portfolio",
											following:
												"https://api.unsplash.com/users/borisbaldinger/following",
											followers:
												"https://api.unsplash.com/users/borisbaldinger/followers",
										},
										profile_image: {
											small:
												"https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
											medium:
												"https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
											large:
												"https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
										},
										instagram_username: "borisbaldinger",
										total_collections: 3,
										total_likes: 71,
										total_photos: 16,
										accepted_tos: true,
										for_hire: true,
										social: {
											instagram_username: "borisbaldinger",
											portfolio_url: "https://www.boris-baldinger.com",
											twitter_username: "borisbaldinger",
											paypal_email: null,
										},
									},
								},
							},
						},
						{
							type: "search",
							title: "outdoor",
						},
						{
							type: "search",
							title: "dune",
						},
						{
							type: "landing_page",
							title: "background",
							source: {
								ancestry: {
									type: {
										slug: "backgrounds",
										pretty_slug: "Backgrounds",
									},
								},
								title: "Hq background images",
								subtitle: "Download free backgrounds",
								description:
									"Browse our beautiful selection of free background images–all submitted by our community of talented contributors and completely free to download and use.",
								meta_title:
									"Best 100+ Free Background Images [HD] | Download your next background photo on Unsplash",
								meta_description:
									"Download the perfect background images. Find over 100+ of the best free background images. Free for commercial use ✓ No attribution required ✓ Copyright-free ✓",
								cover_photo: {
									id: "fMUIVein7Ng",
									slug: "fMUIVein7Ng",
									created_at: "2017-05-15T23:49:10Z",
									updated_at: "2023-06-12T23:01:24Z",
									promoted_at: "2017-05-16T09:06:41Z",
									width: 3847,
									height: 5583,
									color: "#c0d9d9",
									blur_hash: "LtJ@tjEyjFj[lov~Rja{-Cx]bbWC",
									description:
										"After getting many photos for a project, I am also trying to get images to share with the Unsplash community. Here’s an attempt at abstracting a detail of the amazing architecture of CCPV.",
									alt_description: "closeup photo of black and red building",
									urls: {
										raw: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3",
										full: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
										regular:
											"https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
										small:
											"https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
										thumb:
											"https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
										small_s3:
											"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1494891848038-7bd202a2afeb",
									},
									links: {
										self: "https://api.unsplash.com/photos/fMUIVein7Ng",
										html: "https://unsplash.com/photos/fMUIVein7Ng",
										download:
											"https://unsplash.com/photos/fMUIVein7Ng/download",
										download_location:
											"https://api.unsplash.com/photos/fMUIVein7Ng/download",
									},
									likes: 1873,
									liked_by_user: false,
									current_user_collections: [],
									sponsorship: null,
									topic_submissions: {
										"architecture-interior": {
											status: "approved",
											approved_on: "2020-04-06T14:20:14Z",
										},
										wallpapers: {
											status: "approved",
											approved_on: "2020-04-06T14:20:09Z",
										},
										"color-of-water": {
											status: "approved",
											approved_on: "2022-04-21T15:04:21Z",
										},
									},
									premium: false,
									plus: false,
									user: {
										id: "hnq0aaqF_Qo",
										updated_at: "2023-06-09T04:33:30Z",
										username: "scottwebb",
										name: "Scott Webb",
										first_name: "Scott",
										last_name: "Webb",
										twitter_username: null,
										portfolio_url: "https://scottwebb.me/",
										bio: "If you like my work and you'd like to support me, you can consider a donation 👉  http://www.paypal.me/scottrwebb | Donation goal for a new lens: $351.01 of $449 | Thank you Jay D. 🙏",
										location: "London, Ontario, Canada",
										links: {
											self: "https://api.unsplash.com/users/scottwebb",
											html: "https://unsplash.com/@scottwebb",
											photos: "https://api.unsplash.com/users/scottwebb/photos",
											likes: "https://api.unsplash.com/users/scottwebb/likes",
											portfolio:
												"https://api.unsplash.com/users/scottwebb/portfolio",
											following:
												"https://api.unsplash.com/users/scottwebb/following",
											followers:
												"https://api.unsplash.com/users/scottwebb/followers",
										},
										profile_image: {
											small:
												"https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
											medium:
												"https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
											large:
												"https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
										},
										instagram_username: "scottwebb",
										total_collections: 46,
										total_likes: 4152,
										total_photos: 804,
										accepted_tos: true,
										for_hire: true,
										social: {
											instagram_username: "scottwebb",
											portfolio_url: "https://scottwebb.me/",
											twitter_username: null,
											paypal_email: null,
										},
									},
								},
							},
						},
						{
							type: "search",
							title: "soil",
						},
					],
					links: {
						self: "https://api.unsplash.com/collections/BsKfcfuIheU",
						html: "https://unsplash.com/collections/BsKfcfuIheU/deserts",
						photos: "https://api.unsplash.com/collections/BsKfcfuIheU/photos",
						related: "https://api.unsplash.com/collections/BsKfcfuIheU/related",
					},
				},
			],
			sponsorship: null,
			topic_submissions: {
				nature: {
					status: "approved",
					approved_on: "2021-06-03T10:37:05Z",
				},
				wallpapers: {
					status: "approved",
					approved_on: "2021-03-15T14:20:09Z",
				},
			},
			user: {
				id: "2gDI9-Q1QEw",
				updated_at: "2023-06-09T10:50:38Z",
				username: "ferparmur",
				name: "Fernando Paredes Murillo",
				first_name: "Fernando",
				last_name: "Paredes Murillo",
				twitter_username: "ferparmur",
				portfolio_url: "https://fparedes.com/",
				bio: null,
				location: "London, UK",
				links: {
					self: "https://api.unsplash.com/users/ferparmur",
					html: "https://unsplash.com/@ferparmur",
					photos: "https://api.unsplash.com/users/ferparmur/photos",
					likes: "https://api.unsplash.com/users/ferparmur/likes",
					portfolio: "https://api.unsplash.com/users/ferparmur/portfolio",
					following: "https://api.unsplash.com/users/ferparmur/following",
					followers: "https://api.unsplash.com/users/ferparmur/followers",
				},
				profile_image: {
					small:
						"https://images.unsplash.com/profile-1500978293425-48286454fdbd?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
					medium:
						"https://images.unsplash.com/profile-1500978293425-48286454fdbd?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
					large:
						"https://images.unsplash.com/profile-1500978293425-48286454fdbd?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
				},
				instagram_username: "ferparmur",
				total_collections: 0,
				total_likes: 1,
				total_photos: 7,
				accepted_tos: true,
				for_hire: false,
				social: {
					instagram_username: "ferparmur",
					portfolio_url: "https://fparedes.com/",
					twitter_username: "ferparmur",
					paypal_email: null,
				},
			},
		},
	];

	return (
		<div className='collection' {...props}>
			{dataCollectionPhotos?.map((item, i) => {
				return (
					<div
						className='collection__frame'
						style={{
							backgroundColor: item?.color,
							gridRowEnd: `span ${item?.height / 100}`,
						}}
					>
						<Link to={`/frame/${item?.id}`} className='collection__link'>
							<Image
								src={item?.urls?.regular}
								className='collection__img'
							></Image>
						</Link>
					</div>
				);
			})}
		</div>
	);
}
