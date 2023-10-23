'use client'
import {useState} from 'react';
import Fedex from '../../assets/icon/Brands/FedEx.svg';
import AmazonFresh from '../../assets/icon/Brands/AmazonFresh.png';
import Image from "next/image";
import Link from "next/link";
import DeleteIcon from '@mui/icons-material/DeleteForever';
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart} from "../Redux/cartSlice";
import {GetTaxes} from "../Utils/cartUtils";
import HomeIcon from "@mui/icons-material/Home";
import {getState} from "../Redux/infoSlice";

export function Checkout({Component, setComponent}: any) {

    let [enable, setEnable] = useState({email: '',address: '',name: ''})
    const [fade, setFade] = useState(false)

    function handleChangeEmail(e: any) {
        enable.email = e.target.value
        setEnable({...enable})
    }
    function handleChangeAddress(e: any) {
        enable.address = e.target.value
        setEnable({...enable})
    }
    function handleChangeName(e: any) {
        enable.name = e.target.value
        setEnable({...enable})
    }
    function checkEnabled(){
    return !(enable.address !== "" && enable.name !== "" && enable.email !== "");
    }
    const triggerFade = () => {
        setFade(!fade)
    }
    const cart = useSelector((state:any) => state.cart);
    const dispatch = useDispatch();
    const removeFromCartHandler = (index:any) => {
        dispatch(removeFromCart({index:index}));
    };
    return (
        <>
            <div
                className="flex flex-col items-center border-b border-violet-700 bg-gray-100 py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                <Link href="/" className="text-2xl font-bold text-gray-800 text-center">H<HomeIcon className="mb-2" style={{width:30,height:30}}/>ME</Link>
                <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                    <div className="relative">
                        <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <button onClick={()=>{
                                    Component = "cart"
                                    setComponent("cart")
                                }}  className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                                    </svg
                                    >
                                </button>
                                <span className="font-semibold text-gray-900">Cart</span>
                            </li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                            </svg>
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <button onClick={()=>{
                                    Component = "checkout"
                                    setComponent("checkout")
                                }} className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2">2</button>
                                <span className="font-semibold text-gray-900">Checkout</span>
                            </li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                            </svg>
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <button disabled={checkEnabled()} onClick={() => {
                                    Component = "invoice"
                                    setComponent("invoice")}} className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white">3</button>
                                <span className="font-semibold text-gray-500">Invoice</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*Header*/}
            <div className="grid bg-gray-100 sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 px-4 pt-8 space-x-2">
                <div className="">
                    <p className="text-xl font-medium bg-white px-5 py-3 border border-b-0 rounded-lg rounded-b-none">Order
                        Summary</p>
                    <p className="text-gray-400 bg-white px-5 py-1 border border-t-0 rounded-lg rounded-t-none">Check
                        your items. And select a suitable shipping method.</p>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        {cart.map((data: any, index: number) => {
                            return (
                                <div key={index} className={fade ? '' : 'visibleClass'}>
                                    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                                        <Link href={`products/${data.id}`}>
                                            <img className="m-2 h-24 w-24"
                                                 src={data.image}
                                                 alt={data.description}/>
                                        </Link>
                                        <div className="flex w-full flex-col px-4 py-4">
                                            <span className="font-semibold">{(() => {
                                                if (data.title.length > 32) {
                                                    return (
                                                        data.title.substring(0, 45) + "..."
                                                    )
                                                } else {
                                                    return (
                                                        data.title
                                                    )
                                                }
                                            })()}</span>
                                            <div className="flex-row">
                                                <div className="justify-end align-middle float-right">
                                                    <DeleteIcon
                                                        style={{width: "40px", height: "40px"}}
                                                        className="text-red-800 md:hover:text-black md:hover:opacity-80"
                                                        onClick={() => {
                                                            triggerFade()
                                                            removeFromCartHandler(index)
                                                        }}
                                                    />
                                                </div>
                                                <div>
                                            <span className="text-gray-400"><span
                                                className="font-bold text-gray-600">{data.count}</span> x ${data.price.toFixed(2)}</span>
                                                    <p className="text-lg font-bold">$
                                                        {(() => {
                                                            let GetTotalProducts = cart[index].count * cart[index].price
                                                            return (
                                                                GetTotalProducts.toFixed(2)
                                                            )
                                                        })()}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                    <p className="mt-8 text-lg font-medium">Shipping Methods</p>
                    <form className="mt-5 mb-5 grid gap-6">
                        <div className="relative">
                            <input className="peer hidden" id="radio_1" type="radio" name="radio" checked/>
                            <span
                                className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label
                                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                                htmlFor="radio_1">
                                <Image className="w-14 object-contain" src={Fedex}
                                       alt="Fedex Delivery"/>
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">Fedex Delivery</span>
                                    <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                                </div>
                            </label>
                        </div>
                        <div className="relative">
                            <input className="peer hidden" id="radio_2" type="radio" name="radio" checked/>
                            <span
                                className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label
                                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                                htmlFor="radio_2">
                                <Image className="w-14 object-contain" src={AmazonFresh}
                                       alt="Amazon Fresh Delivery"/>
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">Amazon Fresh</span>
                                    <p className="text-slate-500 text-sm leading-6">Delivery: 1-3 Days</p>
                                </div>
                            </label>
                        </div>
                    </form>
                </div>
                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 border rounded-lg h-fit">
                    <p className="text-xl font-medium">Payment Details</p>
                    <p className="text-gray-400">Complete your order by providing your payment details.</p>
                    <div className="">
                        <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
                        <div className="relative">
                            <input type="text" id="email" name="email" onChange={handleChangeEmail}
                                   className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                   placeholder="you@gmail.com"/>
                            <div
                                className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                                </svg>
                            </div>
                        </div>
                        <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Card
                            Holder</label>
                        <div className="relative">
                            <input type="text" id="card-holder" name="card-holder" onChange={handleChangeName}
                                   className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                   placeholder="Your full name here"/>
                            <div
                                className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"/>
                                </svg>
                            </div>
                        </div>
                        <label htmlFor="card-no" className="mt-4 mb-2 block text-sm font-medium">Card
                            Details</label>
                        <div className="flex">
                            <div className="relative w-7/12 flex-shrink-0">
                                <input type="number" id="card-no" name="card-no"
                                       className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                       placeholder="xxxx-xxxx-xxxx-xxxx"/>
                                <div
                                    className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                         width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path
                                            d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z"/>
                                        <path
                                            d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z"/>
                                    </svg>
                                </div>
                            </div>
                            <input type="number" name="credit-expiry"
                                   className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                   placeholder="MM/YY"/>
                            <input type="number" name="credit-cvc"
                                   className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                   placeholder="CVC"/>
                        </div>
                        <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">Billing
                            Address</label>
                        <div className="flex flex-col sm:flex-row">
                            <div className="relative flex-shrink-0 sm:w-7/12">
                                <input type="text" id="billing-address" name="billing-address" onChange={handleChangeAddress}
                                       className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                       placeholder="Street Address"/>
                                <div
                                    className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="opacity-40" width="20"
                                         height="20" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <path stroke="currentColor" strokeWidth="1.5"
                                                  d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Z"/>
                                            <path stroke="currentColor" strokeWidth="1.5"
                                                  d="M5.5 8.757C5.5 6.958 7.067 5.5 9 5.5s3.5 1.458 3.5 3.257c0 1.785-1.117 3.868-2.86 4.613a1.638 1.638 0 0 1-1.28 0c-1.743-.745-2.86-2.828-2.86-4.613Z"/>
                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"
                                                  d="m14 14l6.5 6.5M14 14l-7.605 7.605M14 14l7.607-7.606"/>
                                            <path fill="currentColor" d="M10 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <select name="billing-state"
                                    className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                <option value="State">State</option>
                            </select>
                            <input type="number" name="billing-zip"
                                   className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                   placeholder="ZIP"/>
                        </div>

                        <div className="mt-6 border-t border-b py-2">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                                <p className="font-semibold text-gray-900">$
                                    {(() => {
                                        return (
                                            cart.reduce((acc:any, item:any) => acc + item.count * item.price, 0).toFixed(2)
                                        )
                                    })()}
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Taxes</p>
                                <p className="font-semibold text-gray-900">${GetTaxes()}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Shipping</p>
                                <p className="font-semibold text-gray-900">Free</p>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Total</p>
                            <p className="text-2xl font-semibold text-gray-900">$
                                {(() => {
                                    let num = Number(cart.reduce((acc:any, item:any) => acc + item.count * item.price, 0))+GetTaxes()
                                    return (
                                        num.toFixed(2)
                                    )
                                })()}
                            </p>
                        </div>
                    </div>
                    <button
                        className="mt-4 mb-8 w-full rounded-md bg-violet-700 px-6 py-3 font-medium hover:bg-violet-600 text-white disabled:bg-gray-500"
                        disabled={checkEnabled()} onClick={() => {
                            dispatch(getState({data: enable}))
                        Component = "invoice"
                        setComponent("invoice")
                    }}>
                        Place
                        Order
                    </button>
                </div>
            </div>
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