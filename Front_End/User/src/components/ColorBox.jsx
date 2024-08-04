import React, { useState } from "react";

export const colors = [
  { id: 0, code: "#fff" },
  { id: 1, code: "#FF0000" },
  { id: 2, code: "#000" },
];

const ColorBox = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">COLORS</h1>
      <div className="flex gap-3">
        {colors.map((item) => (
          <div
            onClick={() => setSelectedColor(item.id)}
            className={`p-3 rounded-full ring-2 ring-offset-1  ${
              selectedColor === item.id ? "ring-red-500" : "ring-slate-300"
            }`}
            style={{ backgroundColor: `${item.code}` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorBox;
