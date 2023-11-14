'use client'
import {Profile} from "../../../components/Screens/Profile";
import {Provider} from "react-redux";
import store from "../../../components/Redux/store";

export default function Home() {
  return (
      <Provider store={store}>
    <Profile/>
      </Provider>
  )
}
