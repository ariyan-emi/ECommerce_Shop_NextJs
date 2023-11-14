import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GetTaxes} from "../Utils/Utils";
import swal from 'sweetalert';
import {
    addExtraItemAsync,
    deleteAllItemsFromCart,
    deleteItemFromCart,
    minusItemAsync, totalCartItems
} from "../Redux/slices/shoppingCartSlice";
import { auth } from "../../firebase/firebase";
import {Loading} from "../Screens/Loading";
import {EmptyCart} from "./EmptyCart";


export function ShoppingCard({Component, setComponent}: any) {
const [isLoading, setIsLoading]=useState("empty")
    // @ts-ignore
    const {shoppingCart} = useSelector(state => state);
    const info = useSelector((state: any) => state.info);

    const totalPrice = shoppingCart
        .reduce((accumulator:any, element:any) => accumulator + element.totalPrice, 0);

    function checkEnabled() {
        return info == "";
    }
    const cartItemsQuantity = useSelector(totalCartItems);
    let uid :string;
        if (auth.currentUser!== null){
            uid = auth.currentUser.uid;
        }
    const dispatch = useDispatch();
    useEffect(() => {
        if (shoppingCart.length > 0){
                setIsLoading("false")
        }else{
            setIsLoading("error")
        }
    }, [shoppingCart]);


    function DeleteAlert() {
        swal({
            title: "Are you sure?",
            text: "Would you like to delete your shopping cart!",
            icon: "warning",
            buttons: ["Cancel", "Ok"],
            dangerMode: true,
            closeOnClickOutside: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    // @ts-ignore
                    dispatch(deleteAllItemsFromCart(uid));
                    setIsLoading("error")
                }
            });
    }

    if (isLoading == "false") {
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
                                        setComponent("invoice")
                                    }}
                                            className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white">3
                                    </button>
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
                                            {shoppingCart.map((data: any, index: number) => {
                                                return (
                                                    <CartItemDesktop product={data} index={index}/>
                                                )
                                            })}
                                            </tbody>
                                        </table>
                                    </div>


                                    <div className="md:hidden">
                                        {shoppingCart.map((data: any, index: number) => {
                                            return (
                                                <CartItemPhone product={data} index={index}/>
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
                                            {Number(totalPrice).toFixed(2)}
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
                                                let num = Number(totalPrice) + Number(GetTaxes())
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
                                            DeleteAlert()
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
    }else if(isLoading == "true"){
    return (<Loading/>)
    }else {
        return (<EmptyCart/>)
    }
}

function CartItemDesktop({product, index}: any) {
    const [fade, setFade] = useState(false)
    const triggerFade = () => {
        setFade(!fade)
    }
    const {image, totalPrice, id, items, title, price} = product;
    // @ts-ignore
    const uid = auth.currentUser.uid;
    const dispatch = useDispatch();
    function minusOneItem() {
        if (items === 1) {
            showHideDeleteConfirmation();
            return;
        }
        // @ts-ignore
        dispatch(minusItemAsync(id, uid));
    }
    function addOneItem() {
        // @ts-ignore
        dispatch(addExtraItemAsync(id, uid));
    }
    function showHideDeleteConfirmation() {
        swal({
            title: "Are you sure?",
            text: "Would you like to delete your shopping cart!",
            icon: "warning",
            buttons: ["Cancel", "Ok"],
            dangerMode: true,
            closeOnClickOutside: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteItem()
                }
            });
    }

    function deleteItem() {
        // @ts-ignore
        dispatch(deleteItemFromCart(id, uid));
    }

    return (
        <tr key={index} data-id={index}
            className={fade ? '' : 'visibleClass'}>
            <td className="py-4">
                <div className="flex items-center">
                    <img className="h-16 w-16 mr-4"
                         src={image}
                         alt="Product image"/>
                    <span
                        className="font-semibold overflow-hidden text-ellipsis w-24  sm:w-full ">
                                                                {(() => {
                                                                    if (title !== undefined) {
                                                                        return (
                                                                            title.substring(0, 32) + "..."
                                                                        )
                                                                    }
                                                                })()}
                                                            </span>
                </div>
            </td>

            <td className="py-4 text-center">$
                {(() => {
                    if (price !== undefined) {
                        return (
                            price.toFixed(2)
                        )
                    }
                })()}</td>
            <td className="py-4">
                <div className="flex items-center justify-center">
                    <button onClick={minusOneItem}
                            className="border rounded-md py-2 px-4 mr-2">-
                    </button>
                    <span className="text-center w-8">{items}</span>
                    <button
                        onClick={addOneItem}
                        className="border rounded-md py-2 px-4 ml-2">+
                    </button>
                </div>
            </td>
            <td className="py-4 text-center">${(() => {
                return (
                    totalPrice.toFixed(2)
                )
            })()}
            </td>
            <td className="py-4 text-center">
                <DeleteIcon
                    style={{width: "40px", height: "40px"}}
                    className="text-red-800 hover:text-black"
                    onClick={() => {
                        triggerFade()
                        deleteItem()
                    }}
                />
            </td>
        </tr>
    )
}

function CartItemPhone({product, index}: any) {
    const [fade, setFade] = useState(false)
    const triggerFade = () => {
        setFade(!fade)
    }
    const {image, totalPrice, id, items, title, price} = product;
    // @ts-ignore
    const uid = auth.currentUser.uid;
    const dispatch = useDispatch();
    function minusOneItem() {
        if (items === 1) {
            showHideDeleteConfirmation();
            return;
        }
        // @ts-ignore
        dispatch(minusItemAsync(id, uid));
    }
    function addOneItem() {
        // @ts-ignore
        dispatch(addExtraItemAsync(id, uid));
    }
    function showHideDeleteConfirmation() {
        swal({
            title: "Are you sure?",
            text: "Would you like to delete your shopping cart!",
            icon: "warning",
            buttons: ["Cancel", "Ok"],
            dangerMode: true,
            closeOnClickOutside: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteItem()
                }
            });
    }

    function deleteItem() {
        // @ts-ignore
        dispatch(deleteItemFromCart(id, uid));
    }
    return (
        <div key={index}
             className="flex flex-col md:flex-row border-b border-gray-400 py-4">
            <div className="flex-shrink-0">
                <img
                    src={image}
                    alt="Product image"
                    className="w-32 h-32 object-cover"
                />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
                <h2 className="text-lg font-bold">
                    {(() => {
                        if (title !== undefined) {
                            return (
                                title.substring(0, 32) + "..."
                            )
                        }
                    })()}
                </h2>
                <p className="mt-2 text-gray-600">1 x ${price}</p>
                <div className="mt-4 flex items-center">
                    <span className="mr-2 text-gray-600">Quantity:</span>
                    <div className="flex items-center">
                        <button className="bg-gray-200 rounded-l-lg px-2 py-1"
                                onClick={minusOneItem}>
                            -
                        </button>
                        <span className="mx-2 text-gray-600">{items}</span>
                        <button className="bg-gray-200 rounded-r-lg px-2 py-1"
                                onClick={addOneItem}>
                            +
                        </button>
                    </div>
                    <DeleteIcon
                        style={{width: "30px", height: "30px"}}
                        className="text-red-800 md:hover:text-black"
                        onClick={() => {
                            triggerFade()
                            deleteItem()
                        }}
                    />
                    <span className="ml-auto font-bold">${(() => {
                        return (
                            totalPrice.toFixed(2)
                        )
                    })()}</span>

                </div>
            </div>
        </div>
    )
}