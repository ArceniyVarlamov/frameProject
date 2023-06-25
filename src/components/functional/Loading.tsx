export default function Loading({ loading }: { loading: boolean }) {
	return loading ? <div className='loader'></div> : <></>;
}
