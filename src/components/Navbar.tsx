import React from "react";
import { Input } from "./ui/input";
import wileyLogo from "../assets/Wiley Logo Alta.svg";
import alta from "../assets/Alta Logo.svg";
import { MenuIcon, ShoppingCart, User } from "lucide-react";
import path from "path";
import { Button } from "./ui/button";

const Navbar = () => {
  const navLinks = [
    { name: "Courses", path: "/" },
    { name: "Featuers", path: "/" },
    { name: "Affordability", path: "/" },
    { name: "Community & Resources", path: "/" },
    { name: "Partners", path: "/" },
  ];
  return (
    <div className="">
      <div className="bg-secwhite flex items-center justify-between py-3 px-padLR">
        <h1 className="h-8">
          <img
            src={wileyLogo}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </h1>
        <form>
          <Input
            type="text"
            placeholder="Search Wiley for what you are looking for"
            className="h-14 border-2 outline-none border-black px-6 text-lg py-4 w-[40rem]"
          />
        </form>
        <div className="flex items-center gap-6">
          <User size={25} />
          <ShoppingCart size={25} />
          <MenuIcon size={25} />
        </div>
      </div>
      <div className="flex items-center justify-between py-2 px-padLR">
        <img src={alta} alt="" className="object-cover object-center  h-8" />
        <ul className="flex items-center gap-6 font-bold text-base">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.path} className="text-gray-700 hover:text-gray-900">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <Button className="bg-[#123D80] rounded-none py-6 px-3">Sign In</Button>
      </div>
    </div>
  );
};

export default Navbar;
