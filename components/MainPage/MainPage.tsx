import BannerPc from '../../assets/banner/bannerPc.png';
import BannerPhone from '../../assets/banner/bannerPhone.png';
import Image from 'next/image'

export default function MainPage() {
    return (
        <>
            <div className="hidden md:flex md:top-0 absolute w-full -z-10 lg:-top-20">
                <Image
                    src={BannerPc}
                    alt="Banner offer 30%"
                />
            </div>
            <div className="md:hidden absolute w-full top-0 -z-10">
                <Image
                    src={BannerPhone}
                    alt="Banner offer 30% on mobile"
                />
            </div>
        </>
    );
};

