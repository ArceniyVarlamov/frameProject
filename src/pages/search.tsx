import Main from "../components/structure/Main";
import Header from "../components/structure/Header";
import { useSearchParams } from "react-router-dom";
import useRegisterUnsplash from "../utils/registration/useRegisterUnsplash";
import Loading from "../components/functional/Loading";
import useAccountInfo from "../utils/info/useAccountStoreInfo";
import { useCallback, useEffect, useState } from "react";
import useCheckRegister from "./../utils/registration/useCheckRegister";
import { useDispatch } from "react-redux";
import { addFramesRedirect } from "../store/framesSlice";
import useFetchByScroll from "../hooks/functions/useFetchByScroll";
import useFramesList from "../hooks/get/useFramesList";
import useVariablesStoreInfo from "../utils/info/useVariablesStoreInfo";
import useCountResize from "../hooks/functions/useCountResize";
import useSearchPhotos from "../hooks/get/useSearchPhotos";
import useCheckIsRegistered from "../hooks/functions/useCheckIsRegistered";
import useSearchCollections from "../hooks/get/useSearchCollections";
import useSearchFrames from "../hooks/get/useSearchPhotos";
import SearchParams from "./../components/structure/SearchParams";
import Collections from "../components/structure/Collections";
import { ISearchCollections } from "../interface";
import useSearchUsers from "../hooks/get/useSearchUsers";

