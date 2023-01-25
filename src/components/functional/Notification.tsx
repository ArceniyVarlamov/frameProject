import { useEffect, useState } from "react";

export default function Correct({
  correct=true,
  message = "",
}: {
  correct: boolean;
  message: string;
}) {
  return correct ? <></> : <div className='correct'>{message}</div>;
}
