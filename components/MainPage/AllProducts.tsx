"use client"
import React, {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";
import {round} from "@floating-ui/utils";

export function AllProducts() {
    const [dataMen, setDataMen] = useState<any>([]);
    const [dataWomen, setDataWomen] = useState<any>([]);
    const [dataAccessories, setDataAccessories] = useState<any>([]);
    const fetchInfoMen = () => {
        return axios.get('https://fakestoreapi.com/products/category/men\'s%20clothing').then((res) => setDataMen(res.data));
    };
    const fetchInfoWomen = () => {
        return axios.get('https://fakestoreapi.com/products/category/women\'s%20clothing').then((res) => setDataWomen(res.data));
    };
    const fetchInfoAccessories = () => {
        return axios.get('https://fakestoreapi.com/products/category/jewelery').then((res) => setDataAccessories(res.data));
    };
    useEffect(() => {
        fetchInfoMen();
        fetchInfoWomen();
        fetchInfoAccessories();
    }, []);
    return(
        <>
            <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                {dataMen.map((dataObj:any) => {
                    return (
                        <Link href={`products/${dataObj.id}`}>
                            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                <a href="#">
                                    <img
                                        src={dataObj.image}
                                        alt="Product" className="h-80 w-72 object-cover rounded-t-xl"/>
                                    <div className="px-4 py-3 w-72">
                                        <span className="text-gray-400 mr-3 uppercase text-xs">{dataObj.category}</span>
                                        <p className="text-lg font-bold text-black truncate block capitalize">{dataObj.title}</p>
                                        <div className="flex items-center">
                                            <p className="text-lg font-semibold text-black cursor-auto my-3">{dataObj.price}</p>
                                            <del>
                                                <p className="text-sm text-gray-600 cursor-auto ml-2">{round(dataObj.price + 8)}</p>
                                            </del>
                                            <div className="ml-auto">
                                                <Link href={`products/${dataObj.id}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                         fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div> </Link>
                    );
                })}
                {dataAccessories.map((dataObj:any) => {
                    return (
                        <Link href={`products/${dataObj.id}`}>
                            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                <a href="#">
                                    <img
                                        src={dataObj.image}
                                        alt="Product" className="h-80 w-72 object-cover rounded-t-xl"/>
                                    <div className="px-4 py-3 w-72">
                                        <span className="text-gray-400 mr-3 uppercase text-xs">{dataObj.category}</span>
                                        <p className="text-lg font-bold text-black truncate block capitalize">{dataObj.title}</p>
                                        <div className="flex items-center">
                                            <p className="text-lg font-semibold text-black cursor-auto my-3">{dataObj.price}</p>
                                            <del>
                                                <p className="text-sm text-gray-600 cursor-auto ml-2">{round(dataObj.price + 8)}</p>
                                            </del>
                                            <div className="ml-auto">
                                                <Link href={`products/${dataObj.id}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                         fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div> </Link>
                    );
                })}
                {dataWomen.map((dataObj:any) => {
                    return (
                        <Link href={`products/${dataObj.id}`}>
                            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                <a href="#">
                                    <img
                                        src={dataObj.image}
                                        alt="Product" className="h-80 w-72 object-cover rounded-t-xl"/>
                                    <div className="px-4 py-3 w-72">
                                        <span className="text-gray-400 mr-3 uppercase text-xs">{dataObj.category}</span>
                                        <p className="text-lg font-bold text-black truncate block capitalize">{dataObj.title}</p>
                                        <div className="flex items-center">
                                            <p className="text-lg font-semibold text-black cursor-auto my-3">{dataObj.price}</p>
                                            <del>
                                                <p className="text-sm text-gray-600 cursor-auto ml-2">{round(dataObj.price + 8)}</p>
                                            </del>
                                            <div className="ml-auto">
                                                <Link href={`products/${dataObj.id}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                         fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div> </Link>
                    );
                })}
            </section>
        </>
    )
}