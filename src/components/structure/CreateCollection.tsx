import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useCreateCollection from "../../hooks/post/useCreateCollection";
import CollectionForm from "./CollectionForm";
import { ICollectionFormTitles, ICollectionProps } from "../../interface";

export default function CreateCollection({
	show,
	setShow,
}: {
	show: boolean;
	setShow: (value: boolean) => void;
}) {
	const [name, setName] = useState("");
	const [description, setDescrtiption] = useState("");
	const [privateC, setPrivateC] = useState(false);
	const [post, setPost] = useState(false);

	const { dataCollection, load } = useCreateCollection(
		name,
		description,
		privateC,
		post,
		setPost
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
		mainTitle: "Create new collection",
		nameTitle: "Name",
		descriptionTitle: "Description",
	};

	return (
		<>
			{show && <CollectionForm
				mainProps={props}
				dataCollection={dataCollection}
				load={load}
				setShow={setShow}
				titles={formTitles}
			></CollectionForm>}
		</>
	);
}
