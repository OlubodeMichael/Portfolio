import React from "react";

export function SkillsCard({ skill }) {
  return (
    <div className="flex py-2.5 px-5 sm:px-2 bg-zinc-300 text-gray-700 justify-center items-center rounded border gap-2.5">
      <p>{skill}</p>
    </div>
  );
}
