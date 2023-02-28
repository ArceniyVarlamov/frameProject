import { useCallback, useState } from "react";

export default function Error({ err }: { err: string }) {
	const [show, setShow] = useState(true);

	setTimeout(() => {
		setShow(false);
	}, 7000);

	return err && show ? (
		<div className='error' onClick={() => setShow(false)}>
			{err}
		</div>
	) : (
		<></>
	);
}
