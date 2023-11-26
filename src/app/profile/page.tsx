'use client'
import {Profile} from "../../../components/Screens/Profile";
import {Provider} from "react-redux";
import store from "../../../components/Redux/store";
import {SetData} from "../../../components/Utils/SetData";

export default function Home() {
  return (
      <body style={{backgroundColor:"#E5E5E5"}}>
      <Provider store={store}>
        <SetData/>
    <Profile/>
      </Provider>
      </body>
  )
}
