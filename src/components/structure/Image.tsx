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
	to = "",
	color,
	onClick,
}: {
	id?: string | null | undefined;
	src?: string | null | undefined;
	className?: string;
	style?: React.CSSProperties;
	to?: string;
	color?: string;
	onClick?: React.MouseEventHandler<HTMLElement>
}) {
	const { data, load } = useFramesId(id);

	return (
		<>
			<Loading loading={load}></Loading>
			{to && <NavLink to={to} onClick={onClick} style={{color: color}}>
				<img
					src={
						src ||
						data?.urls.regular ||
						(!!!color &&
							"https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png?20091205084734") ||
						'https://www.technistone.com/color-range/image-slab/Brilliant%20Black_SLAB_web.jpg'
					}
					alt='f'
					className={className?.toString()}
					style={style}
				/>
			</NavLink>}
			{!to && (
				<img
					onClick={onClick}
					src={
						src ||
						data?.urls.regular ||
						(!!!color &&
							"https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png?20091205084734") ||
						'https://www.technistone.com/color-range/image-slab/Brilliant%20Black_SLAB_web.jpg'
					}
					alt='f'
					className={className?.toString()}
					style={style}
				/>
			)}
		</>
	);
}
