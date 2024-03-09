'use client';

import { Navbar } from 'flowbite-react';
import Link from 'next/link';

export default function Header() {
  return (
    <Navbar fluid rounded className=" border-b-2">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-2xl font-semibold ">
          Movie Popcorn
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link href="/home" className="text-xl">
          Home
        </Link>
        <Link href="/login" className="text-xl">
          Login
        </Link>
        <Link href="/register" className="text-xl">
          Register
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
