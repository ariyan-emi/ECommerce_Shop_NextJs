'use client'
import {ProductsPage} from "../../../components/Screens/ProductsPage";
import store from "../../../components/Redux/store";
import {Provider} from "react-redux";
import Header from "../../../components/Navigating/Header";
import {SetData} from "../../../components/Utils/SetData";

export default function Home() {
    return (
        <Provider store={store}>
            <SetData/>
            <Header/>
            <ProductsPage/>
        </Provider>
    )
}
