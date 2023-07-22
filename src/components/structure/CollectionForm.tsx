import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useCreateCollection from "../../hooks/post/useCreateCollection";
import { IAccountCollection, ICollectionFormTitles, ICollectionProps } from "../../interface";
import useUnpdateCollection from "../../hooks/put/useUpdateCollection";
import cross from "../../images/black_bold_cross.png"
import Image from './Image';

export default function CollectionForm({
	setShow,
	dataCollection,
  load,
	mainProps,
  titles,
}: {
  dataCollection: IAccountCollection | undefined;
	setShow: (value: boolean) => void;
  load: boolean;
	mainProps: ICollectionProps;
  titles: ICollectionFormTitles;
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
			<Image onClick={() => setShow(false)} className='create-collection__back' src={cross}></Image>
			<div className='create-collection__form'>
				<p className='create-collection__top-text'>{titles.mainTitle}</p>
				<div className='create-collection__name'>
					<p className='create-collection__pre-text'>{titles.nameTitle}</p>
					<textarea
						className='create-collection__input-name'
            placeholder={titles.namePlaceholder}
            autoFocus={true}
						onChange={changeNameHandler}
						maxLength={60}
					></textarea>
				</div>
				<div className='create-collection__description'>
					<p className='create-collection__pre-text'>{titles.descriptionTitle}</p>
					<textarea
						className='create-collection__input-description'
						onChange={changeDescriptionHandler}
            placeholder={titles.descriptionPlaceholder}
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
						onClick={() => setShow(false)}
					>
						Cancel
					</div>
					<div
						className='create-collection__create outline-outward'
						onClick={() => {
							mainProps.setPost(true);
							setShow(false);
						}}
					>
						Create
					</div>
				</div>
			</div>
		</div>
	);
}
