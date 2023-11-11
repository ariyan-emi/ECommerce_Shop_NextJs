'use client'
import {useRouter} from "next/navigation";
import {signOut} from "@firebase/auth";
import {auth} from "../../firebase/firebase";

export function Profile() {
    const router = useRouter()
    function Logout() {
        signOut(auth).then(() =>  router.push('/auth'));
    }
    return(
        <>
<button onClick={Logout}> logout</button>
        </>
    )
}