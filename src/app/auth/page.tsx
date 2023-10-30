'use client'
import {AuthDesktop} from "../../../components/Auth/AuthDesktop";
import {AuthPhone} from "../../../components/Auth/AuthPhone";
import useWindowDimensions from "../../../components/Utils/Utils";
import {useState} from "react";
import {Loading} from "../../../components/Screens/Loading";
export default function Home() {
    const { width, height }:any = useWindowDimensions();
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
        setIsLoading(false)
    }, 500);
    if (!isLoading){
        if (width > 640){
            return(<AuthDesktop/>)
        }else {
            return(<AuthPhone/>)
        }
    }
    else {
        return(<Loading/>)
    }

}