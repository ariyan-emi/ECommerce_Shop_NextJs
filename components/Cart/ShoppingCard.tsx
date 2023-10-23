import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CounterPlus, CounterSubtract, removeFromCart, restCart} from "../Redux/cartSlice";
import {GetTaxes} from "../Utils/cartUtils";

export function ShoppingCard({Component, setComponent}: any) {
    const [fade, setFade] = useState(false)
    const [isClient, setIsClient] = useState(false)
    const cart = useSelector((state: any) => state.cart);
    const info = useSelector((state: any) => state.info);
    const dispatch = useDispatch();


    useEffect(() => {
        setIsClient(true)
    }, [])
    const triggerFade = () => {
        setFade(!fade)
    }
    const removeFromCartHandler = (index: any) => {
        dispatch(removeFromCart({index: index}));
    };
    function checkEnabled(){
        return info == "";
    }

    if (isClient) {
        return (
            <>
                <div
                    className="flex flex-col items-center border-b border-violet-700 bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                    <Link href="/" className="text-2xl font-bold text-gray-800 text-center">H<HomeIcon className="mb-2"
                                                                                                       style={{
                                                                                                           width: 30,
                                                                                                           height: 30
                                                                                                       }}/>ME</Link>
                    <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                        <div className="relative">
                            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">

                                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                    <button onClick={() => {
                                        Component = "cart"
                                        setComponent("cart")
                                    }}
                                            className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                                    >1
                                    </button>
                                    <span className="font-semibold text-gray-900">Cart</span>
                                </li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400"
                                     fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                                </svg>

                                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                    <button onClick={() => {
                                        Component = "checkout"
                                        setComponent("checkout")
                                    }}
                                            className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                                    >2
                                    </button>
                                    <span className="font-semibold text-gray-500">Checkout</span>
                                </li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400"
                                     fill="none"
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
                <div className="h-screen py-8">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-3/4">
                                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                                    <div className="hidden md:block">
                                        <table className="w-full">
                                            <thead>
                                            <tr>
                                                <th className="text-left font-semibold">Products</th>
                                                <th className="text-center font-semibold">Price</th>
                                                <th className="text-center font-semibold">Quantity</th>
                                                <th className="text-center font-semibold">Total</th>
                                                <th className="text-center font-semibold">Delete</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {cart.map((data: any, index: number) => {
                                                return (
                                                    <tr key={index} data-id={index}
                                                        className={fade ? '' : 'visibleClass'}>
                                                        <td className="py-4">
                                                            <div className="flex items-center">
                                                                <img className="h-16 w-16 mr-4"
                                                                     src={data.image}
                                                                     alt="Product image"/>
                                                                <span
                                                                    className="font-semibold overflow-hidden text-ellipsis w-24  sm:w-full ">
                                                                {(() => {
                                                                    if (data.title.length > 32) {
                                                                        return (
                                                                            data.title.substring(0, 32) + "..."
                                                                        )
                                                                    } else {
                                                                        return (
                                                                            data.title
                                                                        )
                                                                    }
                                                                })()}
                                                            </span>
                                                            </div>
                                                        </td>

                                                        <td className="py-4 text-center">${(() => {
                                                            return (
                                                                cart[index].price.toFixed(2)
                                                            )
                                                        })()}</td>
                                                        <td className="py-4">
                                                            <div className="flex items-center justify-center">
                                                                <button onClick={() => {
                                                                    dispatch(CounterSubtract({action: index}))
                                                                }}
                                                                        className="border rounded-md py-2 px-4 mr-2">-
                                                                </button>
                                                                <span className="text-center w-8">{(() => {
                                                                    return (
                                                                        cart[index].count
                                                                    )
                                                                })()}</span>
                                                                <button
                                                                    onClick={() => {
                                                                        dispatch(CounterPlus({action: index}))
                                                                    }}
                                                                    className="border rounded-md py-2 px-4 ml-2">+
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 text-center">${(() => {
                                                            let GetTotalProducts = cart[index].count * cart[index].price
                                                            return (
                                                                GetTotalProducts.toFixed(2)
                                                            )
                                                        })()}
                                                        </td>
                                                        <td className="py-4 text-center">
                                                            <DeleteIcon
                                                                style={{width: "40px", height: "40px"}}
                                                                className="text-red-800 hover:text-black"
                                                                onClick={() => {
                                                                    triggerFade()
                                                                    removeFromCartHandler(index)
                                                                }}
                                                            />
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                            </tbody>
                                        </table>
                                    </div>


                                    <div className="md:hidden">
                                        {cart.map((data: any, index: number) => {
                                            return (
                                                <div key={index}
                                                     className="flex flex-col md:flex-row border-b border-gray-400 py-4">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            src={data.image}
                                                            alt="Product image"
                                                            className="w-32 h-32 object-cover"
                                                        />
                                                    </div>
                                                    <div className="mt-4 md:mt-0 md:ml-6">
                                                        <h2 className="text-lg font-bold">
                                                            {(() => {
                                                                if (data.title.length > 32) {
                                                                    return (
                                                                        data.title.substring(0, 32) + "..."
                                                                    )
                                                                } else {
                                                                    return (
                                                                        data.title
                                                                    )
                                                                }
                                                            })()}
                                                        </h2>
                                                        <p className="mt-2 text-gray-600">1 x ${data.price}</p>
                                                        <div className="mt-4 flex items-center">
                                                            <span className="mr-2 text-gray-600">Quantity:</span>
                                                            <div className="flex items-center">
                                                                <button className="bg-gray-200 rounded-l-lg px-2 py-1"
                                                                        onClick={() => {
                                                                            dispatch(CounterSubtract({action: index}))
                                                                        }}>
                                                                    -
                                                                </button>
                                                                <span className="mx-2 text-gray-600">{(() => {
                                                                    return (
                                                                        cart[index].count
                                                                    )
                                                                })()}</span>
                                                                <button className="bg-gray-200 rounded-r-lg px-2 py-1"
                                                                        onClick={() => {
                                                                            dispatch(CounterPlus({action: index}))
                                                                        }}>
                                                                    +
                                                                </button>
                                                            </div>
                                                            <DeleteIcon
                                                                style={{width: "30px", height: "30px"}}
                                                                className="text-red-800 md:hover:text-black"
                                                                onClick={() => {
                                                                    triggerFade()
                                                                    removeFromCartHandler(index)
                                                                }}
                                                            />
                                                            <span className="ml-auto font-bold">${(() => {
                                                                let GetTotalProducts = cart[index].count * cart[index].price
                                                                return (
                                                                    GetTotalProducts.toFixed(2)
                                                                )
                                                            })()}</span>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>


                                </div>
                            </div>
                            <div className="md:w-1/4">
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h2 className="text-lg font-semibold mb-4">Summary</h2>
                                    <div className="flex justify-between mb-2">
                                        <span>Subtotal</span>
                                        <span>$
                                            {(() => {
                                                return (
                                                    cart.reduce((acc: any, item: any) => acc + item.count * item.price, 0).toFixed(2)
                                                )
                                            })()}
                                    </span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span>Taxes</span>
                                        <span>${GetTaxes()}</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span>Shipping</span>
                                        <span>Free</span>
                                    </div>
                                    <hr className="my-2"/>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold">Total</span>
                                        <span className="font-semibold">$
                                            {(() => {
                                                let num = Number(cart.reduce((acc: any, item: any) => acc + item.count * item.price, 0)) + GetTaxes()
                                                return (
                                                    num.toFixed(2)
                                                )
                                            })()}
                                    </span>
                                    </div>

                                    <button onClick={() => {
                                        Component = "checkout"
                                        setComponent("checkout")
                                    }}
                                            className="bg-blue-500 text-white py-3 px-4 rounded-lg mt-4 w-full">Checkout
                                    </button>


                                    <button
                                        onClick={() => {
                                            dispatch(restCart())
                                        }}
                                        className="bg-red-800 text-white py-2 px-4 rounded-lg mt-4 w-full">Delete
                                        All
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}