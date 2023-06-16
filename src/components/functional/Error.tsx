import useFunctionsInfo from "../../utils/info/useFunctionsStoreInfo";
import { useDispatch } from "react-redux";
import { removeError } from "../../store/functionsSlice";
import cross from '../../images/black_bold_cross.png'

export default function Error() {
	const { errors } = useFunctionsInfo();

	const dispatch = useDispatch();

	return (
		<div className='errors'>
			{errors.map((item, i) => (
				<div className='errors__error'>
					<p>{item}</p>
					<img src={cross} alt="-" onClick={() => dispatch(removeError(i))}/>
				</div>
			))}
		</div>
	);
}
