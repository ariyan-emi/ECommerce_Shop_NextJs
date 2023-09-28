import Link from "next/link";

export function EmptyCart() {
    return (
        <>
            <div className="bg-gray-100 h-screen py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-semibold mb-4 text-center">Shopping Cart</h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-full">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                                <p className="my-3 text-2xl text-center">Your Cart is Empty</p>
                                <p className="text-center"> Please first select the desired product from the store menu, and then return to this page so that we can assist you better.</p>
                                <Link href="/" className="mx-auto flex justify-center mt-2 inline-block px-12 py-3 text-sm font-medium text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-amber-400 hover:text-violet-600 focus:outline-none focus:ring">Get It Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}