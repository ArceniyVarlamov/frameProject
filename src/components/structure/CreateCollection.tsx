import { useState } from "react";

export default function CreateCollection() {
	
	return (
		<div className='create-collection'>
			<div className='create-collection__form'>
				<p className='create-collection__top-text'>Create new collection</p>
				<div className='create-collection__name'>
					<p className='create-collection__pre-text'>Name</p>
					<textarea
						className='create-collection__input-name'
						maxLength={60}
					></textarea>
				</div>
				<div className='create-collection__description'>
					<p className='create-collection__pre-text'>Description (optional)</p>
					<textarea
						className='create-collection__input-description'
						maxLength={250}
					></textarea>
				</div>

				<div className='create-collection__private'>
					<input
						className='create-collection__checkbox'
						type='checkbox'
					></input>
					<p className='create-collection__private-text'>
						Make collection private
					</p>
				</div>
				<div className='create-collection__access'>
					<div className='create-collection__cancel blob-button'>Cancel</div>
					<div className='create-collection__create outline-outward'>Create</div>
				</div>
			</div>
		</div>
	);
}
