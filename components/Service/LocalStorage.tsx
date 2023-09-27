import {useEffect} from "react";

export function LocalStorage() {
    if (localStorage.getItem('ShoppingCard')){
        let count = JSON.parse(localStorage.getItem('ShoppingCard') || '{}')
        const nonDuplicatedData:any = [];
        count.map((x:any) => {
            if (!nonDuplicatedData[x.id]){
                nonDuplicatedData[x.id] = x;
            }
        });
        const filteredData = nonDuplicatedData.filter((n:any)  => {return n != undefined});
        return filteredData
    }else{
        localStorage.setItem('ShoppingCard', "[]" )
        return '';
    }
}
