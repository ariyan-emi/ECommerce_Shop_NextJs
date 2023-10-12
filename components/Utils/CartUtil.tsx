import {useEffect, useState} from "react";

export function GetState() {
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
    return state
}
export function ClearAll() {
    localStorage.setItem('ShoppingCard', "[]")
    window.location.reload();
}
export function ClearSelected(id: number) {
    let items = JSON.parse(localStorage.getItem('ShoppingCard') || '{}')
    items = items.filter((item: any) => item.id !== id);
    localStorage.setItem("ShoppingCard", JSON.stringify(items));
    if (items.length === 0) {
        localStorage.removeItem("ShoppingCard");
    }
}
export function CounterPlus(LocalCounter: any, id: number, indexItem: number,count:any,setCount:any) {
    let localData: any = localStorage.getItem('ShoppingCard');
    let newList = JSON.parse(localData)
    let index = newList.findIndex((item: any) => item.id === id)
    let LocalItems = newList[indexItem].count++;
    localStorage.setItem("ShoppingCard", JSON.stringify(newList));
    count = newList;
    setCount(newList);
}
export function CounterSubtract(LocalCounter: any, id: number, indexItem: number,count:any,setCount:any) {
    let localData: any = localStorage.getItem('ShoppingCard');
    let newList = JSON.parse(localData)
    let index = newList.findIndex((item: any) => item.id === id)
    if (newList[indexItem].count > 1) {
        let LocalItems = newList[indexItem].count--;
    } else {
        let LocalItems = newList[indexItem].count;
    }
    localStorage.setItem("ShoppingCard", JSON.stringify(newList));
    count = newList;
    setCount(newList);
}
export function GetPrice(index: number) {
    let localData: any = localStorage.getItem('ShoppingCard');
    let newList = JSON.parse(localData)
    return newList[index].price
}
export function TotalProducts(index: number) {
    let localData: any = localStorage.getItem('ShoppingCard');
    let newList = JSON.parse(localData)
    return newList[index].count * newList[index].price
}
export function GetTaxes() {
    return Number(1.99)
}

export function AllTotal() {
    const state = GetState()
    let dataChanger: any = state;
    let filteredData = dataChanger;
    if (filteredData!) {
        const sum = Object.values(state).map((datum: any, index: number) => Number(filteredData[index]["count"]) * Number(filteredData[index]["price"]))
        return (sum.reduce((a: any, b: any) => a + b, 0).toFixed(2))
    } else {
        return 1
    }
}
export function GetProducts() {
    const state = GetState()
    let filteredData: any;
    return Object.values(state).map((datum: any, index: number) => filteredData[index])
}
export function stateMap() {
    const state = GetState()
     return  Object.values(state).map((key: any, value: number) => key)
}