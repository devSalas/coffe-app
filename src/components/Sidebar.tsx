'use client'
/* 
import { MouseEvent, useRef } from "react";

function Sidebar() {
    const showMenu = useRef("")
    const handleClick = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
        showMenu.current.classList.toogle('inset-0')
    }
    return (<div  className="fixed inset-0 w-screen h-screen bg-black text-white p-4">
        <div className="relative">
        <svg ref={showMenu} onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 absolute right-0">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
        </svg>
        </div>

    </div>);
}

export default Sidebar; */
import React, { MouseEvent, useRef } from "react";

function Sidebar() {
  const showMenu = useRef<HTMLDivElement>(null);
  const showClose = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    if (showMenu.current) {
        showMenu.current.classList.toggle("hidden");
    }
  };

  return (
    <div className="sm:hidden">
      <div ref={showMenu} className="fixed hidden inset-0  bg-black text-white p-4 ">
        <div className="relative">
          <svg

            onClick={handleClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 absolute right-0 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clipRule="evenodd"
            />
          </svg>

        </div>
      </div>
      <svg
        onClick={handleClick}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
}

export default Sidebar;
