export function Error({ err }: { err: string }) {

  return (
    <div className='main__frame error'>{err}</div>
  );
}