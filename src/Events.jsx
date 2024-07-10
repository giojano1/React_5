import React from "react";

const Events = () => {
  function handleConsoleLog() {
    console.log("Clicked");
  }
  const handleConsoleName = (firstname) => {
    console.log(`Hello ${firstname}`);
  };
  const handleClick = (event) => {
    console.log(event);
  };
  return (
    <div>
      <h1>Events</h1>
      <button onClick={handleConsoleLog}>click me</button>
      <button
        onClick={() => {
          handleConsoleName("giorgi");
        }}
      >
        click me
      </button>
      <button
        onClick={(event) => {
          handleClick(event);
        }}
      >
        daachre
      </button>
      <input
        type="text"
        onChange={(event) => console.log(event.target.value)}
      />
      <a
        href="#"
        onClick={(event) => {
          event.preventDefault();
          console.log("prevent");
        }}
      ></a>
      <div
        onMouseMove={(event) =>
          console.log(`mouse x : ${event.clientX}, mouse y : ${event.clientY}`)
        }
      ></div>
    </div>
  );
};

export default Events;
