import * as React from "react";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {UseButton} from "./Button";
import {ShowAlert} from "../Utils/Utils";
import {getAllProducts} from "../Redux/slices/productsSlice";
import {auth} from "../../firebase/firebase";
import {addToCartAsync, isItemInCart} from "../Redux/slices/shoppingCartSlice";
import {getIsAuth} from "../Redux/slices/isAuthSlice";
import {useRouter} from "next/navigation";

export function SimilarProducts({category, id}: any) {
    let data = useSelector(getAllProducts);
    data = data.filter((item:any) => item['category'] == category);
    let similar = Object.values(data).filter((item: any) => item['id'] !== Number(id))

    if (similar !== null) {
        return (
            <>
                <section id="Projects"
                         className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center justify-center gap-y-9 gap-x-14 mt-4 mb-5 md:mt-10 md:mb-5">
                    {Object.values(similar).slice(0, 2).map((data: any, index: number) => {
                        return (
                        <div key={index}>
                            <ShowProducts data={data}/>
                        </div>
                        )
                    })}
                </section>
            </>
        )
    }
}
function ShowProducts({data}:any) {
    let uid: string;
    if (auth.currentUser !== null) {
        uid = auth.currentUser.uid;
    }
    const isAuth = useSelector(getIsAuth);
    const isInCart = useSelector(isItemInCart(Number(data.id)));
    const dispatch = useDispatch();
    const router = useRouter()
    // @ts-ignore
    function addToCart(Product:any) {
        if (isAuth) {
            // @ts-ignore
            dispatch(addToCartAsync(Product, auth.currentUser.uid));
            return;
        }

        router.push('/auth')
    }

    return(
        <>
            <div className="rounded-2xl h-fit">
                <div className="bg-white h-[300px] mb-3">
                    <Link href={`/products/${data.id}`}>
                        <img src={data.image}
                             alt="Product" className="h-72 w-72 rounded-t-xl mb-5"/>
                    </Link>
                </div>
                {(() => {
                    if (!isInCart) {
                        if (isAuth) {
                            return (
                                <UseButton className={"w-full rounded-xl bg-violet-700 py-1 font-medium hover:bg-violet-900 text-white disabled:bg-gray-500"} display={'Buy Now'} onClick={() =>{
                                    addToCart(data)
                                    ShowAlert('An Amazing Choice!',"Product successfully added to the cart","success")
                                }} disable={false}/>
                            )
                        } else {
                            return (
                                <UseButton className={"w-full rounded-xl bg-violet-700 py-1 font-medium hover:bg-violet-900 text-white disabled:bg-gray-500"} display={'Login'} onClick={() => {}} disable={true}/>
                            )
                        }
                    } else {
                        return (
                            <UseButton className={"w-full rounded-xl bg-gray-400 py-1 font-medium hover:bg-gray-600 text-white disabled:bg-gray-500"} display={'Have It'} onClick={() => {}} disable={true}/>
                        )
                    }
                })()}
            </div>
        </>
    )
}