import React, {useState} from "react";
import Logo from "../../assets/icon/logo.png";
import Image from "next/image";

export function AuthPhone(){
    let [state,setState] =useState("login")
    if (state == "login"){
        return(
            <Login setState={setState}/>
        )
    }
}
function Login({setState}:any){
    return(
        <div className="flex h-screen">
            <div className="w-full max-w-xs m-auto rounded-2xl p-5 bg-zinc-300">
                <header>
                    <Image
                        src={Logo}
                        width={75}
                        height={75}
                        className="w-20 mx-auto mb-5"
                        alt="Logo of Website"
                    />
                    <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                       Login
                    </h2>
                </header>
                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="w-full p-2 mb-6 text-indigo-700 border-b-2 rounded-md border-indigo-500 outline-none focus:bg-gray-300"
                            type="text"
                            name="username"
                            placeholder="Username"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full p-2 mb-6 text-indigo-700 border-b-2 rounded-md border-indigo-500 outline-none focus:bg-gray-300"
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                    </div>
                    <div>
                        <input
                            className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
                            type="submit"
                        />
                    </div>
                <footer>
                    <button
                        className="text-indigo-700 hover:text-pink-700 text-sm float-left"
                        onClick={()=>{setState("SignUp")}}
                    >
                        Forgot Password?
                    </button>
                    <button
                        className="text-indigo-700 hover:text-pink-700 text-sm float-right"
                        onClick={()=>{setState("SignUp")}}
                    >
                        Create Account
                    </button>
                </footer>
            </div>
        </div>
    )
}
