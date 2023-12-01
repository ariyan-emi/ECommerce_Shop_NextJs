'use client'
import {About} from "../../../components/Screens/About";
import {SetData} from "../../../components/Utils/SetData";
import {Provider} from "react-redux";
import store from "../../../components/Redux/store";

export default function Home() {
  return (
      <Provider store={store}>
        <SetData/>
        <About/>
      </Provider>
  )
}
