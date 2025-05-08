import React from "react";

const BadgeSkill = ({ Icon, label }) => {
  return (
    <div className="border px-4 py-2 rounded-xl flex items-center gap-4 w-max cursor-pointer hover:scale-105 duration-300 ease-in-out">
      <Icon size={24} /> {label}
    </div>
  );
};

export { BadgeSkill };
