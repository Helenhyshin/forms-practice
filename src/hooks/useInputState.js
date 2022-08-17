import { useState } from "react";

export default function useInputState(initialVal = "") {
  const [inputState, setInputState] = useState(initialVal);

  const handleChange = (evt) => {
    setInputState(evt.target.value);
  };
  const reset = () => {
    setInputState("");
  };
  return [inputState, handleChange, reset];
}
