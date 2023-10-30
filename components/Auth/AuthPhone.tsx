import React, {useState} from "react";
import Logo from "../../assets/icon/logo.png";
import Image from "next/image";

export function AuthPhone(){
    let [state,setState] =useState("login")
    if (state == "login"){
        return(
            <></>
        )
    }
}