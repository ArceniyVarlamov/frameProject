import { useState } from "react";
import CreateCollection from './CreateCollection';

export default function Create() {
	const [createForm, setCreateForm] = useState(false);

	return (
		<>
      <CreateCollection show={createForm} setShow={setCreateForm}/>
			<div className='create'>
				<div className='create__collection' onClick={() => setCreateForm(true)}>Create new collection</div>
			</div>
		</>
	);
}
