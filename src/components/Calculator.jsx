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

  const operationClass =
    "text-lg tracking-wide flex gap-1 item-center text-zinc-600 justify-end";
  const resultClass = "text-2xl";

  return (
    <div className="min-w-[20%] bg-emerald-300 p-4 rounded-2xl flex flex-col">
      <div className="text-black overflow-x-auto bg-emerald-100 min-h-[90px] flex justify-end items-end flex-col p-4 rounded-[10px]">
        <div className={`${showResult ? resultClass : operationClass}`}>
          RESULT
        </div>
      </div>
      <div className="mt-5 grid grid-cols-4 gap-4">
        {keys.map((item, index) => (
          <Keys
            label={item}
            key={index}
            keyclass={item === "=" ? "equals" : ""}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
