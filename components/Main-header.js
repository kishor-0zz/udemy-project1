import Link from 'next/link';
import React from 'react';
import  heade from './heade.module.css'

const Header = () => {
   return (
      <div>
         <div className={heade.logo}>
            <Link href='/' >
               <h2>brand</h2>
            </Link>
         </div>
         <nav>
            <ul>
               <li>
                  <Link href="/home" >home</Link>
                  <Link href="/home" >home</Link>
                  <Link href="/home" >home</Link>
                  <Link href="/home" >home</Link>
                  <Link href="/home" >home</Link>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Header;