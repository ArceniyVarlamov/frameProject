import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { IAccountPublicData } from "../../interface";
import { addError } from "../../store/functionsSlice";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";

export default function useSearchPhotos(
	q: string | undefined,
	perPage: number,
	post: boolean,
	collections?: string | undefined,
	orderBy?: string | undefined,
) {
	const { accessToken } = useAccountStoreInfo();

	//! Separating by comma
	const [data, setData] = useState({} as IAccountPublicData);
	const [load, setLoad] = useState<boolean>(false);

	const dispatch = useDispatch();

	const getPhotoInfo = useCallback(
		async (
			accessToken: string,
			q: string,
			perPage: number,
			orderBy: string | undefined,
		) => {
			try {
				setData(
					await (
						await axios.get(
							`https://api.unsplash.com/search/photos?access_token=${accessToken}&query=${q}&per_page=${perPage}&order_by=${
								orderBy ? orderBy : ""
							}`,
						)
					).data,
				);
			} catch (err: unknown) {
				const error = err as AxiosError;
				addError(dispatch, `${error.message} while getting account data`);
			} finally {
				setLoad(false);
			}
		},
		[],
	);

	const getPhotosCollection = useCallback(
		async (
			accessToken: string,
			q: string,
			perPage: number,
			orderBy: string | undefined,
			collections: string,
		) => {
			try {
				setData(
					await (
						await axios.get(
							`https://api.unsplash.com/search/photos?access_token=${accessToken}&query=${q}&per_page=${perPage}&order_by=${
								orderBy ? orderBy : ""
							}&$collections=${collections.split(" ").join(",")}`,
						)
					).data,
				);
			} catch (err: unknown) {
				const error = err as AxiosError;
				addError(dispatch, `${error.message} while getting account data`);
			} finally {
				setLoad(false);
			}
		},
		[],
	);

	useEffect(() => {
		if (!!accessToken && !!post && !!q && !!!collections) {
			console.log("asfqwrqwr");

			getPhotoInfo(accessToken, q, perPage, orderBy);
		} else if (!!accessToken && !!post && !!q && !!collections) {
			getPhotosCollection(accessToken, q, perPage, orderBy, collections);
		}
	}, [
		accessToken,
		collections,
		getPhotoInfo,
		getPhotosCollection,
		orderBy,
		perPage,
		post,
		q,
	]);

	return { data, load };
}
