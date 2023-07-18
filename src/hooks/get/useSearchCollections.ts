import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
	IAccountPublicData,
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

export default function useSearchCollections(options: {
	perLoad: number;
	q: string | undefined | null;
	post: boolean;
}) {
	const { accessToken } = useAccountStoreInfo();

	//! Separating by comma
	const [frames, setFrames] = useState<ISearchCollections>({
		results: [],
		total: 100,
		total_pages: 100,
	} as ISearchCollections);
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

	const getCollectionsInfo = useCallback(
		async (
			accessToken: string,
			q: string,
			perPage: number,
		) => {
			try {
				const data = (await (
					await axios.get(
						`https://api.unsplash.com/search/collections?access_token=${accessToken}&page=${framesLoaded}&per_page=${perPage}&query=${q}`,
					)
				).data) as ISearchCollections;
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
		if (!!accessToken && !!options?.post && !!options?.q) {
			getCollectionsInfo(accessToken, options?.q, options?.perLoad);
		}
	}, [accessToken, framesLoaded, options?.q, options?.perLoad, options?.post, getCollectionsInfo]);

	return { frames, load };
}
