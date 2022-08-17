import React from "react";
import useInputState from "./hooks/useInputState";

export default function Forms() {
  const [userName, setUserName, resetUserName] = useInputState();
  return (
    <>
      <h1>Forms Practice</h1>
      <input
        type="text"
        value={userName}
        placeholder="username"
        onChange={setUserName}
      />
      <button onClick={resetUserName}>submit</button>
    </>
  );
}
