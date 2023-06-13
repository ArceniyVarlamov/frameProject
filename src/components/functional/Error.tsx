import { useCallback, useEffect, useState } from "react";
import useFunctionsInfo from "../../utils/info/useFunctionsInfo";
import { useDispatch } from "react-redux";
import { removeError } from "../../store/functionsSlice";

export default function Error() {
	const { errors } = useFunctionsInfo();

	const dispatch = useDispatch();

	useEffect(() => {
		setInterval(() => {
			dispatch(removeError(0));
		}, 3000);
	}, []);

	return (
		<div className='errors'>
			{errors.map((item, i) => (
				<div className='errors__error' onClick={() => dispatch(removeError(i))}>
					{item}
				</div>
			))}
		</div>
	);
}
