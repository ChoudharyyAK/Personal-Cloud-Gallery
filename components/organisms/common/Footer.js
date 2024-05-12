import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai"
import { BsLinkedin } from "react-icons/bs"
import { FaDev } from "react-icons/fa"
import Logo from "../../../src/images/logo.png"
import styles from '@/styles/Navbar.module.css'


export default function Footer() {

  return (
    <footer className="bg-black">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-col justify-center gap-4 md:flex-row items-center -mx-5 -my-2">
        <div className="px-5 py-2">
            <Link href="/home" className='text-white rounded-lg border border-white px-4 py-2 hover:bg-white hover:text-slate-800'>Home</Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/folders/navigation" className='text-white rounded-lg border border-white px-4 py-2 hover:bg-white hover:text-slate-800'>Gallery</Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/contacts" className='text-white rounded-lg border border-white px-4 py-2 hover:bg-white hover:text-slate-800'>Contacts</Link>
          </div>
          
        </nav>
        
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2024 CloudGallery, Inc. All rights reserved.
        </p>
        <div className="flex justify-center">
          <Image src={Logo} className={`${styles.logo} rounded-full`} alt="logo" />
        </div>
      </div>
    </footer>
  );
}
