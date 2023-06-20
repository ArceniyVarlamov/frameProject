import { useState } from "react";
import CreateCollection from './CreateCollection';

export default function Create() {
	const [collection, setCollection] = useState(false);

	return (
		<>
      {collection && <CreateCollection></CreateCollection>}
			<div className='create'>
				<div className='create__collection' onClick={() => setCollection(true)}>Create new collection</div>
			</div>
		</>
	);
}
