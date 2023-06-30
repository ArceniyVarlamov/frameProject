import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useCreateCollection from "../../hooks/post/useCreateCollection";
import {
	IAccessTitles,
	IAccountCollection,
	ICollectionFormTitles,
	ICollectionProps,
} from "../../interface";
import useUpdateCollection from "../../hooks/put/useUpdateCollection";
import CollectionForm from "./CollectionForm";

export default function Access({
	show,
	setShow,
	toAccess,
	titles,
}: {
	show: boolean;
	setShow: (value: boolean) => void;
	toAccess: (value: boolean) => void;
	titles: IAccessTitles;
}) {
	return (
		<>
			{show && (
				<div className='access'>
					<div className='access__title'>{titles.mainTitle}</div>
					<div className='access__choose'>
						<div
							className='access__no'
							onClick={() => {toAccess(false); setShow(false)}}
						>
							{titles.noTitle}
						</div>
						<div className='access__yes' onClick={() => {toAccess(true); setShow(false)}}>
							{titles.yesTitle}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
