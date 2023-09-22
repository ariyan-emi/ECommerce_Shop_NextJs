"use client"
import Logo from '../../assets/icon/logo.png';
import Image from 'next/image'
import "../../src/app/globals.css"
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import {useState} from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <div className="flex justify-between h-24">
            <div className="md:mx-8 mt-4 z-10">
                <a href="https://webvave.ir/">
                    <Image
                        src={Logo}
                        width={75}
                        height={75}
                        alt="Logo of Website"
                    />
                </a>
            </div>
            <div className="hidden md:flex mx-8 mt-7 justify-center align-middle z-10">
                <Link href="" className="mx-5">Products</Link>
                <Link href="" className="mx-5">About Us</Link>
                <Link href="" className="mx-5">Contact US</Link>
            </div>
            <div className="mt-8 md:mx-8 flex-nowrap z-10">
                <Link href="" className="mx-1"><ShoppingBagIcon className="w-10 h-10"/></Link>
                <Link href="" className="mx-1"><PersonIcon className="w-10 h-10"/></Link>
                <button onClick={toggleDrawer} className="md:hidden mx-1"><DensityMediumIcon className="w-10 h-10 z-10"/>
                </button>
                <Drawer style={{borderBottom: "3px solid #FBAF42"}} open={isOpen} onClose={toggleDrawer}
                        direction='top'>
                    <div
                        className="flex flex-col font-bold text-2xl justify-center text-center align-middle  flex-wrap z-10">
                        <Link href="" className="mx-5 mt-8">About Us</Link>
                        <Link href="" className="mx-5 mt-8">Contact US</Link>
                        <Link href="" className="mx-5 mt-8">Products</Link>
                    </div>
                </Drawer>
            </div>
        </div>
    )
};

