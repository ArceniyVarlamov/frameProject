import Image from "./Image";
import useAccountCollections from "../../hooks/get/useAccountCollections";
import { Link } from "react-router-dom";
import Loading from "../functional/Loading";

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
			<Loading loading={load}></Loading>
			<div className={`collections ${className}`}>
				{data ? (
					data?.map((item, i) => {
						return (
							<Image
								to={`/collection/${item?.id}`}
								className='collections__collection'
								key={item?.id}
								src={item?.cover_photo?.urls?.regular}
							></Image>
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
