import Image from "next/image";
import Logo from '../../assets/icon/logo.png';
import {GetTaxes} from "../Utils/Utils";
import {useSelector} from "react-redux";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

export function Invoice({Component, setComponent}: any) {
    const date = new Date()
    const random = Math.floor((Math.random() * 10000) + 1)
    const cart = useSelector((state: any) => state.cart);
    const info = useSelector((state: any) => state.info);
    return (
        <>
            <div
                className="flex flex-col items-center border-b border-violet-700 bg-gray-100 py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                <Link href="/" className="text-2xl font-bold text-gray-800 text-center">H<HomeIcon className="mb-2" style={{width:30,height:30}}/>ME</Link>
                <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                    <div className="relative">
                        <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <button onClick={() => {
                                    Component = "cart"
                                    setComponent("cart")
                                }} className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                                    </svg>
                                </button>
                                <span className="font-semibold text-gray-900">Cart</span>
                            </li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                            </svg>
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <button onClick={() => {
                                    Component = "checkout"
                                    setComponent("checkout")
                                }}
                                        className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                                    </svg
                                    >
                                </button>
                                <span className="font-semibold text-gray-900">Checkout</span>
                            </li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                            </svg>
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <button onClick={() => {
                                    Component = "invoice"
                                    setComponent("invoice")
                                }} className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2">3
                                </button>
                                <span className="font-semibold text-gray-500">Invoice</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*Header*/}
            <div
                className="md:absolute md:top-2/4 md:left-2/4 md:-mr-[50%] md:-translate-x-1/2 md:-translate-y-1/2 md:w-3/4 sm:pt-10 lg:pt-20 xl:pt-32 -z-10">
                <div className="bg-white border-gray-900 border-b md:rounded-t-2xl">
                    <div className="flex flex-col md:flex-row justify-between mx-8 py-8 ">
                        <div className="my-auto flex flex-row justify-center">
                            <a href="https://webvave.ir/">
                                <Image
                                    src={Logo}
                                    className="mr-3 "
                                    width={75}
                                    height={75}
                                    alt="Logo of Website"
                                />
                            </a>
                            <h1 className="my-auto text-3xl hidden md:block">WebVaVe</h1>
                        </div>
                        <h1 className="my-5 md:my-auto text-center md:text-right text-4xl">
                            INVOICE
                        </h1>
                    </div>


                    <div className="flex justify-between mx-8 py-4 flex-row-reverse md:flex-row">
                        <div className="my-auto p-4">
                            <span className="font-bold text-lg">WebVaVe</span>
                            <br/>
                            Invoice No: #{random}
                            <br/>
                            Date: {date.getDay()}/{date.getMonth()}/{date.getFullYear()}
                        </div>
                        <div className="my-auto text-right">
                            <span className="font-bold text-lg">{info.name}</span><br/>
                            {info.email}<br/>
                            {info.address}<br/>
                          <br/>
                        </div>
                    </div>

                    <div className="flex flex-col m-10 bg-gray-200 rounded-xl">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        <thead className="border-b border-black">
                                        <tr>
                                            <th scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left">#
                                            </th>
                                            <th scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Item
                                                Description
                                            </th>
                                            <th scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Price
                                            </th>
                                            <th scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Qty
                                            </th>
                                            <th scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Total
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {cart.map((data: any, index: number) => {
                                            return(
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{data.title}</td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{data.price}</td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{data.count}</td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{(() => {
                                                        let GetTotalProducts = cart[index].count * cart[index].price
                                                        return (GetTotalProducts.toFixed(2))})()}</td>
                                                </tr>
                                            )
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:rounded-b-2xl" style={{backgroundColor: "#8338ec"}}>
                    <div className=" text-zinc-300 flex flex-col-reverse md:flex-row mx-10 justify-center text-center">
                        <div className="flex-col md:w-1/2 text-center justify-center align-middle mt-10">
                            <div className="border-white border-b font-bold text-xl mb-5">Bank Info</div>
                            <p><strong>University&#39;s bank name</strong>: Bank of America, NA<br/>
                                <strong>Bank routing number</strong>: 0260-0959-3 (wire transfer only)<br/>
                                <strong>Bank account number</strong>: 0175380001<br/>
                                <strong>Bank address</strong>: 1655 Grant Street; Concord, CA 94520<br/></p>
                        </div>
                        <div className="flex-col md:w-1/2 text-center justify-center align-middle mt-10">
                            <div className="border-white border-b font-bold text-xl mb-5">My Company</div>
                            <div className="p-2">
                                <p className="font-bold">Ariyan Emami</p>
                                <p>WebVaVe</p>
                                <p className="text-zinc-400">Washington,1600 Pennsylvania Ave NW, <br/>The White House
                                </p>
                            </div>
                        </div>
                        <div className="flex-col md:w-1/2 text-center justify-center align-middle mt-10">
                            <div className="border-white border-b font-bold text-xl mb-5">Summary</div>
                            <div className="p-2">
                                <strong>Subtotal</strong>: ${(() => {
                                return (cart.reduce((acc: any, item: any) => acc + item.count * item.price, 0).toFixed(2))
                            })()}<br/>
                                <strong>Taxes</strong>: ${GetTaxes()}<br/>
                                <strong>Total</strong>: ${(() => {
                                let num = Number(cart.reduce((acc: any, item: any) => acc + item.count * item.price, 0)) + GetTaxes()
                                return (num.toFixed(2))
                            })()}
                            </div>

                        </div>

                    </div>
                    <h1 className="text-center text-2xl py-5 text-white">💗 Thank You 💗</h1>
                </div>
            </div>
        </>
    )
}