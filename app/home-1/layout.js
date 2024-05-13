"use client"
import Link from "next/link";
import logo from "@/public/vercel.svg"
import Image from "next/image";
import home1 from "./home-1.module.css"
import { usePathname } from "next/navigation";
import NavLink from "@/components/NavLink";

export default function HomeLayout1 ({children}){
   const path = usePathname();
   return(
      <div className={home1.home} >
         <div  className="logo">
            <Link href="/">
               <Image src={logo} alt="logo" priority />
            </Link>
         </div>
         <nav>
            <ul>
               <NavLink href="/home-1">home</NavLink>
               <NavLink href="/about">about</NavLink>
               <NavLink href="/service">service</NavLink>
            </ul>
         </nav>
      {children}
      </div>
   )
}