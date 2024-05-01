import { useRef } from "react";

export default () => {
  const recordAnswers = useRef<string[]>([]);
  const setRecordAnswers = (str: string) => {
    recordAnswers.current = [...recordAnswers.current, str];
  };
  return {
    recordAnswers: recordAnswers.current,
    setRecordAnswers,
  };
};
