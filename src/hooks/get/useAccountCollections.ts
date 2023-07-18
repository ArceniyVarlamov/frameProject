import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { IAccountCollection } from "./../../interface";
import { addError } from "../../store/functionsSlice";
import { useDispatch } from "react-redux";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";
import useFramesStoreInfo from "../../utils/info/useFramesStoreInfo";
import {
	resetFramesLoaded,
	resetFramesRedirect,
} from "../../store/framesSlice";

export default function useAccountCollections(
	page: number,
	perLoad: number,
	username: string | null | undefined,
) {
	const [collections, setCollections] = useState<IAccountCollection[]>([]);
	const [load, setLoad] = useState(false);

	const { accessToken } = useAccountStoreInfo();

	const dispatch = useDispatch();

	const getInfo = useCallback(
		async (
			accessToken: string,
			username: string | null | undefined,
			page: number,
			perLoad:  number,
		) => {
			try {
				// setCollections(
				// 	await (
				// 		await axios.get(
				// 			`https://api.unsplash.com/users/${username}/collections?access_token=${accessToken}&page=${page}&per_page=${perLoad}`,
				// 		)
				// 	).data,
				// );
				let all: IAccountCollection[] = [];
				for (let i = collections.length; i < page * perLoad; i++) {
					all.push({
						cover_photo: {
							color: "000",
							urls: {
								regular:
									"https://i.pinimg.com/236x/06/be/f1/06bef1d6e3a69665a83a55e53bf50d76.jpg",
							},
						},
						preview_photos: [
							{
								urls: {
									regular:
										"https://i.pinimg.com/236x/06/be/f1/06bef1d6e3a69665a83a55e53bf50d76.jpg",
								},
							},
							{
								urls: {
									regular:
										"https://i.pinimg.com/236x/06/be/f1/06bef1d6e3a69665a83a55e53bf50d76.jpg",
								},
							},
							{
								urls: {
									regular:
										"https://i.pinimg.com/236x/06/be/f1/06bef1d6e3a69665a83a55e53bf50d76.jpg",
								},
							},
						],
					} as IAccountCollection);
				}
				setCollections([...collections, ...all]);
			} catch (err: unknown) {
				const error = err as AxiosError;
				addError(dispatch, `${error.message} while getting collections data`);
			} finally {
				setLoad(false);
			}
		},
		[],
	);

	useEffect(() => {
		// console.log(page);
		if (!!!accessToken && !!!username) {
			getInfo(accessToken, username, page, perLoad);
		}
	}, [accessToken, getInfo, username, page, perLoad]);

	return { collections, load };
}
