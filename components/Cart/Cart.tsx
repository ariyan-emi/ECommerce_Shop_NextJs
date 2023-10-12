'use client'
import {EmptyCart} from "./EmptyCart";
import {useEffect, useState} from "react";
import {ShoppingCard} from "./ShoppingCard";
import {Checkout} from "../Checkout/Checkout";
import {Invoice} from "../Invoice/Invoice";

export function Cart() {
    let [showComponent,setShowComponent] =useState("cart")

    return (
        <>
            {(() => {
                 if (showComponent == "cart") {
                    return (
                        <>
                            <ShoppingCard Component={showComponent} setComponent={setShowComponent}/>
                        </>
                    )
                }else if (showComponent == "checkout") {
                    return (
                        <>
                            <Checkout Component={showComponent} setComponent={setShowComponent}/>
                        </>
                    )
                }else if (showComponent == "invoice") {
                    return (
                        <>
                            <Invoice />
                        </>
                    )
                }else if (showComponent == "empty") {
                    return (
                        <EmptyCart/>
                    )
                }else {
                     return (
                         <EmptyCart/>
                     )
                 }
            })()}
            <style jsx>{`
              .visibleClass {
                animation: OpenCart 1s ease-out forwards;
              }

              @keyframes OpenCart {
                0% {
                  opacity: 0.4
                }
                100% {
                  opacity: 1
                }
              }`}</style>
        </>
    )
}