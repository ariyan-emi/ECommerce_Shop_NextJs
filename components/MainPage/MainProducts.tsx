"use client"
import * as React from "react";
import {useEffect, useState} from "react";
import Link from "next/link";
import Button from '@mui/material/Button';
import {Fade, Grow, GrowProps} from "@mui/material";
import {TransitionProps} from "@mui/material/transitions";
import {useDispatch} from "react-redux";
import {addToCart} from "../Redux/cartSlice";
import {ShowAlert} from "../Utils/Utils";
import {UseButton} from "../Screens/Button";
import {useData} from "../../firebase/useData";
import {Loading, Network} from "./ProductsBug";

function GrowTransition(props: GrowProps) {
    return <Grow {...props} />;
}
export function MainProducts({Category}: any) {
    let data =  useData("Products")
    const [isLoading, setIsLoading] = useState("true");
    useEffect(() => {
        console.log(data)
            if (data.length !== 0) {
                    setIsLoading("false")
            }else {
                setTimeout(
                    function() {
                        setIsLoading("network")
                    }, 3800);
            }
    }, [isLoading]);
    const [state, setState] = React.useState<{
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

    const dispatch = useDispatch();
    if (Category == "men"){
        data = data.filter((item:any) => item['category'] == "men");
    }else if (Category == "women"){
        data = data.filter((item:any) => item['category'] == "women");
    }else if (Category == "jewelery"){
        data = data.filter((item:any) => item['category'] == "jewelery");
    }
    if (isLoading == "false"){
        return(
            <>
                <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                    {data.map((data:any,index:number) => {
                        return (
                            <div key={index} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                <Link href={`products/${data.id}`}>
                                    <img
                                        src={data.image}
                                        alt="Product" className="h-80 w-72 rounded-t-xl"/>
                                    <div className="px-4 py-3 w-72">
                                        <span className="text-gray-400 mr-3 uppercase text-xs">{data.category}</span>
                                        <p className="text-lg font-bold text-black truncate block capitalize">{data.title}</p>
                                        <div className="flex items-center">
                                            <p className="text-lg font-semibold text-black cursor-auto my-3">{data.price.toFixed(2)}</p>
                                            <del>
                                                <p className="text-sm text-gray-600 cursor-auto ml-2">{data.price.toFixed(2)}</p>
                                            </del>
                                            <div className="ml-auto">
                                                <Button className="hover:bg-white" onClick={handleClick(GrowTransition)}>
                                                    <UseButton className="hover:text-violet-950" display={<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="font-bold w-8 h-8 hover:w-10 hover:h-10 bi bi-bag-plus" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/></svg>} onClick={(e:any)=>{
                                                        e.preventDefault();
                                                        dispatch(addToCart({data: data}))
                                                        ShowAlert('An Amazing Choice!',"Product successfully added to the cart","success")
                                                    }} diable={false}/>

                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </section>
            </>
        )
    }else if (isLoading == "true") {
       return <Loading/>
    }else{
        return <Network/>
    }

}