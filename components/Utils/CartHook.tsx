import {useEffect, useState} from "react";

export function makeStateAsLocalStorage() {

    let [state, setState] = useState({})
    useEffect(() => {
        if (localStorage.getItem('ShoppingCard') || '{}' === null) {
            let count = JSON.parse(localStorage.getItem('ShoppingCard') || '{}')
            const nonDuplicatedData: any = [];
            count.map((x: any) => {
                if (!nonDuplicatedData[x.id]) {
                    nonDuplicatedData[x.id] = x;
                }
            });
            const filteredData = nonDuplicatedData.filter((n: any) => {
                return n != undefined
            });
            state = filteredData
            setState({...state})
        } else {
            window.localStorage.setItem('ShoppingCard', "[]")
        }
    }, []);
    return [state, setState];
}