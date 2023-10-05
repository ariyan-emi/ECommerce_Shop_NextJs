import * as React from "react";
import Eyes from "../Eyes/Eyes";
import Link from "next/link";

export default function Footer() {

    return (
        <>
            <footer className="mt-0 md:mt-12 mx-auto w-full relative text-center bg-violet-950 text-white">
                <Eyes/>
                <div className="px-6 py-4 md:py-7 lg:pt-14 xl:pb-6">
                    <h2 className="lg:hidden font-bold text-3xl xl:text-4xl leading-snug">
                        Ready to Buy the Best Products?<br />Buy Choices
                    </h2>
                    <a className="mt-8 md:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-blue-600 rounded-full shadow-xl border border-transparent hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
                       href="Products">Best Buy</a>
                    <div className="mt-8 md:mt-10">
                        <nav className="flex flex-wrap justify-center text-lg font-medium">
                            <div className="px-5 py-2"><Link href="contact">Contact</Link></div>
                            <div className="px-5 py-2"><Link href="privacy">Privacy & Policy</Link></div>
                            <div className="px-5 py-2"><Link href="terms">Terms & Conditions</Link></div>
                            <div className="px-5 py-2"><Link href="https://github.com/ariyan-emi">GitHub</Link></div>
                            <div className="px-5 py-2"><Link href="www.linkedin.com/in/ariyan-emami-8b99a3251">Linkedin</Link></div>
                        </nav>
                        <p className="mt-7 text-base">Copyright © 2023 <a href="https://webvave.ir/" className="text-yellow-400">WebVaVe</a></p>
                    </div>
                </div>
            </footer>
        </>
    )
};

