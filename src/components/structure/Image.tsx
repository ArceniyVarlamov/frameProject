import conditional from "../../utils/functional/condition";
import Loading from "../functional/Loading";
import useFramesId from "./../../hooks/get/useFramesId";
import Error from "./../functional/Error";

export default function Image({
	id,
	src,
	className,
}: {
	id?: string | null | undefined;
	src?: string | null | undefined;
	className?: string;
}) {
	const { data, error, load } = useFramesId(id);

	return (
		<>
			<Loading loading={load}></Loading>
			<Error err={error}></Error>
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
			/>
		</>
	);
}
