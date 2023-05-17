import FrameCol from "./FrameCol";
import useFetchByScroll from "../../hooks/functions/useFetchByScroll";
import { useCallback, useEffect, useState } from "react";

export default function Main() {
	const [col, setCol] = useState(Math.round(window.innerWidth / 250));

	useFetchByScroll();

	const frameHandler = useCallback(() => {
		setCol(Math.round(window.innerWidth / 250));
		console.log(window.innerWidth, col);
	}, [col]);

	useEffect(() => {
		window.addEventListener("resize", frameHandler);
	}, [frameHandler]);

	return (
		<div className='main'>
			{Array(col)
				.fill("")
				.map((item, i) => (
					<FrameCol num={2} frameHeight={300} frameHeightDiffusion={10} />
				))}
		</div>
	);
}
