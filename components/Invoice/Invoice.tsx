import Image from "next/image";
import Logo from '../../assets/icon/logo.png';

export function Invoice() {
    const date = new Date()
    const random = Math.floor((Math.random() * 10000) + 1)
    // Don't Use in Use Clint
    return (
        <>
            <div className="md:absolute md:top-2/4 md:left-2/4 md:-mr-[50%] md:-translate-x-1/2 md:-translate-y-1/2 md:w-3/4">
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
                            <span className="font-bold text-lg">Name</span><br/>
                            Your Address<br/>
                            Town, City,<br/>
                            Postcode
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
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Mark</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Otto</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Jacob</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Thornton</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@fat</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Larry</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Wild</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@twitter</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Larry</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Wild</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@twitter</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:rounded-b-2xl" style={{backgroundColor: "#FCA311"}}>
                        <div className="flex flex-col-reverse md:flex-row mx-10 justify-center text-center">
                        <div className="flex-col md:w-1/2 text-center justify-center align-middle mt-10">
                            <div className="border-white border-b font-bold text-xl mb-5">Bank Info</div>
                            <p><strong>University's bank name</strong>: Bank of America, NA<br/>
                                <strong>Bank routing number</strong>: 0260-0959-3 (wire transfer only)<br/>
                                <strong>Bank account number</strong>: 0175380001<br/>
                                <strong>Bank address</strong>: 1655 Grant Street; Concord, CA 94520<br/></p>
                        </div>
                        <div className="flex-col md:w-1/2 text-center justify-center align-middle mt-10">
                            <div className="border-white border-b font-bold text-xl mb-5">My Company</div>
                            <div className="p-2">
                                <p className="font-bold">Ariyan Emami</p>
                                <p>WebVaVe</p>
                                <p className="text-gray-600">Washington,1600 Pennsylvania Ave NW, <br/>The White House
                                </p>
                            </div>
                        </div>
                        <div className="flex-col md:w-1/2 text-center justify-center align-middle mt-10">
                            <div className="border-white border-b font-bold text-xl mb-5">Summary</div>
                            <div className="p-2">
                                <strong>Subtotal</strong>:{}<br/>
                                <strong>Taxes</strong>:{}<br/>
                                <strong>Total</strong>:{}
                            </div>

                        </div>

                    </div>
                    <h1 className="text-center text-2xl py-5 text-white">💗 Thank You 💗</h1>
                </div>
            </div>
        </>
    )
}