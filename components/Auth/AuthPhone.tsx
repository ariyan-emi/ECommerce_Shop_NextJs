import React, {useState} from "react";
import Logo from "../../assets/icon/logo.png";
import Image from "next/image";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@firebase/auth";
import {auth} from "../../firebase/firebase";
import swal from "sweetalert";
import {useRouter} from "next/navigation";

export function AuthPhone(){
    let [state,setState] =useState("login")
    if (state == "login"){
        return(
            <Login setState={setState}/>
        )
    }else{
        return(
            <SignUp setState={setState}/>
        )
    }
}
function Login({setState}:any){
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    function changeEmailLogin(e:any) {
        setEmailLogin(e.target.value);
    }
    function changePasswordLogin(e:any) {
        setPasswordLogin(e.target.value);
    }
    const router = useRouter()
    function login(e:any) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
            .then((userCredential) => {
                swal("Good job!", `Welcome ${userCredential.user.email}!`, "success").then(() => {
                    router.push('/')
                });
            })
            .catch(error => {
                if (error.code == 'auth/invalid-login-credentials') {
                    swal("Wrong!", `User Not Found`, "error");
                } else {
                    swal("Wrong!", error.message, "error");
                }
            });
    }
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
                            Email
                        </label>
                        <input
                            className="w-full p-2 mb-6 text-indigo-700 border-b-2 rounded-md border-indigo-500 outline-none focus:bg-gray-300"
                            type="text"
                            placeholder="example@gmail.com"
                            onChange={changeEmailLogin}
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
                            onChange={changePasswordLogin}
                        />
                    </div>
                    <div>
                        <button
                            className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
                            onClick={login}
                        >Sign In</button>
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
function SignUp({setState}:any){
        const [emailSignUp, setEmailSignUp] = useState("");
    const [passwordSignUp, setPasswordSignUp] = useState("");
    const [confirmPasswordSignUp, setConfirmPasswordSignUp] = useState("");
    const router = useRouter()
    function changeEmailSignUp(e:any) {
        setEmailSignUp(e.target.value);
    }
    function changePasswordSignUp(e:any) {
        setPasswordSignUp(e.target.value);
    }
    function changeConfirmPasswordSignUp(e:any) {
        setConfirmPasswordSignUp(e.target.value);
    }
    function signUp() {
        if (passwordSignUp !== confirmPasswordSignUp){
            swal("Wrong!", `Passwords Don't match`, "error");
        }else{
            createUserWithEmailAndPassword(auth, emailSignUp, passwordSignUp)
                .then((userCredential) => {
                    swal("Good job!", `Welcome ${userCredential.user.email}!`, "success").then(() => {
                        router.push('/')
                    });
                })
                .catch(error => {
                    if (error.code == 'auth/invalid-login-credentials') {
                        swal("Wrong!", `User Not Found`, "error");
                    } else {
                        swal("Wrong!", error.message, "error");
                    }
                });
        }
    }
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
                        Sign up for an account
                    </h2>
                </header>
                <div>
                    <label className="block mb-2 text-indigo-500" htmlFor="username">
                        Email
                    </label>
                    <input
                        className="w-full p-2 mb-6 text-indigo-700 border-b-2 rounded-md border-indigo-500 outline-none focus:bg-gray-300"
                        type="text"
                        placeholder="example@gmail.com"
                        onChange={changeEmailSignUp}
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
                        onChange={changePasswordSignUp}
                    />
                </div>
                <div>
                    <label className="block mb-2 text-indigo-500" htmlFor="username">
                        Confirm Password
                    </label>
                    <input
                        className="w-full p-2 mb-6 text-indigo-700 border-b-2 rounded-md border-indigo-500 outline-none focus:bg-gray-300"
                        type="password"
                        placeholder="Confirm Password"
                        onChange={changeConfirmPasswordSignUp}
                    />
                </div>
                <div>
                    <button
                        className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
                        onClick={signUp}
                    >Sign Up</button>
                </div>
                <footer>
                    <button
                        className="text-indigo-700 hover:text-pink-700 text-sm float-left"
                        onClick={()=>{setState("login")}}
                    >
                        Already Registered?
                    </button>
                </footer>
            </div>
        </div>
    )
}