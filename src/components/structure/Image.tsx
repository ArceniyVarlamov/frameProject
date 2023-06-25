import { NavLink } from "react-router-dom";
import conditional from "../../utils/functional/condition";
import Loading from "../functional/Loading";
import useFramesId from "./../../hooks/get/useFramesId";
import Error from "./../functional/Error";

export default function Image({
	id,
	src,
	className,
	style,
	to = '',
}: {
	id?: string | null | undefined;
	src?: string | null | undefined;
	className?: string;
	style?: any;
	to?: string;
}) {
	const { data, load } = useFramesId(id);

	return (
		<>
			<Loading loading={load}></Loading>
			<NavLink to={to}>
				<img
					src={
						(src ? src : data?.urls.regular)
							? src
								? src
								: data?.urls.regular
							: "https://www.technistone.com/color-range/image-slab/Brilliant%20Black_SLAB_web.jpg"
					}
					alt='f'
					className={className?.toString()}
					style={style}
				/>
			</NavLink>
		</>
	);
}
