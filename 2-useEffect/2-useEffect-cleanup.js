import React, { useState, useEffect } from "react";

// cleanup function - this will elimitate unwanted re-renders on useEffect
// second argument - in this case, [] will have just the same result

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);

    //this is the cleanup function
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });
  // }, []);

  console.log("render");
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;

//simple cleanup exemple
useEffect(() => {
  window.addEventListener("resize", checkSize);
  return () => window.removeEventListener("resize", checkSize);
}, []);
