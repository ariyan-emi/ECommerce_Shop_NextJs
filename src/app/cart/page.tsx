'use client'
import {Cart} from "../../../components/Cart/Cart";
import store from "../../../components/Redux/store";
import {Provider} from "react-redux";

export default function Home() {
  return (
      <Provider store={store}>
      <body style={{backgroundColor:"#E5E5E5"}}>
    <Cart/>
      </body>
      </Provider>
  )
}
