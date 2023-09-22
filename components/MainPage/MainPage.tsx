"use client"
import BannerPc from '../../assets/banner/bannerPc.png';
import BannerPhone from '../../assets/banner/bannerPhone.png';
import ImageNext from 'next/image'
import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import Brand1 from '../../assets/icon/Brands/asos-design-logo_256_v4.jpg';
import Brand2 from '../../assets/icon/Brands/adidas-hp-logos-256x256---v2.png';
import Brand3 from '../../assets/icon/Brands/topman_logo_256x128_v3.png';
import Brand4 from '../../assets/icon/Brands/new-balance-hp-logos-256x256v2.png';
import Brand5 from '../../assets/icon/Brands/jack-jones-hp-logos-256x256v2.png';
import Brand6 from '../../assets/icon/Brands/north-face.png';
import {useState} from "react";
import {Women} from "./Women";
import {Men} from "./Men";
import {AllProducts} from "./AllProducts";
import {Accessories} from "./Accessories";



const images = [
    {
        url: 'https://webvave.ir/temp/men.jpg',
        title: 'Men',
        href: 'men',
        width: '25%',
    },
    {
        url: 'https://webvave.ir/temp/acsesory.jpg',
        title: 'Accessories',
        href: 'accessories',
        width: '50%',
    },
    {
        url: 'https://webvave.ir/temp/women.jpg',
        title: 'Women',
        href: 'women',
        width: '25%',
    },
];

const ImageButton = styled(ButtonBase)(({theme}) => ({
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 200,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({theme}) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({theme}) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({theme}) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));
export default function MainPage() {
    let [state,setState]=useState("All")
    return (
        <>
            <div className="hidden md:flex md:-top-24 relative w-full lg:-top-44">
                <ImageNext
                    className="-z-10"
                    src={BannerPc}
                    alt="Banner offer 30%"
                />
                <a href="products" className="hidden md:flex sm:bottom-2 absolute left-12 md:bottom-14">
                    <button
                        className="bg-violet-700 hover:bg-violet-950 shadow-2xl text-white font-bold py-2 px-4 rounded-full">
                        Go For Nice Buy Today
                    </button>
                </a>
            </div>

            <div className="md:hidden w-full relative -top-24">
                <ImageNext
                    className="-z-10"
                    src={BannerPhone}
                    alt="Banner offer 30% on mobile"
                />
                <a href="products" className="md:hidden absolute right-2 bottom-16">
                    <button
                        className="bg-violet-700 hover:bg-violet-950 shadow-2xl text-white font-bold py-2 px-4 rounded-full">
                        Nice Buy
                    </button>
                </a>
            </div>


            <div className="relative bottom-20 md:bottom-24">
                <Box sx={{display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%'}}>
                    {images.map((image) => (

                        <ImageButton
                            focusRipple
                            key={image.title}
                            style={{
                                width: image.width,
                            }}
                        >
                            <Link href={image.href}>
                                <ImageSrc style={{backgroundImage: `url(${image.url})`}}/>
                                <ImageBackdrop className="MuiImageBackdrop-root"/>
                                <Image>
                                    <Typography
                                        component="span"
                                        variant="subtitle1"
                                        color="inherit"
                                        sx={{
                                            position: 'relative',
                                            p: 4,
                                            pt: 2,
                                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                        }}
                                    >
                                        {image.title}
                                        <ImageMarked className="MuiImageMarked-root"/>
                                    </Typography>
                                </Image>
                            </Link>
                        </ImageButton>

                    ))}
                </Box>
            </div>

            <div className="flex-col md:flex-row flex-wrap flex justify-center">
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
                        state = 'accessory'
                        setState('accessory')
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
                        state = 'Women'
                        setState('Women')
                    }}
                    className="mx-5 mt-4 md:mt-0 px-12 py-3 text-sm font-medium text-violet-600 border border-violet-600 rounded bg-violet-100 hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
                    Women
                </button>
            </div>
            <div>
                {
                    {
                        'All':<AllProducts/>,
                        'men' : <Men/>,
                        'women':<Women/>,
                        'accessories':<Accessories/>,
                    }[state]
                }
            </div>
                <ul className="flex flex-wrap justify-center">
                    <li>
                        <ImageNext className="m-5 w-16 lg:w-28 xl:w-36"
                                   src={Brand1}
                                   alt="ASOS Design"/>
                    </li>
                    <li>
                        <ImageNext className="m-5 w-16 lg:w-28 xl:w-36"
                                   src={Brand2}
                                   alt="The North Face"/>
                    </li>
                    <li>

                        <ImageNext className="m-5 w-16 lg:w-28 xl:w-36"
                                   src={Brand3}
                                   alt="Topman"/>
                    </li>
                    <li>
                        <ImageNext className="m-5 w-16 lg:w-28 xl:w-36"
                                   src={Brand4}
                                   alt="New Balance"/>
                    </li>
                    <li>

                        <ImageNext className="m-5 w-16 lg:w-28 xl:w-36"
                                   src={Brand5}
                                   alt="Jack and Jones"/>

                    </li>
                    <li>
                        <ImageNext className="m-5 w-16 lg:w-28 xl:w-36"
                                   src={Brand6}
                                   alt="Adidas"/>

                    </li>
                </ul>
        </>
    );
};

