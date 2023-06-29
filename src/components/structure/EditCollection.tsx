import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useCreateCollection from "../../hooks/post/useCreateCollection";
import { IAccountCollection, ICollectionFormTitles, ICollectionProps } from "../../interface";
import useUpdateCollection from "../../hooks/put/useUpdateCollection";
import CollectionForm from "./CollectionForm";

export default function EditCollection({
	close,
	collectionData,
}: {
	close: (value: boolean) => void;
	collectionData: IAccountCollection | undefined;
}) {
	const [name, setName] = useState("");
	const [description, setDescrtiption] = useState("");
	const [privateC, setPrivateC] = useState(false);
	const [post, setPost] = useState(false);

	const { dataCollection, load } = useUpdateCollection(
		collectionData?.id,
		name,
		description,
		privateC,
		post,
	);

	const props: ICollectionProps = {
		name: name,
		description: description,
		privateC: privateC,
		post: post,
		setName: setName,
		setDescrtiption: setDescrtiption,
		setPrivateC: setPrivateC,
		setPost: setPost,
	};

	const formTitles: ICollectionFormTitles = {
		mainTitle: 'Edit collection',
		nameTitle: 'New name',
		descriptionTitle: 'Description'
	}

	return (
		<CollectionForm
			mainProps={props}
			dataCollection={dataCollection}
			load={load}
			close={close}
			formTitles={formTitles}
		></CollectionForm>
	);
}
