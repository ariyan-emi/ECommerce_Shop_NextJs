import {makeStateAsLocalStorage} from "./CartHook";

export function ClearAll() {
    localStorage.setItem('ShoppingCard', "[]")
    window.location.reload();
}
export function ClearSelected(id: number) {
    [state, setState] = makeStateAsLocalStorage()
    let items = Object.values(state);
    items = items.filter((item: any) => item.id !== id);
    localStorage.setItem("ShoppingCard", JSON.stringify(items));
    setState(items)
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
    let filteredData: any;
    const sum = Object.values(state).map((datum: any, index: number) => filteredData[index]);
    return sum
}
export function stateMap() {
     return  Object.values(state).map((key: any, value: number) => key)
}