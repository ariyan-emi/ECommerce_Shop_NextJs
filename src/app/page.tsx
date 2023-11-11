'use client'
import './globals.css'
import Header from "../../components/Navigating/Header";
import MainPage from "../../components/MainPage/MainPage";
import Footer from "../../components/Navigating/Footer";
import {Provider} from "react-redux";
import store from "../../components/Redux/store";
import {SetData} from "../../components/Utils/SetData";

export default function Home() {

    return (
        <body style={{backgroundColor:"#E5E5E5"}}>
            <Provider store={store}>
                <SetData/>
                <Header/>
                <MainPage/>
            </Provider>
            <Footer/>
        </body>
    )
}
