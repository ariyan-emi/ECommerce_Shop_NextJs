import Image from "next/image";
import AboutUs from '../../assets/banner/AboutUs.png';
import Header from "../Navigating/Header";

export function About() {
    return (
        <html className="md:overflow-x-hidden md:overflow-hidden">
        <body>
        <Header/>
        <div className="flex min-h-screen items-center justify-center">
            <div className="lg:flex items-center max-w-screen-xl mb-[15vh]">
                <div className="lg:w-3/4 p-10">
                    <div className="image object-center text-center">
                        <Image src={AboutUs} className="w-full" alt="About me Image"/>
                    </div>
                </div>
                <div className="lg:w-2/3 p-5">
                    <div className="text">
                        <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
                        <h2 className="my-4 font-bold text-3xl  lg:text-4xl ">About <span
                            className="text-indigo-600">Our Company</span>
                        </h2>
                        <p className="text-gray-700 text-lg">
                            Hello! I&apos;m <span className="text-xl font-bold text-yellow-600"><a
                            href="https://webvave.ir">Ariyan Emami</a></span>, a passionate programmer who loves
                            coding and crafting unique digital experiences. This online store, <span
                            className="text-xl font-bold text-violet-700"><a
                            href="https://webvave.ir">WebVaVe</a></span>, is the result of my efforts in programming
                            and web design.

                            With over 3 years of experience in programming, I&apos;ve implemented all my knowledge
                            and skills into this website. These experiences have helped me to create and improve
                            this digital space using the best programming practices.

                            Establishing a direct connection between users and technology is one of my main goals. I
                            aim to enhance the user experience through coding and web design, introducing them to
                            the digital world.

                            At every step, I&apos;m eager to learn and stay updated with the latest technologies and
                            programming methods. This is where I can showcase my abilities and turn my ideas into
                            reality.

                            Thank you for your support. I hope that by designing and creating this online
                            store, <span className="text-xl font-bold text-violet-700"><a
                            href="https://webvave.ir">WebVaVe</a></span>, I can demonstrate my programming and web
                            design skills and provide a unique digital experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </body>
        </html>
    )
}