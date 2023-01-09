export function Error({ err }: { err: string }) {
  if (err) {
    return <div className='error'>{err}</div>;
  } else {
    return <></>;
  }
}
