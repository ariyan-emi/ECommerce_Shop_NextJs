'use client'
import {Auth} from "../../../components/Auth/Auth";
import {Provider} from "react-redux";
import store from "../../../components/Redux/store";
import {SetData} from "../../../components/Utils/SetData";
import Header from "../../../components/Navigating/Header";

export default function Home() {

            return(
                <body style={{backgroundColor:"#E5E5E5"}}>
                <Provider store={store}>
                    <SetData/>
                    <Header/>
                    <Auth/>
                </Provider>
                </body>)

}
