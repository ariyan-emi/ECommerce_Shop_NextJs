"use client"
import Logo from '../../assets/icon/logo.png';
import Image from 'next/image'
import "../../src/app/globals.css"
import Link from "next/link";
import PersonIcon from '../../assets/icon/minicon/person.png';
import ShoppingBagIcon from '../../assets/icon/minicon/cart.png';
import Menu from '../../assets/icon/minicon/menu.png';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import React, {useEffect, useState} from "react";
import Badge from '@mui/material/Badge';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    let [notification,setNotification]=useState<any[]>()
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    useEffect(() => {
        if (localStorage.getItem('ShoppingCard') || '{}' === null) {
            let count = JSON.parse(localStorage.getItem('ShoppingCard') || '{}')
            const nonDuplicatedData: any = [];
            count.map((x: any) => {
                if (!nonDuplicatedData[x.id]) {
                    nonDuplicatedData[x.id] = x;
                }
            });
            const filteredData = nonDuplicatedData.filter((n: any) => {
                return n != undefined
            });
            notification = filteredData
            setNotification(filteredData)
        } else {
            window.localStorage.setItem('ShoppingCard', "[]")
        }
    }, [notification]);
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
            <div className="hidden md:flex mx-8 mt-8 justify-center align-middle z-10">
                <Link href=""
                      className="mx-5 hover:border-t-2 border-solid border-violet-700 hover:border-0">Products</Link>
                <Link href="" className="mx-5 hover:border-t-2 border-solid border-violet-700 hover:border-0">About
                    Us</Link>
                <Link href="" className="mx-5 hover:border-t-2 border-solid border-violet-700 hover:border-0">Contact
                    US</Link>
            </div>
            <div className="mt-8 md:mx-8 flex-nowrap z-10 flex">
                <a href='cart' className="mx-1">
                            <Badge anchorOrigin={{vertical: 'top', horizontal: 'left'}} badgeContent={(() => {
                                if (notification !== undefined) {
                                    return notification.length
                                }else {
                                    return 0
                                }
                            })()}
                                color="secondary" overlap="circular">
                                <Image alt="icon image for Cart page" src={ShoppingBagIcon}
                                       className="lg:w-10 lg:h-10 w-8 h-8 mr-3 "/>
                            </Badge>
                </a>
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
    )
};


