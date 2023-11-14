
import {useState} from "react";
import {useSelector} from "react-redux";
import {getIsAuth} from "../Redux/slices/isAuthSlice";
import {useRouter} from "next/navigation";



export function Cart() {
    let [showComponent,setShowComponent] =useState("cart")
    const isAuth = useSelector(getIsAuth);
    const router = useRouter()
    if (!isAuth){
        router.push('/auth')
    }
    return (

        <>


        </>

    )
}