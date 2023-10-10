import React, { useState } from "react";

// don't change the Component name "App"
export default function App() {
  const [messageTittle, setMessageTittle] = useState("Invalid");

  function messageChangeHandler(event) {
    const value = event.target.value;
    if (value.trim().length < 3) {
      setMessageTittle("Invalid");
    } else {
      setMessageTittle("Valid");
    }
  }
  function messageClicked() {
    setMessageTittle((preVale) => (preVale = 1));
  }
  const submitClicked = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitClicked}>
      <label>Your message</label>
      <input type="text" onChange={messageChangeHandler} />
      <p>{messageTittle} message</p>
      <button onClick={messageClicked}>Increase</button>
    </form>
  );
}
