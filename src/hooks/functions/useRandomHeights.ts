import { useState, useEffect } from "react";
import useFramesInfo from "../../utils/info/useFramesInfo";

export default function useRandomHeights(
	frameHeight: number,
	diffusion: number,
	num?: number,
) {
	const { col } = useFramesInfo();
	const [randomHeights, setRandomHeights] = useState<number[]>([]);


	useEffect(() => {
		let diff = Math.round(Math.random() * diffusion);
		setRandomHeights([
			...randomHeights,
			frameHeight + diff
		]);
	}, [col, diffusion, frameHeight, randomHeights]);

	return { randomHeights };
}
