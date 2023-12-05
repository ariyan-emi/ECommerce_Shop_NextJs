'use client'
import {ProductsPage} from "../../../components/Screens/ProductsPage";
import store from "../../../components/Redux/store";
import {Provider} from "react-redux";
import {SetData} from "../../../components/Utils/SetData";

export default function Home() {
    return (
        <body style={{backgroundColor:"#E5E5E5"}}>
        <Provider store={store}>
            <SetData/>
            <ProductsPage/>
        </Provider>
        </body>
    )
}
