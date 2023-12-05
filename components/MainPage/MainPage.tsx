"use client"
import BannerPc from '../../assets/banner/BannerPc.png';
import BannerPhone from '../../assets/banner/BannerPhone.png';
import ImageNext from 'next/image'
import * as React from 'react';
import Link from "next/link";
import {useState} from "react";
import {Provider} from "react-redux";
import store from "../Redux/store";
import {MainProducts} from "./MainProducts";
import {Brands} from "./Brands";

export default function MainPage() {
    let [state,setState]=useState("all")
    return (
        <Provider store={store}>
        <>

            <div className="hidden md:flex md:-top-24 relative w-full lg:-top-44 overflow-y: scroll;">
                <ImageNext
                    className="-z-10"
                    src={BannerPc}
                    alt="Banner offer 30%"
                />
                <Link href={"products"} className="hidden md:flex sm:bottom-2 absolute left-12 md:bottom-14">
                    <button
                        className="bg-violet-700 hover:bg-violet-950 shadow-2xl text-white font-bold py-2 px-4 rounded-full">
                        Go For Nice Buy Today
                    </button>
                </Link>
            </div>

            <div className="md:hidden w-full relative -top-24">
                <ImageNext
                    className="-z-10"
                    src={BannerPhone}
                    alt="Banner offer 30% on mobile"
                />
                <Link href={"products"} className="md:hidden absolute right-2 bottom-16">
                    <button
                        className="bg-violet-700 hover:bg-violet-950 shadow-2xl text-white font-bold py-2 px-4 rounded-full">
                        Nice Buy
                    </button>
                </Link>
            </div>


            <div className="flex-col md:flex-row flex-wrap flex justify-center -mt-16 md:-mt-24">
                <button
                    onClick={()=>{
                        state='all';
                        setState("all")
                    }}
                    className="mx-5 mt-4 md:mt-0 px-12 py-3 text-sm font-medium text-violet-600 border border-violet-600 rounded bg-violet-100 hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
                    All Products
                </button>
                <button
                    onClick={()=>{
                        state = 'accessories'
                        setState('accessories')
                    }}
                    className="mx-5 mt-4 md:mt-0 px-12 py-3 text-sm font-medium text-violet-600 border border-violet-600 rounded bg-violet-100 hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
                    Accessory
                </button>
                <button
                    onClick={()=>{
                        state = 'men'
                        setState('men')
                    }}
                    className="mx-5 mt-4 md:mt-0 px-12 py-3 text-sm font-medium text-violet-600 border border-violet-600 rounded bg-violet-100 hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
                    Men
                </button>
                <button
                    onClick={()=>{
                        state = 'women'
                        setState('women')
                    }}
                    className="mx-5 mt-4 md:mt-0 px-12 py-3 text-sm font-medium text-violet-600 border border-violet-600 rounded bg-violet-100 hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
                    Women
                </button>
            </div>
            <div>
                {
                    {
                        'all':<MainProducts Category={"all"}/>,
                        'men' : <MainProducts Category={"men"}/>,
                        'women':<MainProducts Category={"women"}/>,
                        'accessories':<MainProducts Category={"jewelery"}/>,
                    }[state]
                }
            </div>
            <Brands/>
        </>
</Provider>
    );
};

