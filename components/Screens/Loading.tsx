import {useState} from "react";
import connection from "../../assets/icon/Brands/connection.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import ImageNext from "next/image";
export function Loading(){
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
        setIsLoading(false)
    }, 15000);
    if (isLoading){
        return(
            <>
                <div className='flex flex-col justify-center items-center bg-white h-screen dark:invert' style={{backgroundColor:"#E5E5E5"}}>
                    <div className="flex flex-row space-x-3">
                        <span className='sr-only text-black'>Loading...</span>
                        <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                        <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                        <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
                    </div>
                    <br/>
                    <div className='text-center text-xl text-black'>
                        Please be patient...
                    </div>
                </div>
            </>
        )
    }else{
        return(
            <>
                <div id="notfound">
                    <div className="notfound-bg"></div>
                    <div className="notfound">
                        <div className="notfound-404 notfound-img">
                            <ImageNext
                                className="my-auto mx-auto relative "
                                src={connection}
                                width={200}
                                height={200}
                                alt="Banner offer 30% on mobile"
                            />
                        </div>
                        <h2>we are sorry,It seems there is a problem connecting to the server <br/> or data not found. <br/> Please try again or come back later.</h2>
                        <h3>Access Notice</h3>
                        <h5>If you are in a restricted country like Iran, please consider using suitable VPNs or proxies like Nekoray for unrestricted access.</h5>
                        <a href="/" className="home-btn">Reload</a>
                        <div className="notfound-social">
                            <a href="https://github.com/ariyan-emi"><GitHubIcon className="w-8 h-8"/></a>
                            <a href="https://www.linkedin.com/in/ariyan-emami-8b99a3251/"><LinkedInIcon className="w-8 h-8"/></a>
                            <a href="https://webvave.ir/"><LanguageIcon className="w-8 h-8"/></a>
                            <a href="https://www.instagram.com/ariyan_frontend/"><InstagramIcon className="w-8 h-8"/></a>
                        </div>
                    </div>
                </div>
                <style jsx>{`
              #notfound {
                padding: 0;
                margin: 0;
                position: relative;
                height: 100vh;
              }

              #notfound .notfound-bg {
                position: absolute;
                width: 100%;
                height: 100%;
                background-size: cover;
              }

              #notfound .notfound-bg:after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: rgba(255, 0, 36, 0.7);
              }

              #notfound .notfound {
                position: absolute;
                left: 50%;
                top: 50%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
              }

              .notfound {
                max-width: 910px;
                width: 100%;
                line-height: 1.4;
                text-align: center;
              }

              .notfound .notfound-404 {
                position: relative;
                height: 200px;
              }

              .notfound .notfound-404 h1 {
                font-family: 'Montserrat', sans-serif;
                position: absolute;
                left: 50%;
                top: 50%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
                font-size: 220px;
                font-weight: 900;
                margin: 0px;
                color: #fff;
                text-transform: uppercase;
                letter-spacing: 10px;
              }

              .notfound h2 {
                font-family: 'Montserrat', sans-serif;
                font-size: 22px;
                font-weight: 700;
                text-transform: uppercase;
                color: #fff;
                margin-top: 20px;
                margin-bottom: 15px;
              }
              .notfound h3 {
                font-family: 'Montserrat', sans-serif;
                font-size: 17px;
                font-weight: 700;
                text-transform: uppercase;
                color: #fff;
                margin-top: 20px;
                
              }
              .notfound h5 {
                font-family: 'Montserrat', sans-serif;
                font-size: 16px;
                font-weight: 250;
                color: #fff;
                margin-bottom: 15px;
              }

              .notfound .home-btn, .notfound .contact-btn {
                font-family: 'Montserrat', sans-serif;
                display: inline-block;
                font-weight: 700;
                text-decoration: none;
                background-color: transparent;
                border: 2px solid transparent;
                text-transform: uppercase;
                padding: 13px 25px;
                font-size: 18px;
                border-radius: 40px;
                margin: 7px;
                -webkit-transition: 0.2s all;
                transition: 0.2s all;
              }

              .notfound .home-btn:hover, .notfound .contact-btn:hover {
                opacity: 0.8;
              }

              .notfound .home-btn {
                color: rgba(255, 0, 36, 0.7);
                background: #fff;
              }

              .notfound .contact-btn {
                border: 2px solid rgba(255, 255, 255, 0.9);
                color: rgba(255, 255, 255, 0.9);
              }

              .notfound-social {
                margin-top: 25px;
              }

              .notfound-social>a {
                display: inline-block;
                height: 40px;
                line-height: 40px;
                width: 40px;
                font-size: 14px;
                color: rgba(255, 255, 255, 0.9);
                margin: 0 6px;
                -webkit-transition: 0.2s all;
                transition: 0.2s all;
              }
              .notfound-social>a:hover {
                color: rgba(255, 0, 36, 0.7);
                background-color: #fff;
                border-radius: 50%;
              }

              @media only screen and (max-width: 767px) {
                .notfound .notfound-404 h1 {
                  font-size: 182px;
                }
              }

              @media only screen and (max-width: 480px) {
                .notfound-img{
                  margin-left: auto;
                  margin-bottom: auto;
                  margin-top: auto;
                  margin-right: auto;
                  height: 150px;
                  width: 150px;
                }
                .notfound .notfound-404 {
                  height: 146px;
                }
                .notfound .notfound-404 h1 {
                  font-size: 146px;
                }
                .notfound h2 {
                  font-size: 16px;
                }
                .notfound .home-btn, .notfound .contact-btn {
                  font-size: 14px;
                }
              }

            `}</style>
            </>
        )
    }

}