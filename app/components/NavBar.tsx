import { AppBar, Toolbar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "black", top: 0, zIndex: 1100 }}
    >
      <Toolbar className="flex justify-between">
        <Link href="/" passHref>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </Link>
        <div>
          <Link href="/about" passHref>
            <p className="text-white inline-block mr-4 text-2xl font-semibold">
              About
            </p>
          </Link>
          <Link href="/contact" passHref>
            <p className="text-white inline-block mr-4 text-2xl font-semibold">
              Contact
            </p>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
