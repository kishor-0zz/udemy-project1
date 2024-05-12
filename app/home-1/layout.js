import Link from "next/link";
import logo from "@/public/vercel.svg"
import Image from "next/image";
import home1 from "./home-1.module.css"

export default function HomeLayout1 ({children}){
   return(
      <div className={home1.home} >
         <div  className="logo">
            <Link href="/">
               <Image src={logo} alt="logo" priority />
            </Link>
         </div>
         <nav>
            <ul>
               <li>
                  <Link href='/'>home</Link>
                  <Link href='/'>home</Link>
                  <Link href='/'>home</Link>
                  <Link href='/'>home</Link>
                  <Link href='/'>home</Link>
               </li>
            </ul>
         </nav>
      {children}
      </div>
   )
}