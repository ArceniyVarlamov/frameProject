import { useState } from "react";

export default function Error({ err }: { err: string }) {
  const [show, setShow] = useState(true);
  return err && show ? (
    <div className='error' onClick={() => setShow(false)}>
      {err}
    </div>
  ) : (
    <></>
  );
}
