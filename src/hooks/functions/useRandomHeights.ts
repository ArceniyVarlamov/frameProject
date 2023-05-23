import { useState, useEffect, useCallback, useRef } from "react";
import useFramesInfo from "../../utils/info/useFramesInfo";

export default function useRandomHeights(
	frameHeight: number,
	diffusion: number,
	framesPerLoad: number = 1,
) {
	const { framesLoaded } = useFramesInfo();
	const randomHeights = useRef<number[]>([]);

	const getHeights = useCallback(() => {
		
		for (let i = randomHeights.current.length; i < framesLoaded * framesPerLoad; i++) {
			randomHeights.current = [...randomHeights.current, 400, 400];
		}
	}, [framesLoaded, framesPerLoad, randomHeights]);

	useEffect(() => {
		getHeights();
	}, [framesLoaded, getHeights]);

	return { randomHeights: randomHeights.current };
}
