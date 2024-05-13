"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import  heade from './heade.module.css'

const Header = () => {

   const path = usePathname();

   return (
      <div>
         <div className={heade.logo}>
            <Link href='/'>
               <h2>brand</h2>
            </Link>
         </div>
         <nav>
            <ul>
               <li>
                  <Link href="/home" className={path==="/home"?"active":'undefind'} >home</Link>
                  <Link href="/about" >about</Link>
                  <Link href="/service" >service</Link>
                  <Link href="/blog" >blog</Link>
                  <Link href="/contact" >contace</Link>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Header;