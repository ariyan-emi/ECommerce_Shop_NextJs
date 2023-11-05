import * as React from "react";
import {Skeleton} from "@mui/material";
import ImageNext from "next/image";
import connection from "../../assets/icon/Brands/connection.png";

export function Loading() {
    return (
        <>
            <section
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                <div className="bg-white rounded-2xl" style={{width:300,height:400}}>
                    <Skeleton variant="rounded" sx={{borderRadius:4}} width={'100%'} height={'60%'}/>
                    <Skeleton  height={30} sx={{marginTop:2,marginBottom:1,marginLeft:1}} width='90%'/>
                    <Skeleton width="60%" height={70} sx={{marginLeft:1}}/>
                    <Skeleton width="20%" height={90} sx={{position:'relative',left:'75%',bottom:80}}/>
                </div>
                <div className="bg-white rounded-2xl" style={{width:300,height:400}}>
                    <Skeleton variant="rounded" sx={{borderRadius:4}} width={'100%'} height={'60%'}/>
                    <Skeleton  height={30} sx={{marginTop:2,marginBottom:1,marginLeft:1}} width='90%'/>
                    <Skeleton width="60%" height={70} sx={{marginLeft:1}}/>
                    <Skeleton width="20%" height={90} sx={{position:'relative',left:'75%',bottom:80}}/>
                </div>
                <div className="bg-white rounded-2xl" style={{width:300,height:400}}>
                    <Skeleton variant="rounded" sx={{borderRadius:4}} width={'100%'} height={'60%'}/>
                    <Skeleton  height={30} sx={{marginTop:2,marginBottom:1,marginLeft:1}} width='90%'/>
                    <Skeleton width="60%" height={70} sx={{marginLeft:1}}/>
                    <Skeleton width="20%" height={90} sx={{position:'relative',left:'75%',bottom:80}}/>
                </div>
                <div className="bg-white rounded-2xl" style={{width:300,height:400}}>
                    <Skeleton variant="rounded" sx={{borderRadius:4}} width={'100%'} height={'60%'}/>
                    <Skeleton  height={30} sx={{marginTop:2,marginBottom:1,marginLeft:1}} width='90%'/>
                    <Skeleton width="60%" height={70} sx={{marginLeft:1}}/>
                    <Skeleton width="20%" height={90} sx={{position:'relative',left:'75%',bottom:80}}/>
                </div>
                <div className="bg-white rounded-2xl" style={{width:300,height:400}}>
                    <Skeleton variant="rounded" sx={{borderRadius:4}} width={'100%'} height={'60%'}/>
                    <Skeleton  height={30} sx={{marginTop:2,marginBottom:1,marginLeft:1}} width='90%'/>
                    <Skeleton width="60%" height={70} sx={{marginLeft:1}}/>
                    <Skeleton width="20%" height={90} sx={{position:'relative',left:'75%',bottom:80}}/>
                </div>
                <div className="bg-white rounded-2xl" style={{width:300,height:400}}>
                    <Skeleton variant="rounded" sx={{borderRadius:4}} width={'100%'} height={'60%'}/>
                    <Skeleton  height={30} sx={{marginTop:2,marginBottom:1,marginLeft:1}} width='90%'/>
                    <Skeleton width="60%" height={70} sx={{marginLeft:1}}/>
                    <Skeleton width="20%" height={90} sx={{position:'relative',left:'75%',bottom:80}}/>
                </div>
            </section>

        </>
    )
}
export function Network() {
    return (
        <>
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
                        <h2>we are sorry,It seems there is a problem connecting to the server. <br/> Please try again or come back later.</h2>
                        <h3>Access Notice</h3>
                        <h5>If you are in a restricted country like Iran, please consider using suitable VPNs or proxies like Nekoray for unrestricted access.</h5>
                        <a href="/" className="home-btn">Reload</a>
                    </div>
                </div>
                <style jsx>{`
              #notfound {
                padding: 0;
                margin: 0;
                position: relative;
                height: 50vh;
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
                margin: 0;
                color: rgba(255, 0, 36, 1);
                text-transform: uppercase;
                letter-spacing: 10px;
              }

              .notfound h2 {
                font-family: 'Montserrat', sans-serif;
                font-size: 22px;
                font-weight: 700;
                text-transform: uppercase;
                color: rgba(255, 0, 36, 1);
                margin-top: 20px;
                margin-bottom: 15px;
              }
              .notfound h3 {
                font-family: 'Montserrat', sans-serif;
                font-size: 17px;
                font-weight: 700;
                text-transform: uppercase;
                color: rgba(255, 0, 36, 1);
                margin-top: 20px;
                
              }
              .notfound h5 {
                font-family: 'Montserrat', sans-serif;
                font-size: 16px;
                font-weight: 250;
                color: rgba(255, 0, 36, 1);
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
                color: rgba(255, 0, 36, 1);
                background: #fff;
              }

              .notfound .contact-btn {
                border: 2px solid rgba(255, 0, 36, 0.9);
                color: rgba(255, 0, 36, 0.9);
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
                color: rgba(255, 0, 36, 1);
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

        </>
    )
}