export default function SearchPage() {
	const [active, setActive] = useState("users");

	const [searchParams] = useSearchParams();

	const { framesMainWidth, framesCollectionsWidth } = useVariablesStoreInfo();

	//TODO Сделать возможность обнуления счётчика, то есть для каждого хука будет свой useState
	const { dataLoaded, setDataLoaded } = useFetchByScroll();
	// useCheckIsRegistered();

	const { colNum: colFramesNum, lineNum: lineFramesNum } =
		useCountResize(framesMainWidth);
	const { colNum: colCollectionNum, lineNum: lineCollectionNum } =
		useCountResize(framesCollectionsWidth * 1.8);

	const { frames, load: framesLoad } = useSearchFrames({
		page: dataLoaded,
		perLoad: colFramesNum * lineFramesNum,
		q: searchParams.get("q"),
		post: active === "photos",
	});

	const { collections, load: collectionsLoad } = useSearchCollections({
		page: dataLoaded,
		perLoad: colCollectionNum * lineCollectionNum,
		q: searchParams.get("q"),
		post: active === "collections",
	});

	// const { users, load: usersLoad } = useSearchUsers({
	// 	page: dataLoaded,
	// 	perLoad: 6,
	// 	q: searchParams.get("q"),
	// 	post: active === "users",
	// });

	const users = {
		total: 579,
		total_pages: 97,
		results: [
			{
				id: "WtBLj04_s18",
				updated_at: "2023-03-29T01:20:58Z",
				username: "nomatterusername",
				name: "User",
				first_name: "User",
				last_name: null,
				twitter_username: null,
				portfolio_url: null,
				bio: null,
				location: null,
				links: {
					self: "https://api.unsplash.com/users/nomatterusername",
					html: "https://unsplash.com/@nomatterusername",
					photos: "https://api.unsplash.com/users/nomatterusername/photos",
					likes: "https://api.unsplash.com/users/nomatterusername/likes",
					portfolio:
						"https://api.unsplash.com/users/nomatterusername/portfolio",
					following:
						"https://api.unsplash.com/users/nomatterusername/following",
					followers:
						"https://api.unsplash.com/users/nomatterusername/followers",
				},
				profile_image: {
					small:
						"https://images.unsplash.com/profile-1667813367880-34470d08af1eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
					medium:
						"https://images.unsplash.com/profile-1667813367880-34470d08af1eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
					large:
						"https://images.unsplash.com/profile-1667813367880-34470d08af1eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
				},
				instagram_username: null,
				total_collections: 0,
				total_likes: 0,
				total_photos: 31,
				accepted_tos: true,
				for_hire: true,
				social: {
					instagram_username: null,
					portfolio_url: null,
					twitter_username: null,
					paypal_email: null,
				},
				followed_by_user: false,
				photos: [
					{
						id: "apQxGrDh2eI",
						slug: "apQxGrDh2eI",
						created_at: "2019-10-20T16:26:47Z",
						updated_at: "2023-07-22T04:09:00Z",
						blur_hash: "LZI$KUo#R-WBX=aeogW=.9j@f+WB",
						urls: {
							raw: "https://images.unsplash.com/photo-1571588795615-939361a5b64e?ixlib=rb-4.0.3",
							full: "https://images.unsplash.com/photo-1571588795615-939361a5b64e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
							regular:
								"https://images.unsplash.com/photo-1571588795615-939361a5b64e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
							small:
								"https://images.unsplash.com/photo-1571588795615-939361a5b64e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
							thumb:
								"https://images.unsplash.com/photo-1571588795615-939361a5b64e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
							small_s3:
								"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1571588795615-939361a5b64e",
						},
					},
					{
						id: "6Zy2vL4g4GI",
						slug: "6Zy2vL4g4GI",
						created_at: "2019-07-29T04:50:21Z",
						updated_at: "2023-07-21T20:08:26Z",
						blur_hash: "LxGJ{foJJDW=YRoJXAj[IpayaKWB",
						urls: {
							raw: "https://images.unsplash.com/photo-1564375775672-fb4510d0e47c?ixlib=rb-4.0.3",
							full: "https://images.unsplash.com/photo-1564375775672-fb4510d0e47c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
							regular:
								"https://images.unsplash.com/photo-1564375775672-fb4510d0e47c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
							small:
								"https://images.unsplash.com/photo-1564375775672-fb4510d0e47c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
							thumb:
								"https://images.unsplash.com/photo-1564375775672-fb4510d0e47c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
							small_s3:
								"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1564375775672-fb4510d0e47c",
						},
					},
					{
						id: "6NHN4qGxeY4",
						slug: "6NHN4qGxeY4",
						created_at: "2019-10-20T16:23:22Z",
						updated_at: "2023-07-21T22:09:37Z",
						blur_hash: "LQNHfejFH@oM%fS~xFShD6t7pHt6",
						urls: {
							raw: "https://images.unsplash.com/photo-1571588596167-6494478e2570?ixlib=rb-4.0.3",
							full: "https://images.unsplash.com/photo-1571588596167-6494478e2570?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
							regular:
								"https://images.unsplash.com/photo-1571588596167-6494478e2570?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
							small:
								"https://images.unsplash.com/photo-1571588596167-6494478e2570?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
							thumb:
								"https://images.unsplash.com/photo-1571588596167-6494478e2570?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
							small_s3:
								"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1571588596167-6494478e2570",
						},
					},
				],
			},
			{
				id: "DodLjZWZyks",
				updated_at: "2023-01-12T02:53:37Z",
				username: "user_007",
				name: "User Untitled",
				first_name: "User",
				last_name: "Untitled",
				twitter_username: null,
				portfolio_url: null,
				bio: null,
				location: null,
				links: {
					self: "https://api.unsplash.com/users/user_007",
					html: "https://unsplash.com/@user_007",
					photos: "https://api.unsplash.com/users/user_007/photos",
					likes: "https://api.unsplash.com/users/user_007/likes",
					portfolio: "https://api.unsplash.com/users/user_007/portfolio",
					following: "https://api.unsplash.com/users/user_007/following",
					followers: "https://api.unsplash.com/users/user_007/followers",
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
				total_collections: 0,
				total_likes: 0,
				total_photos: 8,
				accepted_tos: true,
				for_hire: false,
				social: {
					instagram_username: null,
					portfolio_url: null,
					twitter_username: null,
					paypal_email: null,
				},
				followed_by_user: false,
				photos: [
					{
						id: "gh-_h4AFh5I",
						slug: "gh-_h4AFh5I",
						created_at: "2021-03-23T19:14:09Z",
						updated_at: "2023-07-22T01:19:29Z",
						blur_hash: "LPNU0FWBoaxu-=x[xst7~pxtRit7",
						urls: {
							raw: "https://images.unsplash.com/photo-1616526629747-c72ee5b45fd4?ixlib=rb-4.0.3",
							full: "https://images.unsplash.com/photo-1616526629747-c72ee5b45fd4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
							regular:
								"https://images.unsplash.com/photo-1616526629747-c72ee5b45fd4?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
							small:
								"https://images.unsplash.com/photo-1616526629747-c72ee5b45fd4?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
							thumb:
								"https://images.unsplash.com/photo-1616526629747-c72ee5b45fd4?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
							small_s3:
								"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1616526629747-c72ee5b45fd4",
						},
					},
					{
						id: "u-57zmxABLQ",
						slug: "u-57zmxABLQ",
						created_at: "2021-03-23T19:14:10Z",
						updated_at: "2023-07-22T05:20:03Z",
						blur_hash: "LUONOXRi?ut8?Gt7WVRk~pof4oV@",
						urls: {
							raw: "https://images.unsplash.com/photo-1616526629705-981c263b68bc?ixlib=rb-4.0.3",
							full: "https://images.unsplash.com/photo-1616526629705-981c263b68bc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
							regular:
								"https://images.unsplash.com/photo-1616526629705-981c263b68bc?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
							small:
								"https://images.unsplash.com/photo-1616526629705-981c263b68bc?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
							thumb:
								"https://images.unsplash.com/photo-1616526629705-981c263b68bc?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
							small_s3:
								"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1616526629705-981c263b68bc",
						},
					},
					{
						id: "sV4_RPEPiVQ",
						slug: "sV4_RPEPiVQ",
						created_at: "2021-03-23T19:14:09Z",
						updated_at: "2023-07-22T04:19:04Z",
						blur_hash: "LPNm~Nt8s+of%Mt6R*ay~oofM|j]",
						urls: {
							raw: "https://images.unsplash.com/photo-1616526628220-f7b03df408b3?ixlib=rb-4.0.3",
							full: "https://images.unsplash.com/photo-1616526628220-f7b03df408b3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
							regular:
								"https://images.unsplash.com/photo-1616526628220-f7b03df408b3?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
							small:
								"https://images.unsplash.com/photo-1616526628220-f7b03df408b3?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
							thumb:
								"https://images.unsplash.com/photo-1616526628220-f7b03df408b3?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
							small_s3:
								"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1616526628220-f7b03df408b3",
						},
					},
				],
			},
			{
				id: "_o0y36feGbg",
				updated_at: "2022-12-20T09:43:22Z",
				username: "usr1132355",
				name: "User 1 User Number One",
				first_name: "User 1",
				last_name: "User Number One",
				twitter_username: null,
				portfolio_url: null,
				bio: null,
				location: null,
				links: {
					self: "https://api.unsplash.com/users/usr1132355",
					html: "https://unsplash.com/@usr1132355",
					photos: "https://api.unsplash.com/users/usr1132355/photos",
					likes: "https://api.unsplash.com/users/usr1132355/likes",
					portfolio: "https://api.unsplash.com/users/usr1132355/portfolio",
					following: "https://api.unsplash.com/users/usr1132355/following",
					followers: "https://api.unsplash.com/users/usr1132355/followers",
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
				total_collections: 0,
				total_likes: 1,
				total_photos: 7,
				accepted_tos: true,
				for_hire: false,
				social: {
					instagram_username: null,
					portfolio_url: null,
					twitter_username: null,
					paypal_email: null,
				},
				followed_by_user: false,
				photos: [
					{
						id: "faS9EbLiVQo",
						slug: "faS9EbLiVQo",
						created_at: "2022-12-17T19:01:22Z",
						updated_at: "2023-07-22T00:41:14Z",
						blur_hash: "LiHy2aR4xvxa?wWEadtRx^R.Rjjt",
						urls: {
							raw: "https://images.unsplash.com/photo-1671303570215-7b93c634e01d?ixlib=rb-4.0.3",
							full: "https://images.unsplash.com/photo-1671303570215-7b93c634e01d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
							regular:
								"https://images.unsplash.com/photo-1671303570215-7b93c634e01d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
							small:
								"https://images.unsplash.com/photo-1671303570215-7b93c634e01d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
							thumb:
								"https://images.unsplash.com/photo-1671303570215-7b93c634e01d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
							small_s3:
								"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1671303570215-7b93c634e01d",
						},
					},
					{
						id: "wQWpCvkbaC0",
						slug: "wQWpCvkbaC0",
						created_at: "2022-12-17T17:56:18Z",
						updated_at: "2023-07-21T21:37:13Z",
						blur_hash: "LNFY}rRNV;IpPE%0V=W?^,RkRQfk",
						urls: {
							raw: "https://images.unsplash.com/photo-1671299708434-789c988f2807?ixlib=rb-4.0.3",
							full: "https://images.unsplash.com/photo-1671299708434-789c988f2807?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
							regular:
								"https://images.unsplash.com/photo-1671299708434-789c988f2807?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
							small:
								"https://images.unsplash.com/photo-1671299708434-789c988f2807?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
							thumb:
								"https://images.unsplash.com/photo-1671299708434-789c988f2807?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
							small_s3:
								"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1671299708434-789c988f2807",
						},
					},
					{
						id: "Ph5y9ToEHio",
						slug: "Ph5y9ToEHio",
						created_at: "2022-12-17T17:46:14Z",
						updated_at: "2023-07-22T17:36:37Z",
						blur_hash: "LGFilVkqo}Mxt8?w-;-=WZx^WEM_",
						urls: {
							raw: "https://images.unsplash.com/photo-1671299095930-93689e1a0607?ixlib=rb-4.0.3",
							full: "https://images.unsplash.com/photo-1671299095930-93689e1a0607?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
							regular:
								"https://images.unsplash.com/photo-1671299095930-93689e1a0607?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
							small:
								"https://images.unsplash.com/photo-1671299095930-93689e1a0607?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
							thumb:
								"https://images.unsplash.com/photo-1671299095930-93689e1a0607?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
							small_s3:
								"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1671299095930-93689e1a0607",
						},
					},
				],
			},
			{
				id: "hvpNModbE8s",
				updated_at: "2022-10-27T11:49:19Z",
				username: "useruntitle",
				name: "User Untitle",
				first_name: "User",
				last_name: "Untitle",
				twitter_username: null,
				portfolio_url: null,
				bio: null,
				location: null,
				links: {
					self: "https://api.unsplash.com/users/useruntitle",
					html: "https://unsplash.com/@useruntitle",
					photos: "https://api.unsplash.com/users/useruntitle/photos",
					likes: "https://api.unsplash.com/users/useruntitle/likes",
					portfolio: "https://api.unsplash.com/users/useruntitle/portfolio",
					following: "https://api.unsplash.com/users/useruntitle/following",
					followers: "https://api.unsplash.com/users/useruntitle/followers",
				},
				profile_image: {
					small:
						"https://images.unsplash.com/profile-1638581934910-ac9254cb2c37?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
					medium:
						"https://images.unsplash.com/profile-1638581934910-ac9254cb2c37?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
					large:
						"https://images.unsplash.com/profile-1638581934910-ac9254cb2c37?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
				},
				instagram_username: null,
				total_collections: 0,
				total_likes: 78,
				total_photos: 3,
				accepted_tos: true,
				for_hire: false,
				social: {
					instagram_username: null,
					portfolio_url: null,
					twitter_username: null,
					paypal_email: null,
				},
				followed_by_user: false,
				photos: [
					{
						id: "o-GtPoYzKZs",
						slug: "o-GtPoYzKZs",
						created_at: "2022-01-06T09:01:23Z",
						updated_at: "2023-07-22T05:27:58Z",
						blur_hash: "LkHf#UoIa}fj.AWBaxjtD#WCjZay",
						urls: {
							raw: "https://images.unsplash.com/photo-1641459674034-3c56df261e7f?ixlib=rb-4.0.3",
							full: "https://images.unsplash.com/photo-1641459674034-3c56df261e7f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
							regular:
								"https://images.unsplash.com/photo-1641459674034-3c56df261e7f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
							small:
								"https://images.unsplash.com/photo-1641459674034-3c56df261e7f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
							thumb:
								"https://images.unsplash.com/photo-1641459674034-3c56df261e7f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
							small_s3:
								"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1641459674034-3c56df261e7f",
						},
					},
					{
						id: "VItADzfi4fM",
						slug: "VItADzfi4fM",
						created_at: "2022-01-07T13:22:03Z",
						updated_at: "2023-07-22T12:26:21Z",
						blur_hash: "LVIr7zKDo}rv-aRootoMyDryRVSv",
						urls: {
							raw: "https://images.unsplash.com/photo-1641561713759-d4f672465784?ixlib=rb-4.0.3",
							full: "https://images.unsplash.com/photo-1641561713759-d4f672465784?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
							regular:
								"https://images.unsplash.com/photo-1641561713759-d4f672465784?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
							small:
								"https://images.unsplash.com/photo-1641561713759-d4f672465784?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
							thumb:
								"https://images.unsplash.com/photo-1641561713759-d4f672465784?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
							small_s3:
								"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1641561713759-d4f672465784",
						},
					},
					{
						id: "kysI-y_Jwcs",
						slug: "kysI-y_Jwcs",
						created_at: "2022-01-31T13:13:25Z",
						updated_at: "2023-07-21T23:27:15Z",
						blur_hash: "L$G]~}fhjroM%joMj[axwFWBWXa}",
						urls: {
							raw: "https://images.unsplash.com/photo-1643634793472-da32631fa2b3?ixlib=rb-4.0.3",
							full: "https://images.unsplash.com/photo-1643634793472-da32631fa2b3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
							regular:
								"https://images.unsplash.com/photo-1643634793472-da32631fa2b3?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
							small:
								"https://images.unsplash.com/photo-1643634793472-da32631fa2b3?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
							thumb:
								"https://images.unsplash.com/photo-1643634793472-da32631fa2b3?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
							small_s3:
								"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1643634793472-da32631fa2b3",
						},
					},
				],
			},
			{
				id: "37vLwrxtQaQ",
				updated_at: "2021-06-29T06:22:01Z",
				username: "notraction",
				name: "Random User",
				first_name: "Random",
				last_name: "User",
				twitter_username: null,
				portfolio_url: null,
				bio: null,
				location: "Pula, Croatia",
				links: {
					self: "https://api.unsplash.com/users/notraction",
					html: "https://unsplash.com/@notraction",
					photos: "https://api.unsplash.com/users/notraction/photos",
					likes: "https://api.unsplash.com/users/notraction/likes",
					portfolio: "https://api.unsplash.com/users/notraction/portfolio",
					following: "https://api.unsplash.com/users/notraction/following",
					followers: "https://api.unsplash.com/users/notraction/followers",
				},
				profile_image: {
					small:
						"https://images.unsplash.com/profile-1507993330127-d9c7426e3ea8?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
					medium:
						"https://images.unsplash.com/profile-1507993330127-d9c7426e3ea8?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
					large:
						"https://images.unsplash.com/profile-1507993330127-d9c7426e3ea8?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
				},
				instagram_username: null,
				total_collections: 0,
				total_likes: 1,
				total_photos: 2,
				accepted_tos: false,
				for_hire: false,
				social: {
					instagram_username: null,
					portfolio_url: null,
					twitter_username: null,
					paypal_email: null,
				},
				followed_by_user: false,
				photos: [
					{
						id: "-8m72CcjdmM",
						slug: "-8m72CcjdmM",
						created_at: "2017-10-14T15:12:51Z",
						updated_at: "2023-07-22T11:02:39Z",
						blur_hash: "LaECanxt02IV~Vof9GRkSiWCjFoe",
						urls: {
							raw: "https://images.unsplash.com/photo-1507993921791-dfadb0b0fff5?ixlib=rb-4.0.3",
							full: "https://images.unsplash.com/photo-1507993921791-dfadb0b0fff5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
							regular:
								"https://images.unsplash.com/photo-1507993921791-dfadb0b0fff5?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
							small:
								"https://images.unsplash.com/photo-1507993921791-dfadb0b0fff5?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
							thumb:
								"https://images.unsplash.com/photo-1507993921791-dfadb0b0fff5?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
							small_s3:
								"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1507993921791-dfadb0b0fff5",
						},
					},
					{
						id: "QolkOLEPFpQ",
						slug: "QolkOLEPFpQ",
						created_at: "2017-10-14T14:58:14Z",
						updated_at: "2023-07-22T02:02:14Z",
						blur_hash: "LXGk%MIq4;%K~UR+Ipt6^%R+M|t6",
						urls: {
							raw: "https://images.unsplash.com/photo-1507993008707-1dc039baecd6?ixlib=rb-4.0.3",
							full: "https://images.unsplash.com/photo-1507993008707-1dc039baecd6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
							regular:
								"https://images.unsplash.com/photo-1507993008707-1dc039baecd6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
							small:
								"https://images.unsplash.com/photo-1507993008707-1dc039baecd6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
							thumb:
								"https://images.unsplash.com/photo-1507993008707-1dc039baecd6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
							small_s3:
								"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1507993008707-1dc039baecd6",
						},
					},
				],
			},
			{
				id: "iJKtMEFlVb0",
				updated_at: "2023-04-02T18:11:22Z",
				username: "tidelust",
				name: "user tidelust",
				first_name: "user",
				last_name: "tidelust",
				twitter_username: "lustvold",
				portfolio_url: "http://ryuuter.carrd.co",
				bio: "just a very amateur photographer who tried his best",
				location: "Indonesia",
				links: {
					self: "https://api.unsplash.com/users/tidelust",
					html: "https://unsplash.com/@tidelust",
					photos: "https://api.unsplash.com/users/tidelust/photos",
					likes: "https://api.unsplash.com/users/tidelust/likes",
					portfolio: "https://api.unsplash.com/users/tidelust/portfolio",
					following: "https://api.unsplash.com/users/tidelust/following",
					followers: "https://api.unsplash.com/users/tidelust/followers",
				},
				profile_image: {
					small:
						"https://images.unsplash.com/profile-1594798806572-c558206fe125image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
					medium:
						"https://images.unsplash.com/profile-1594798806572-c558206fe125image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
					large:
						"https://images.unsplash.com/profile-1594798806572-c558206fe125image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
				},
				instagram_username: "tidelust",
				total_collections: 1,
				total_likes: 68,
				total_photos: 1,
				accepted_tos: true,
				for_hire: false,
				social: {
					instagram_username: "tidelust",
					portfolio_url: "http://ryuuter.carrd.co",
					twitter_username: "lustvold",
					paypal_email: null,
				},
				followed_by_user: false,
				photos: [
					{
						id: "ruHukPFo_GM",
						slug: "ruHukPFo_GM",
						created_at: "2020-07-15T07:39:07Z",
						updated_at: "2023-07-22T16:13:46Z",
						blur_hash: "LHPsnq%#xs%M.SROR+M{?^WEIUxt",
						urls: {
							raw: "https://images.unsplash.com/photo-1594798631765-4cb614f60672?ixlib=rb-4.0.3",
							full: "https://images.unsplash.com/photo-1594798631765-4cb614f60672?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
							regular:
								"https://images.unsplash.com/photo-1594798631765-4cb614f60672?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
							small:
								"https://images.unsplash.com/photo-1594798631765-4cb614f60672?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
							thumb:
								"https://images.unsplash.com/photo-1594798631765-4cb614f60672?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
							small_s3:
								"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1594798631765-4cb614f60672",
						},
					},
				],
			},
		],
	};
	const usersLoad = false

	return (
		<>
			<Header />
			<SearchParams
				// Нужно чтобы обнулять счётчик
				setDataLoaded={setDataLoaded}
				active={active}
				setActive={setActive}
				framesData={frames || collections}
			></SearchParams>
			{active === "photos" && (
				<Main
					frames={frames.results}
					load={framesLoad}
					framesWidth={framesMainWidth}
				></Main>
			)}
			{active === "collections" && (
				<Collections
					toShow={Infinity}
					collectionsLoad={collectionsLoad}
					collectionsData={collections?.results}
				/>
			)}
		</>
	);
}
