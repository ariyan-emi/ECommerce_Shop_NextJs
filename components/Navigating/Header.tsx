"use client"
import Logo from '../../assets/icon/logo.png';
import Image from 'next/image'
import "../../src/app/globals.css"
import Link from "next/link";
import PersonIcon from '../../assets/icon/minicon/person.png';
import Menu from '../../assets/icon/minicon/menu.png';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import React, {useState} from "react";
import {Provider} from "react-redux";
import store from "../Redux/store";
import {BadgeCart} from "./Badge";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <Provider store={store}>
        <>
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
            <div className="hidden md:flex mx-8 mt-8 justify-center align-middle z-10">
                <Link href=""
                      className="mx-5 hover:border-t-2 border-solid border-violet-700 hover:border-0">Products</Link>
                <Link href="" className="mx-5 hover:border-t-2 border-solid border-violet-700 hover:border-0">About
                    Us</Link>
                <Link href="" className="mx-5 hover:border-t-2 border-solid border-violet-700 hover:border-0">Contact
                    US</Link>
            </div>
            <div className="mt-8 md:mx-8 flex-nowrap z-10 flex">
                    <BadgeCart/>
                <Link href="" className="mx-1"><Image alt="icon image for Personal page" src={PersonIcon}
                                                      className="lg:w-10 lg:h-10 w-8 h-8 mr-3"/></Link>
                <Image alt="icon image for Personal page" onClick={toggleDrawer} src={Menu}
                       className="md:hidden mx-1 lg:w-10 lg:h-10 w-8 h-8 z-10"/>

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
        </>
        </Provider>
    )
};


