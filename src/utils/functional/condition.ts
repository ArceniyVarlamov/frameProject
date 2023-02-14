const conditional = ({
  src,
  alt = "",
  addStart = "",
  addEnd = "",
  slice = undefined,
}: {
  src: string | number | undefined | null;
  alt?: string;
  addStart?: string;
  addEnd?: string;
  slice?: number;
}) => {
  const output = src ? src.toString() : alt;
  let slicing = output;
  if (output.slice(0, slice).length < output.length) {
    slicing = output.slice(0, slice) + "...";
  }
  return src ? addStart + slicing + addEnd : slicing;
};

export default conditional