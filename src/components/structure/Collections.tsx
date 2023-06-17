import Image from "./Image";
import useAccountCollections from "../../hooks/get/useAccountCollections";
import { Link } from "react-router-dom";

export default function Collections({
	username,
	className = "",
	toShow = -1,
}: {
	username: string | null | undefined;
	className?: string;
	toShow?: number;
}) {
	const { data, load } = useAccountCollections(username);

	// const data = [{id: 'N8dERqiW7Sg'} as IAccountCollection, {id: 'N8dERqiW7Sg'} as IAccountCollection, {id: 'N8dERqiW7Sg'} as IAccountCollection, {id: 'N8dERqiW7Sg'} as IAccountCollection, {id: 'N8dERqiW7Sg'} as IAccountCollection, {id: 'N8dERqiW7Sg'} as IAccountCollection]

	return (
		<>
			<div className={`collections ${className}`}>
				{data ? (
					data?.map((item, i) => {
						return (
							<Link
								to={`/collection/${item?.id}`}
								className='collections__collection'
								key={item?.id}
							>
								<Image src={item?.cover_photo?.urls?.regular}></Image>
							</Link>
						);
					})
				) : (
					<></>
				)}
			</div>
			{data?.length! > toShow ? (
				<Link className='collections__more' to={`/collections/${username}`}>
					Show more
				</Link>
			) : (
				<></>
			)}
		</>
	);
}
