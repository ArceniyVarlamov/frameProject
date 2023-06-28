import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useCreateCollection from "../../hooks/post/useCreateCollection";
import { IAccountCollection } from "../../interface";

export default function EditCollection({
	close,
	collectionData,
}: {
	close: any;
	collectionData: IAccountCollection | undefined;
}) {
	const [name, setName] = useState("");
	const [description, setDescrtiption] = useState("");
	const [privateC, setPrivateC] = useState(false);
	const [post, setPost] = useState(false);

	const changeNameHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setName(e.currentTarget.value);
	};
	const changeDescriptionHandler = (
		e: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		setDescrtiption(e.currentTarget.value);
	};
	const changePrivateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPrivateC(!privateC);
	};

	const { dataCollection, load } = useCreateCollection(
		name,
		description,
		privateC,
		post,
	);

	return (
		<div className='create-collection'>
			<div className='create-collection__form'>
				<p className='create-collection__top-text'>Edit Collection {dataCollection?.title}</p>
				<div className='create-collection__name'>
					<p className='create-collection__pre-text'>Name</p>
					<textarea
						className='create-collection__input-name'
						onChange={changeNameHandler}
						maxLength={60}
					></textarea>
				</div>
				<div className='create-collection__description'>
					<p className='create-collection__pre-text'>Description (optional)</p>
					<textarea
						className='create-collection__input-description'
						onChange={changeDescriptionHandler}
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
							setPost(true);
							setTimeout(() => {
								close(false);
							}, 100);
						}}
					>
						Create
					</div>
				</div>
			</div>
		</div>
	);
}
