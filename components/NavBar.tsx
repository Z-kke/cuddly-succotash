"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type Link = {
  href: string;
  name: string;
};

const NavBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const links: Link[] = [
    { href: "/blog", name: "Blog" },
    { href: "/about", name: "About" },
    { href: "/contact", name: "Contact" },
  ];

  return (
    <div className="fixed w-full bg-black top-0 z-50">
      <div className="flex justify-between items-center p-4">
        <Link href="/">
          <Image
            src="/favicon.ico"
            alt="Home"
            className="dark:invert cursor-pointer"
            width={50}
            height={24}
            priority
          />
        </Link>
        <div className="hidden md:flex">
          {links.map((link) => {
            console.log(link);
            return (
              <Link href={link.href} key={link.name}>
                <p
                  className={clsx(
                    "text-white inline-block mr-4 text-2xl font-semibold cursor-pointer",
                    {
                      "bg-white text-black": link.href === pathname,
                    }
                  )}
                >
                  {link.name}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleDrawer(true)}
            className="text-white"
            aria-label="menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-black transform ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleDrawer(false)}
            className="text-white"
            aria-label="close"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-col items-start p-4">
          <Link href="/blog">
            <p className="text-white text-xl mb-4 cursor-pointer">Blog</p>
          </Link>
          <Link href="/about">
            <p className="text-white text-xl mb-4 cursor-pointer">About</p>
          </Link>
          <Link href="/contact">
            <p className="text-white text-xl mb-4 cursor-pointer">Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
