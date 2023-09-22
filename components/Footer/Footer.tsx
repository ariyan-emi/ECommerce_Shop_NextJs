import Link from "next/link";
import ImageNext from 'next/image'
import * as React from "react";
import Logo from '../../assets/icon/logo.png';

export default function Footer() {

    return (
       <>
           <div className="flex flex-wrap bg-gray-500 opacity-80 wrap border-2 border-solid border-yellow-300 border-r-0 border-l-0 border-b-0">
               <div style={{flexGrow:3}} className="w-28 my-5 mx-5">
                   <h3 className="font-bold">About Us and More</h3><br/>
                   <Link href="about-us" className="text-white"><h5>About Us</h5></Link><br/>
                   <Link href="privacy-policy" className="text-white"><h5>Privacy Policy</h5></Link><br/>
                   <Link href="terms-of-service" className="text-white"><h5>Terms of Service</h5></Link><br/>
               </div>
               <div style={{flexGrow:3}} className="w-28 text-left my-5 mx-5">
                   <Link href="products"><h3 className="font-bold">Products</h3></Link><br/>
                   <Link href="men" className="text-white"><h5>Men</h5></Link><br/>
                   <Link href="women" className="text-white"><h5>Women</h5></Link><br/>
                   <Link href="accessories" className="text-white"><h5>Accessories</h5></Link><br/>
               </div>
               <div style={{flexGrow:4}} className="hidden md:block w-28 my-5 mx-5">
                   <ImageNext
                       src={Logo}
                       alt="Web VaVe Shop Logo"
                       height={75}
                       width={75}
                   />
                   <p className="text-gray-100"><a href="https://webvave.ir/" className="text-lg font-bold text-violet-700">VaVe Shop</a><br/>is a contemporary clothing store in the heart of downtown that offers chic and stylish clothing for both men and women. <br/>From romantic lace and flowy maxi dresses to edgy leather jackets and timeless trench coats, this store has something for everyone.</p>
               </div>
           </div>
           <div className="text-lg bg-gray-500 text-white text-center border-yellow-300  border-2 border-solid border-b-0 border-r-0 border-l-0 px-5">
               <span className="mb-5">Copyright © 2023 <a href="https://webvave.ir/" className="text-yellow-400">WebVaVe</a></span>
           </div>
       </>
    )
};

