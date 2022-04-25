import React from "react";

export const RedirectLink = () => {
  return (
      <span className="inline-block">
    <svg
      width="14px"
      height="14px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 6L18 6L18 16"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    </span>
  );
};
function contact() {
  return (
    <div className="flex flex-col items-center justify-center text-lg font-bold">
      <div className="card flex flex-col w-[92vw] h-[85vh] md:w-[32rem] md:h-[32rem] items-center justify-center gap-4 ">
        <a href='https://www.behance.net/robiuaadufe' rel="noreferrer" target='_blank'><div className="">Robiu Adepoju Adufe - Product Designer <RedirectLink/></div></a>
        <a href='https://github.com/kaydist' rel="noreferrer" target='_blank'><div className="inline-block">Oseni Omokayode - UI / Firebase Development <RedirectLink/></div></a>
      </div>
    </div>
  );
}

export default contact;
