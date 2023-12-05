import ImageNext from "next/image";
import Brand1 from "../../assets/icon/Brands/asos-design-logo_256_v4.png";
import Brand2 from "../../assets/icon/Brands/jack-jones-hp-logos-256x256v2.png";
import Brand3 from "../../assets/icon/Brands/new-balance-hp-logos-256x256v2.png";
import Brand4 from "../../assets/icon/Brands/north-face.png";
import Brand5 from "../../assets/icon/Brands/adidas-hp-logos-256x256---v2.png";
import Brand6 from "../../assets/icon/Brands/topman_logo_256x128_v3.png";
import * as React from "react";

export function Brands() {
    return (
        <div>
            <ul className="flex flex-wrap justify-center">
                <li>
                    <ImageNext className="m-5 w-16 md:w-24 lg:w-28 xl:w-36 hover:hidden"
                               src={Brand1}
                               alt="ASOS Design"/>
                </li>
                <li>
                    <ImageNext className="m-5 w-16 md:w-24 lg:w-28 xl:w-36"
                               src={Brand2}
                               alt="The North Face"/>
                </li>
                <li>

                    <ImageNext className="m-5 w-16 md:w-24 lg:w-28 xl:w-36"
                               src={Brand3}
                               alt="Topman"/>
                </li>
                <li>
                    <ImageNext className="m-5 w-16 md:w-24 lg:w-28 xl:w-36"
                               src={Brand4}
                               alt="New Balance"/>
                </li>
                <li>

                    <ImageNext className="m-5 w-16 md:w-24 lg:w-28 xl:w-36"
                               src={Brand5}
                               alt="Jack and Jones"/>

                </li>
                <li>
                    <ImageNext className="m-5 w-16 md:w-24 lg:w-28 xl:w-36"
                               src={Brand6}
                               alt="Adidas"/>

                </li>
            </ul>
            <ul className="hidden md:flex flex-wrap justify-center">
                <li>
                    <ImageNext className="m-5 w-16 md:w-24 lg:w-28 xl:w-36"
                               src={Brand6}
                               alt="Adidas"/>

                </li>
                <li>

                    <ImageNext className="m-5 w-16 md:w-24 lg:w-28 xl:w-36"
                               src={Brand5}
                               alt="Jack and Jones"/>

                </li>
                <li>
                    <ImageNext className="m-5 w-16 md:w-24 lg:w-28 xl:w-36"
                               src={Brand4}
                               alt="New Balance"/>
                </li>
                <li>

                    <ImageNext className="m-5 w-16 md:w-24 lg:w-28 xl:w-36"
                               src={Brand3}
                               alt="Topman"/>
                </li>
                <li>
                    <ImageNext className="m-5 w-16 md:w-24 lg:w-28 xl:w-36"
                               src={Brand2}
                               alt="The North Face"/>
                </li>
                <li>
                    <ImageNext className="m-5 w-16 md:w-24 lg:w-28 xl:w-36"
                               src={Brand1}
                               alt="ASOS Design"/>
                </li>
            </ul>
        </div>
    )
}