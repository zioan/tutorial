import React, { useState } from "react";
//inside the return, if statemens cannot be used. Instead we can use short-circuit evaluation or ternary operator

// short-circuit evaluation (|| &&)

const ShortCircuit = () => {
  const [text, setText] = useState("");

  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}

      {/* if the text is true (in this case defined), the text value is displayed, else the data that come after || will be the default one */}
      <h1>{text || "john doe"}</h1>

      {/* if the text is true then is displayed the h1, else nothing is displayed */}
      {text && <h1>hello there</h1>}

      {/* opposed */}
      {!text && <h1>hello there</h1>}
    </>
  );
};

export default ShortCircuit;

// ternary operator
const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? <p>There is an error</p> : <h2>there is no error</h2>}
    </>
  );
};

export default ShortCircuit;
