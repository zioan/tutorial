import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
// if used, the second paramether, [] (empty array) is empty, the useEffect will run only on the initial render and then will not re-render !!!
// if the second paramether is set ( for exemple [value]), the useEffect will run on initial render and also ONLY every time that paramether / dependency ([value]) is changing !!!
// useEffect can be used (setup) multiple times in the same component without restrictions

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //this will run on initial render and also every time [value] is changing
  useEffect(() => {
    console.log("call useEffect");
    if (value !== 0) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  //this will run only on initial render
  useEffect(() => {
    console.log("run only on initial render");
  }, []);

  //this will run on initia render and every time the component re-render
  useEffect(() => {
    console.log("run on re-renders");
  });

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
