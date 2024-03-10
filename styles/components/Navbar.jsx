'use client';

import { Navbar } from 'flowbite-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
export default function Header() {
  const { data: session } = useSession();
  if (session) {
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
          <Link href="/favourite-movie" className="text-xl">
            Favourite
          </Link>
          <Link href="/dashbord" className="text-xl">
            Dashbord
          </Link>
          <Link href="/api/auth/signout" className="text-xl">
            sign out
          </Link>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
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
          <Link href="/api/auth/signin" className="text-xl">
            Login
          </Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
