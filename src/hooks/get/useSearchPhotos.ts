import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
	IAccountPublicData,
	ISearchCollections,
	ISearchPhotos,
} from "../../interface";
import { addError } from "../../store/functionsSlice";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";
import useFramesStoreInfo from "../../utils/info/useFramesStoreInfo";
import {
	resetFramesLoaded,
	resetFramesRedirect,
} from "../../store/framesSlice";

export default function useSearchPhotos(options: {
	perLoad: number;
	q: string | undefined | null;
	collections?: string | undefined | null;
	post?: boolean;
	orderBy?: string | undefined;
}) {
	const { accessToken } = useAccountStoreInfo();

	//! Separating by comma
	const [frames, setFrames] = useState<ISearchPhotos>({
		results: [],
		total: 100,
		total_pages: 100,
	} as ISearchPhotos);
	const [load, setLoad] = useState<boolean>(false);

	const dispatch = useDispatch();

	const { framesLoaded, framesRedirect } = useFramesStoreInfo();

	useEffect(() => {
		if (framesRedirect) {
			dispatch(resetFramesLoaded());
			dispatch(resetFramesRedirect());
			setFrames({
				...frames,
				results: frames.results.slice(
					frames.results.length - framesLoaded * options?.perLoad,
				),
			});
		}
	}, [framesRedirect]);

	const getPhotoInfo = useCallback(
		async (
			accessToken: string,
			q: string,
			perPage: number,
			orderBy: string | undefined,
		) => {
			try {
				const data = (await (
					await axios.get(
						`https://api.unsplash.com/search/photos?access_token=${accessToken}&page=${framesLoaded}&query=${q}&per_page=${perPage}&order_by=${
							orderBy ? orderBy : ""
						}`,
					)
				).data) as ISearchPhotos;
				setFrames({
					...data,
					results: [...frames.results, ...data.results],
				});
			} catch (err: unknown) {
				const error = err as AxiosError;
				addError(dispatch, `${error.message} while getting account data`);
			} finally {
				setLoad(false);
			}
		},
		[framesLoaded],
	);

	const getPhotosCollection = useCallback(
		async (
			accessToken: string,
			q: string,
			perLoad: number,
			orderBy: string | undefined,
			collections: string,
		) => {
			try {
				const data = await (
					await axios.get(
						`https://api.unsplash.com/search/photos?access_token=${accessToken}&page=${framesLoaded}&query=${q}&per_page=${perLoad}&order_by=${
							orderBy ? orderBy : ""
						}&$collections=${collections.split(" ").join(",")}`,
					)
				).data;
				setFrames({
					...data,
					results: [...frames.results, ...data.results],
				});
			} catch (err: unknown) {
				const error = err as AxiosError;
				addError(dispatch, `${error.message} while getting account data`);
			} finally {
				setLoad(false);
			}
		},
		[framesLoaded],
	);

	useEffect(() => {
		if (!!accessToken && !!options?.post && !!options?.q && !!!options?.collections) {
			getPhotoInfo(accessToken, options?.q, options?.perLoad, options?.orderBy);
		} else if (!!accessToken && !!options?.q && !!options?.collections) {
			getPhotosCollection(
				accessToken,
				options?.q,
				options?.perLoad,
				options?.orderBy,
				options?.collections,
			);
		}
	}, [accessToken, options?.collections, options?.orderBy, framesLoaded, getPhotoInfo, getPhotosCollection, options?.q, options?.perLoad, options?.post]);

	return { frames, load };
}
