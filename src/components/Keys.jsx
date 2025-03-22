import React from "react";

function Keys({ label, keyclass }) {
  const equalClass = "bg-emerald-500 col-[span_2] font-semibold hover:bg-emerald-600 text";
  return (
    <div className={` p-3 flex items-center justify-center text-black bg-emerald-100 rounded-xl hover:bg-amber-300 cursor-pointer ${keyclass && equalClass }`}>
      {label}
    </div>
  );
}

export default Keys;
