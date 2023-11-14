'use client'
import {Auth} from "../../../components/Auth/Auth";
import {Provider} from "react-redux";
import store from "../../../components/Redux/store";
import {SetData} from "../../../components/Utils/SetData";

export default function Home() {

            return(
                <Provider store={store}>
                    <SetData/>
                    <Auth/>
                </Provider>)

}
