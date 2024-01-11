"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from 'react';
import { ILink } from "@/Interface";

function Navbar() {
   const path = usePathname(); 

 

   const links: ILink[] = [
    {id:0, to:'/', title: "Home"},
    {id:1, to:'/page', title: "Page"},
    {id:2, to:'/services', title: "Services"},
    {id:3, to:'/projects', title: "Projects"},
    {id:4, to:'/blog', title: "Blog"},
    {id:5, to:'/contact', title: "Contact"}
   ]
  return (
    <div className='navbar'>
<div className="container">
 <div className="row justify-around align-items-center">
 <div>
    <Link href="/" className="logo">
    <Image src="./Logo.svg" alt="logo" width={180} height={180} />
    </Link>
  </div>
<div>
{links.map(({ id, to, title }) => {
    return (
      <Link className={path === to ? "active" : ""} href={to} key={id}>
        {title}
      </Link>
    );
})}
</div>
 </div>
</div>
    </div>
  )
}

export default Navbar;