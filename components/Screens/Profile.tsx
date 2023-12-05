'use client'
import {useRouter} from "next/navigation";
import {signOut} from "@firebase/auth";
import {useEffect, useState} from "react";
import {Loading} from "./Loading";
import swal from "sweetalert";
import { updatePassword } from "firebase/auth";
import {auth} from "../../firebase/firebase";
import {getIsAuth} from "../Redux/slices/isAuthSlice";
import {useSelector} from "react-redux";
import Header from "../Navigating/Header";

export function Profile() {
    const [isLoading, setIsLoading] = useState(true);
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const isAuth = useSelector(getIsAuth);

    function ChangePassword(){
        const user:any = auth.currentUser;
        if (password.length !== 0){
            updatePassword(user, password).then(() => {
                swal("Good job!", `Password Changed`, "success");
            }).catch((error) => {
                swal("Wrong!", error.message, "error");
            });
        }else {
            swal("Wrong!","Password should be at least 6 characters", "error");
        }

    }
    const router = useRouter()
    useEffect(() => {
        const user = auth.currentUser;
        if (user !== null) {
            user.providerData.forEach((profile: any) => {
                setEmail(profile.email);
            });
        }
    }, [auth.currentUser]);
    useEffect(() => {
        if (isAuth){
            setIsLoading(false)
        }
    }, [isAuth]);


    function Logout() {
        signOut(auth).then(() => router.push('/auth'));
    }


    if (!isLoading) {
        return (
            <>
                <Header/>
                <div style={{position:"absolute",top:"25%"}} className="justify-center flex flex-col bg-[#E5E5E5] md:bg-white  relative align-middle  md:left-1/3 overflow-hidden shadow rounded-lg border w-full md:w-1/3 h-fit">
                    <div className="px-4 py-5 sm:px-6 text-center">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            User Profile
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            This is some information about the user.
                        </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500 text-center align-middle">
                                    Email address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-center">
                                    {email}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500 text-center align-middle my-auto">
                                    Change Password
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <div className="p-4 rounded-lg">
                                        <div className="relative bg-inherit">
                                            <input type="text" id="username" name="username"
                                                   onChange={(event) => setPassword(event.target.value)}
                                                   className="hidden md:inline-block peer bg-[#E5E5E5] md:bg-transparent h-10 md:w-full 2xl:w-64 rounded-lg placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                                                   placeholder="New Password"/><label htmlFor="username"
                                                                                      className="hidden md:block absolute cursor-text left-0 -top-3 text-sm bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">New
                                            Password</label>

                                            <input type="email" id="input-6"
                                                   onChange={(event) => setPassword(event.target.value)}
                                                   className="block md:hidden px-6 w-full h-10 placeholder:text-center mt-1 text-sm text-gray-700 border rounded-lg focus:outline-none shadow-sm focus:border-blue-500"
                                                   placeholder="New Password"/>
                                            <button onClick={ChangePassword}
                                                className="block md:flex 2xl:inline-block 2xl:ml-5 justify-center text-center px-3 mt-5 md:px-6 py-3 md:py-3 mx-auto text-sm font-medium text-white bg-violet-600 border border-violet-600 rounded-lg  active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
                                                Change
                                            </button>
                                        </div>

                                    </div>

                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-center align-middle">
                                    <button onClick={Logout}
                                        className="border border-red-500 bg-red-500 text-white rounded-md w-full px-4 py-2 my-2 transition duration-500 ease select-none hover:bg-red-800 focus:outline-none focus:shadow-outline">
                                        LOGOUT
                                    </button>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </>
        )
    } else {
        return (<Loading/>)
    }
}