import * as React from "react";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {UseButton} from "./Button";
import {ShowAlert} from "../Utils/Utils";
import {getAllProducts} from "../Redux/slices/productsSlice";

export function SimilarProducts({category, id}: any) {
    let data = useSelector(getAllProducts);
    const dispatch = useDispatch();
    data = data.filter((item:any) => item['category'] == category);
    let similar = Object.values(data).filter((item: any) => item['id'] !== Number(id))
    if (similar !== null) {
        return (
            <>
                <section id="Projects"
                         className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center justify-center gap-y-9 gap-x-14 mt-4 mb-5 md:mt-10 md:mb-5">
                    {Object.values(similar).slice(0, 2).map((data: any, index: number) => {
                        return (
                            <div className="rounded-2xl h-fit" key={index}>
                                <div className="bg-white h-[300px] mb-3">
                                <Link href={`/products/${data.id}`} key={index}>
                                    <img src={data.image}
                                         alt="Product" className="h-72 w-72 rounded-t-xl mb-5"/>
                                </Link>
                                </div>
                                <UseButton className={"w-full rounded-xl bg-violet-700 py-1 font-medium hover:bg-violet-900 text-white disabled:bg-gray-500"} display={'Buy Now'} onClick={() =>{
                                    // dispatch(addToCart({data: data}))
                                    ShowAlert('An Amazing Choice!',"Product successfully added to the cart","success")
                                }} disable={false}/>
                            </div>
                        )
                    })}
                </section>
            </>
        )
    }
}