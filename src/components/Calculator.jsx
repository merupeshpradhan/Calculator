import React, { useState } from "react";
import Keys from "./Keys";

function Calculator() {
  const keys = [
    "AC",
    "C",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    ".",
    "0",
    "=",
  ];

  const [showResult, setShowResult] = useState(false);
  const [display, setDisplay] = useState("");

  const maxLimit = 15;

  function claculatorResult() {
    if (display.length !== 0) {
      try {
        let calcResult = eval(display);
        calcResult = parseFloat(calcResult.toFixed(3));
        setDisplay(calcResult);
        setShowResult(true);
      } catch (error) {
        setDisplay("Error");
      }
    } else {
      setDisplay("");
    }
  }

  function handleButton(value) {
    setShowResult(false);
    if (value == "AC") {
      setDisplay("");
    } else if (value == "C") {
      setDisplay(display.slice(0, -1));
    } else if (isOperator(value)) {
      if (display == "" || isOperator(display[display.length - 1])) return;
      setDisplay(display + value);
    } else if (value === "=") {
      claculatorResult();
    } else if (display.length >= maxLimit) {
      alert(`Maximum character allowed :${maxLimit}`);
    } else {
      setDisplay(display + value);
    }
  }

  function isOperator(char) {
    return ["*", "/", "%"].includes(char);
  }

  const operationClass =
    "text-lg tracking-wide flex gap-1 item-center text-zinc-600 justify-end";
  const resultClass = "text-2xl";

  return (
    <div className="min-w-[20%] bg-emerald-300 p-4 rounded-2xl flex flex-col">
      <div className="text-black overflow-x-auto bg-emerald-100 min-h-[90px] flex justify-end items-end flex-col p-4 rounded-[10px]">
        <div className={`${showResult ? resultClass : operationClass}`}>
          {display}
        </div>
      </div>
      <div className="mt-5 grid grid-cols-4 gap-4">
        {keys.map((item, index) => (
          <Keys
            label={item}
            key={index}
            keyclass={item === "=" ? "equals" : ""}
            onButtonClick={handleButton}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
