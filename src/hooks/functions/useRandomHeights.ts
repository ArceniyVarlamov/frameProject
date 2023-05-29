import { useState, useEffect, useCallback, useRef } from "react";
import useFramesInfo from "../../utils/info/useFramesInfo";

export default function useRandomHeights(
	frameHeight: number,
	diffusion: number,
	framesPerLoad: number = 1,
	framesLength: number
) {
	const { framesLoaded } = useFramesInfo();
	const [randomHeights, setRandomHeights] = useState<number[]>([]);
	const [initialHeight, setInitialHeight] = useState(frameHeight)
	// работает, но при сильно долгом скроле появляется вероятность разности высот
	// TODO доделать хук
	useEffect(() => {
		let heights: number[] = []
		let heightsValue = 0
		for (let i = framesLength; i < framesPerLoad * framesLoaded; i++) {
			
			let randomHeigth = Math.round(Math.random() * diffusion)
			if (frameHeight + randomHeigth > initialHeight / framesLength * framesPerLoad) {
				heights = [...heights, frameHeight - randomHeigth]
				heightsValue += frameHeight - randomHeigth
			} else {
				heights = [...heights, frameHeight + randomHeigth]
				heightsValue += frameHeight + randomHeigth
			}
		}
		setRandomHeights([...randomHeights, ...heights])
		setInitialHeight(initialHeight + heightsValue)
		
	}, [diffusion, frameHeight, framesLength, framesLoaded, framesPerLoad]);

	return { randomHeights };
}
