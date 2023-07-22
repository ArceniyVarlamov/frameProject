import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
	IAccountPublicData,
	IData,
	ISearchCollections,
	ISearchFrames,
} from "../../interface";
import { addError } from "../../store/functionsSlice";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";
import useFramesStoreInfo from "../../utils/info/useFramesStoreInfo";
import {
	resetFramesLoaded,
	resetFramesRedirect,
} from "../../store/framesSlice";

export default function useSearchFrames(options: {
	perLoad: number;
	page: number;
	q: string | undefined | null;
	collections?: string | undefined | null;
	post?: boolean;
	orderBy?: string | undefined;
}) {
	const { accessToken } = useAccountStoreInfo();

	//! Separating by comma
	const [frames, setFrames] = useState<ISearchFrames>({
		results: [],
		total: 100,
		total_pages: 100,
	} as ISearchFrames);
	const [load, setLoad] = useState<boolean>(false);

	const dispatch = useDispatch();

	const getPhotoInfo = useCallback(
		async (
			accessToken: string,
			q: string,
			page: number,
			perLoad: number,
			orderBy: string | undefined,
		) => {
			try {
				// const data = (await (
				// 	await axios.get(
				// 		`https://api.unsplash.com/search/photos?access_token=${accessToken}&page=${page}&query=${q}&per_page=${perLoad}&order_by=${
				// 			orderBy ? orderBy : ""
				// 		}`,
				// 	)
				// ).data) as ISearchFrames;
				// setFrames({
				// 	...data,
				// 	results: [...frames.results, ...data.results],
				// });
				// Вариант если api ограничивает запросы
				let data: IData[] = [];
				for (let i = frames.results.length; i < page * perLoad; i++) {
					data.push({
						height: Math.random() * (6000 - 4000) + 4000,
						color: `rgba(${Math.random() * 125}, ${Math.random() * 125}, ${
							Math.random() * 125
						}, ${Math.random() + 0.2})`,
						blur_hash: "LB84i6~q-;t7ofRjM{fQxuofayWB",
						id: page * i,
					} as unknown as IData);
				}
				setFrames({
					...frames,
					results: [...frames.results, ...data],
				});
			} catch (err: unknown) {
				const error = err as AxiosError;
				addError(dispatch, `${error.message} while getting account data`);
			} finally {
				setLoad(false);
			}
		},
		[options?.page,
			options?.perLoad,],
	);

	const getFramesCollection = useCallback(
		async (
			accessToken: string,
			q: string,
			page: number,
			perLoad: number,
			orderBy: string | undefined,
			collections: string,
		) => {
			try {
				// const data = await (
				// 	await axios.get(
				// 		`https://api.unsplash.com/search/photos?access_token=${accessToken}&page=${page}&query=${q}&per_page=${perLoad}&order_by=${
				// 			orderBy ? orderBy : ""
				// 		}&$collections=${collections.split(" ").join(",")}`,
				// 	)
				// ).data;
				// setFrames({
				// 	...data,
				// 	results: [...frames.results, ...data.results],
				// });
				let data: IData[] = [];
				for (let i = frames.results.length; i < page * perLoad; i++) {
					data.push({
						height: Math.random() * (6000 - 4000) + 4000,
						color: `rgba(${Math.random() * 125}, ${Math.random() * 125}, ${
							Math.random() * 125
						}, ${Math.random() + 0.2})`,
						blur_hash: "LB84i6~q-;t7ofRjM{fQxuofayWB",
						id: page * i,
					} as unknown as IData);
				}
				setFrames({
					...frames,
					results: [...frames.results, ...data],
				});
			} catch (err: unknown) {
				const error = err as AxiosError;
				addError(dispatch, `${error.message} while getting account data`);
			} finally {
				setLoad(false);
			}
		},
		[options?.page,
			options?.perLoad,],
	);

	useEffect(() => {
		if (
			// !!accessToken &&
			!!options?.post &&
			!!options?.q &&
			!!!options?.collections
			) {
			getPhotoInfo(
				accessToken,
				options?.q,
				options?.page,
				options?.perLoad,
				options?.orderBy,
			);
		} else if (
			// !!accessToken &&
			!!options?.q &&
			!!options?.collections) {
			getFramesCollection(
				accessToken,
				options?.q,
				options?.page,
				options?.perLoad,
				options?.orderBy,
				options?.collections,
			);
		}
	}, [options?.q, options?.page, options?.perLoad, options?.orderBy, options?.collections, options?.post, getPhotoInfo, accessToken, getFramesCollection]);

	return { frames, load };
}
