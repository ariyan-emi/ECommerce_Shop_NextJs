'use client'
import {ProductScreen} from "../../../../components/Screens/ProductScreen";
import store from "../../../../components/Redux/store";
import {Provider} from "react-redux";

export default function Products({params}:{params:{id:number}}) {
    const id = params.id
    return(
        <Provider store={store}>
            <ProductScreen id={id}/>
        </Provider>
    )
}