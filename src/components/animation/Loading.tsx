export function Loading({ loading }: { loading: boolean }) {
  if (loading) {
    return <div className='main__loading'></div>;
  } else {
    return <></>;
  }
}
