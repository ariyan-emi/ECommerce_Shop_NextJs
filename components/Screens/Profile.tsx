'use client'
import {useRouter} from "next/navigation";
import {signOut} from "@firebase/auth";
import {auth} from "../../firebase/firebase";
import {useSelector} from "react-redux";
import {getIsAuth} from "../Redux/slices/isAuthSlice";
import {useState} from "react";
import {Loading} from "./Loading";

export function Profile() {
    const router = useRouter()
    function Logout() {
        signOut(auth).then(() => router.push('/auth'));
    }
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
        setIsLoading(false)
    }, 800);

    if (!isLoading) {
        return (
            <>
                <button onClick={Logout}> logout</button>
            </>
        )
    } else {
        return (<Loading/>)
    }
}