'use client'
import swal from 'sweetalert';
import { useState, useEffect } from 'react';

export const wait = (time:any) => new Promise(resolve => setTimeout(resolve, time));

export function GetTaxes() {
    return Number(1.99)
}
export function ShowAlert(title:string, discription:string, icon:string){
    swal(title, discription, icon);
}


type WindowDimentions = {
    width: number | undefined;
    height: number | undefined;
};

const useWindowDimensions = (): WindowDimentions => {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowDimensions;
};

export default useWindowDimensions;