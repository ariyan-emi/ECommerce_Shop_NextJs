"use client"
import {useState} from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@firebase/auth";
import {auth} from "../../firebase/firebase"
import swal from 'sweetalert';
import {useRouter} from "next/navigation";

export function AuthDesktop() {
    let [container, setContainer] = useState("container")
    const [emailSignUp, setEmailSignUp] = useState("");
    const [passwordSignUp, setPasswordSignUp] = useState("");
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [confirmPasswordSignUp, setConfirmPasswordSignUp] = useState("");
    const router = useRouter()
    function changeEmailSignUp(e:any) {
        setEmailSignUp(e.target.value);
    }
    function changePasswordSignUp(e:any) {
        setPasswordSignUp(e.target.value);
    }
    function changeEmailLogin(e:any) {
        setEmailLogin(e.target.value);
    }
    function changePasswordLogin(e:any) {
        setPasswordLogin(e.target.value);
    }
    function changeConfirmPasswordSignUp(e:any) {
        setConfirmPasswordSignUp(e.target.value);
    }
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


    return (
        <div
            className="box-border bg-[#f6f5f7] flex justify-center items-center flex-col h-screen -mt-[20px] mx-[0] mb-[50px]">
            <div className={container} id="container">
                <div className="form-container sign-up-container">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                    }}>
                        <h1 className="font-bold ">Create Account</h1>
                        <h3>Welcome To Your Shop</h3>
                        <div className="social-container">
                            <a href="https://www.linkedin.com/in/ariyan-emami-8b99a3251/"
                               className="social hover:bg-violet-500"><LinkedInIcon/></a>
                            <a href="https://github.com/ariyan-emi" className="social hover:bg-violet-500"><GitHubIcon/></a>
                            <a href="https://webvave.ir/" className="social hover:bg-violet-500"><PublicIcon/></a>
                        </div>
                        <span>use your email for registration</span>
                        <input type="email" placeholder="example@gmail.com" onChange={changeEmailSignUp}/>
                        <input type="password" placeholder="Password" onChange={changePasswordSignUp}/>
                        <input type="password" placeholder="Confirm Password" onChange={changeConfirmPasswordSignUp}/>
                        <button className="mt-3" onClick={signUp}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                    }}>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="https://www.linkedin.com/in/ariyan-emami-8b99a3251/"
                               className="social hover:bg-violet-500"><LinkedInIcon/></a>
                            <a href="https://github.com/ariyan-emi" className="social hover:bg-violet-500"><GitHubIcon/></a>
                            <a href="https://webvave.ir/" className="social hover:bg-violet-500"><PublicIcon/></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" onChange={changeEmailLogin}/>
                        <input type="password" placeholder="Password" onChange={changePasswordLogin}/>
                        <a href="#">Forgot your password?</a>
                        <button onClick={login}>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p className="mb-3 mt-3">To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={() => {
                                container = "container"
                                setContainer("container")
                            }
                            }>Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p className="mb-3 mt-3">Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={() => {
                                container = "container right-panel-active"
                                setContainer("container right-panel-active")
                            }
                            }>Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`


              h1 {
                font-weight: bold;
                margin: 0;
              }


              span {
                font-size: 12px;
              }

              a {
                color: #333;
                font-size: 14px;
                text-decoration: none;
                margin: 15px 0;
              }

              button {
                border-radius: 20px;
                border: 1px solid #FF4B2B;
                background-color: #FF4B2B;
                color: #f2f2f2;
                font-size: 12px;
                font-weight: bold;
                padding: 12px 45px;
                letter-spacing: 1px;
                text-transform: uppercase;
                transition: transform 80ms ease-in;
              }

              button:active {
                transform: scale(0.95);
              }

              button:focus {
                outline: none;
              }

              button.ghost {
                background-color: transparent;
                border-color: #f2f2f2;
              }

              form {
                background-color: #f2f2f2;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                padding: 0 50px;
                height: 100%;
                text-align: center;
              }

              input {
                background-color: #eadfdf;
                border: none;
                border-radius: 5px;
                padding: 12px 15px;
                margin: 8px 0;
                width: 100%;
              }

              .container {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
                0 10px 10px rgba(0, 0, 0, 0.22);
                position: relative;
                overflow: hidden;
                width: 1000px;
                max-width: 100%;
                min-height: 640px;
              }

              .form-container {
                position: absolute;
                top: 0;
                height: 100%;
                transition: all 0.6s ease-in-out;
              }

              .sign-in-container {
                left: 0;
                width: 50%;
                z-index: 2;
              }

              .container.right-panel-active .sign-in-container {
                transform: translateX(100%);
              }

              .sign-up-container {
                left: 0;
                width: 50%;
                opacity: 0;
                z-index: 1;
              }

              .container.right-panel-active .sign-up-container {
                transform: translateX(100%);
                opacity: 1;
                z-index: 5;
                animation: show 0.6s;
              }

              @keyframes show {
                0%, 49.99% {
                  opacity: 0;
                  z-index: 1;
                }

                50%, 100% {
                  opacity: 1;
                  z-index: 5;
                }
              }

              .overlay-container {
                position: absolute;
                top: 0;
                left: 50%;
                width: 50%;
                height: 100%;
                overflow: hidden;
                transition: transform 0.6s ease-in-out;
                z-index: 100;
              }

              .container.right-panel-active .overlay-container {
                transform: translateX(-100%);
              }

              .overlay {
                background-color: rgb(109 40 217);
                background: -webkit-linear-gradient(to right, #6D28D9FF, #ea9393);
                background: linear-gradient(to right, #6D28D9FF, #ea9393);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 0 0;
                color: #f2f2f2;
                position: relative;
                left: -100%;
                height: 100%;
                width: 200%;
                transform: translateX(0);
                transition: transform 0.6s ease-in-out;
              }

              .container.right-panel-active .overlay {
                transform: translateX(50%);
              }

              .overlay-panel {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                padding: 0 40px;
                text-align: center;
                top: 0;
                height: 100%;
                width: 50%;
                transform: translateX(0);
                transition: transform 0.6s ease-in-out;
              }

              .overlay-left {
                transform: translateX(-20%);
              }

              .container.right-panel-active .overlay-left {
                transform: translateX(0);
              }

              .overlay-right {
                right: 0;
                transform: translateX(0);
              }

              .container.right-panel-active .overlay-right {
                transform: translateX(20%);
              }

              .social-container {
                margin: 20px 0;
              }

              .social-container a {
                border: 1px solid #DDDDDD;
                border-radius: 50%;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                margin: 0 5px;
                height: 40px;
                width: 40px;
              }
            `}</style>
        </div>
    )
}


