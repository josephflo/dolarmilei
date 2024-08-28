import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white h-14">
      <ul className="flex items-center justify-center h-full ">
        <Link href="/">
          <h1 className="text-xl">DolarAzul</h1>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
