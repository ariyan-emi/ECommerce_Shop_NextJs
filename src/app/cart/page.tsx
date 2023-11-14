'use client'
import {Cart} from "../../../components/Cart/Cart";
import store from "../../../components/Redux/store";
import {Provider} from "react-redux";
import {SetData} from "../../../components/Utils/SetData";

export default function Home() {
    return (
        <Provider store={store}>
            <SetData/>
            <Cart/>
        </Provider>
    )
}
