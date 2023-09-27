import {useState} from "react";
import {LocalStorage} from "../Service/LocalStorage";

export function Cart() {
    console.log(LocalStorage())
    let GetItemsFromStorage = LocalStorage();

    return(
        <>
            {GetItemsFromStorage.map((items:any) => <>
                {items.id}
            </>)}
        </>
    )
}