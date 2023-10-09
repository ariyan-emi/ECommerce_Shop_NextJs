"use client"
import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide, {SlideProps} from '@mui/material/Slide';
import {Alert, Fade, Grow, GrowProps} from "@mui/material";
import {TransitionProps} from "@mui/material/transitions";

function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="up" />;
}

function GrowTransition(props: GrowProps) {
    return <Grow {...props} />;
}
export function Accessories() {
    const [data, setData] = useState<any>([]);
    const fetchInfo = () => {
        return axios.get('https://fakestoreapi.com/products/category/jewelery').then((res) => setData(res.data));
    };

    useEffect(() => {
        fetchInfo();
    }, []);const [state, setState] = React.useState<{
        open: boolean;
        Transition: React.ComponentType<
            TransitionProps & {
            children: React.ReactElement<any, any>;
        }
        >;
    }>({
        open: false,
        Transition: Fade,
    });

    const handleClick =
        (
            Transition: React.ComponentType<
                TransitionProps & {
                children: React.ReactElement<any, any>;
            }
            >,
        ) =>
            () => {
                setState({
                    open: true,
                    Transition,
                });
            };

    const handleClose = () => {
        setState({
            ...state,
            open: false,
        });
    };
    let counter = 0;
    function getProductInfo(dataObject:any){
        // course info
        const ProductInfo = {
            count:1,
            id: dataObject.id,
            title: dataObject.title,
            price: dataObject.price.toFixed(2),
            description:dataObject.description,
            category:dataObject.category,
            image: dataObject.image,
            rating:dataObject.rating,
        }


        // adding the course to the cart
        addToCart(ProductInfo)
    }
    function addToCart(Products:any) {
        // get array of courses from storage
        let courses = getFromStorage()

        // add the new course to the array of courses
        courses.push(Products)

        localStorage.setItem('ShoppingCard', JSON.stringify(courses) )

    }
    function getFromStorage(){
        let courses;

        // if courses exist before
        if (localStorage.getItem('ShoppingCard')) {
            courses = JSON.parse(localStorage.getItem('ShoppingCard') || '{}')
        } else {
            courses = []
        }

        return courses
    }
    return(
        <>
            <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                {data.map((dataObj:any,index:number) => {
                    return (
                        <div key={index} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                            <Link href={`products/${dataObj.id}`}>
                                <img
                                    src={dataObj.image}
                                    alt="Product" className="h-80 w-72 rounded-t-xl"/>
                                <div className="px-4 py-3 w-72">
                                    <span className="text-gray-400 mr-3 uppercase text-xs">{dataObj.category}</span>
                                    <p className="text-lg font-bold text-black truncate block capitalize">{dataObj.title}</p>
                                    <div className="flex items-center">
                                        <p className="text-lg font-semibold text-black cursor-auto my-3">{dataObj.price.toFixed(2)}</p>
                                        <del>
                                            <p className="text-sm text-gray-600 cursor-auto ml-2">{dataObj.price.toFixed(2)}</p>
                                        </del>
                                        <div className="ml-auto">
                                            <Button className="hover:bg-white" onClick={handleClick(GrowTransition)}>
                                                <button className="hover:text-violet-950" onClick={(e)=>{
                                                    e.preventDefault();
                                                    getProductInfo(dataObj)
                                                }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         fill="currentColor" className="font-bold w-8 h-8 hover:w-10 hover:h-10 bi bi-bag-plus" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                                    </svg>
                                                </button>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </section>
            <Snackbar open={state.open} autoHideDuration={3000} onClose={handleClose} TransitionComponent={state.Transition}
                      key={state.Transition.name}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Item Added To Cart
                </Alert>
            </Snackbar>
        </>
    )
}