import {AuthPhone} from "./AuthPhone";
import {AuthDesktop} from "./AuthDesktop";
import {Loading} from "../Screens/Loading";
import {useState} from "react";

export function Auth() {

    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
        setIsLoading(false)
    }, 800);
        if (!isLoading) {
            return(
                <div style={{backgroundColor:"#E5E5E5"}}>
                    <div className="hidden md:block"><AuthDesktop/></div>
                    <div className="md:hidden"><AuthPhone/></div>
                </div>
            )
        } else {
            return (<Loading/>)
        }
}