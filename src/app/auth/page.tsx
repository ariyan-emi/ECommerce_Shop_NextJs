'use client'
import {AuthDesktop} from "../../../components/Auth/AuthDesktop";
import {AuthPhone} from "../../../components/Auth/AuthPhone";
import {useState} from "react";
import {Loading} from "../../../components/Screens/Loading";
export default function Home() {

    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
        setIsLoading(false)
    }, 500);
    if (!isLoading){
            return(<AuthPhone/>)
    }
    else {
        return(<Loading/>)
    }

}
