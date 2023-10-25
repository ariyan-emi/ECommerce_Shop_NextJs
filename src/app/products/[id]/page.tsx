import {ProductScreen} from "../../../../components/Screens/ProductScreen";
import Header from "../../../../components/Navigating/Header";

export default function Products({params}:{params:{id:number}}) {
    const id = params.id
    return(
        <>
        <ProductScreen id={id}/>
        </>
    )
}