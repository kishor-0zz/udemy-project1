"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
const path = usePathname();
   return (
      <li>
         <Link href={href} className={path.startsWith(href)?"active":"undefind"}>
         {children}
         </Link>
      </li>
   );
};

export default NavLink;