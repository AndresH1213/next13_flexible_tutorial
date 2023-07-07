import { NavLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AuthProviders from './AuthProviders';

type Props = {};

const Navbar = (props: Props) => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={155} height={43} alt="Flexibble" />
        </Link>
        {NavLinks.map((link) => {
          return (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          );
        })}
        <ul className="xl:flex hidden text-small gap-7"></ul>
      </div>

      <div className="flexCenter gap-4">
        {session ? (
          <>
            UserPhoto
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
