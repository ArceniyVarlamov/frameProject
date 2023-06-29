import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useCreateCollection from "../../hooks/post/useCreateCollection";
import { IAccountCollection, ICollectionFormTitles, ICollectionProps } from "../../interface";
import useUnpdateCollection from "../../hooks/put/useUpdateCollection";

export default function CollectionForm({
	close,
	dataCollection,
  load,
	mainProps,
  formTitles,
}: {
  dataCollection: IAccountCollection | undefined;
	close: (value: boolean) => void;
  load: boolean;
	mainProps: ICollectionProps;
  formTitles: ICollectionFormTitles;
}) {
	
	const changeNameHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		mainProps.setName(e.currentTarget.value);
	};
	const changeDescriptionHandler = (
		e: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		mainProps.setDescrtiption(e.currentTarget.value);
	};
	const changePrivateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		mainProps.setPrivateC(!mainProps.privateC);
	};

	return (
		<div className='create-collection'>
			<div className='create-collection__form'>
				<p className='create-collection__top-text'>{formTitles.mainTitle}</p>
				<div className='create-collection__name'>
					<p className='create-collection__pre-text'>{formTitles.nameTitle}</p>
					<textarea
						className='create-collection__input-name'
            placeholder={formTitles.namePlaceholder}
            autoFocus={true}
						onChange={changeNameHandler}
						maxLength={60}
					></textarea>
				</div>
				<div className='create-collection__description'>
					<p className='create-collection__pre-text'>{formTitles.descriptionTitle}</p>
					<textarea
						className='create-collection__input-description'
						onChange={changeDescriptionHandler}
            placeholder={formTitles.descriptionPlaceholder}
						maxLength={250}
					></textarea>
				</div>

				<div className='create-collection__private'>
					<input
						className='create-collection__checkbox'
						onChange={changePrivateHandler}
						type='checkbox'
					></input>
					<p className='create-collection__private-text'>
						Make collection private
					</p>
				</div>
				<div className='create-collection__access'>
					<div
						className='create-collection__cancel blob-button'
						onClick={() => close(false)}
					>
						Cancel
					</div>
					<div
						className='create-collection__create outline-outward'
						onClick={() => {
							mainProps.setPost(true);
							close(load);
						}}
					>
						Create
					</div>
				</div>
			</div>
		</div>
	);
}
