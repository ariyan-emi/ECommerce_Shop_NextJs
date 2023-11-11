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
        <div>
            <Provider store={store}>
                <SetData/>
                <Header/>
                <MainPage/>
            </Provider>
            <Footer/>
        </div>
    )
}
