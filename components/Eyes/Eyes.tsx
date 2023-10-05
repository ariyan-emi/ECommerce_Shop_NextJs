'use client'
import {useEffect} from "react";
import { Input, Output } from 'eyeComponentTypes';
export default function Eyes() {
    useEffect(() => {
        const pupilsArray = Array.from(document.getElementsByClassName('pupil'));

        const input: Input = {
            mouseX: {
                start: 0,
                end: window.innerWidth,
                current: 0,
            },
            mouseY: {
                start: 0,
                end: window.innerHeight,
                current: 0,
            },
        };

        input.mouseX.range = input.mouseX.end - input.mouseX.start;
        input.mouseY.range = input.mouseY.end - input.mouseY.start;

        const output: Output = {
            x: {
                start: -70,
                end: 70,
                current: 0,
            },
            y: {
                start: -70,
                end: 70,
                current: 0,
            },
        };

        output.x.range = output.x.end - output.x.start;
        output.y.range = output.y.end - output.y.start;

        const handleMouseMove = (event: MouseEvent) => {
            input.mouseX.current = event.clientX;
            // @ts-ignore
            input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;

            input.mouseY.current = event.clientY;
            // @ts-ignore
            input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;

            // @ts-ignore
            output.x.current = output.x.start + input.mouseX.fraction * output.x.range;
            // @ts-ignore
            output.y.current = output.y.start + input.mouseY.fraction * output.y.range;

            pupilsArray.forEach((pupil, k) => {
                if (pupil instanceof HTMLElement) {
                    pupil.style.transform = `translate(${output.x.current}px, ${output.y.current}px)`;
                }
            });

            console.log('output.x.current', output.x.current);
        };

        const handleResize = () => {
            input.mouseX.end = window.innerWidth;
            input.mouseX.range = input.mouseX.end - input.mouseX.start;

            input.mouseY.end = window.innerHeight;
            input.mouseY.range = input.mouseY.end - input.mouseY.start;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return(
        <>
            <div className="m-0">
            <div className="w-48 h-48 absolute -ml-24 -mt-24 overflow-hidden bg-white left-1/2 top-1/2 rounded-full" style={{marginLeft:"-225px"}}>
                <div className="pupil"></div>
            </div>
            <div className="w-48 h-48 absolute -ml-24 -mt-24 overflow-hidden bg-white left-1/2 top-1/2 rounded-full" style={{marginLeft:"25px"}}>
                <div className="pupil"></div>
            </div>
            </div>
            <style jsx>{`
              .pupil{
                background-color:#000;
                width:50px;
                height: 50px;
                border-radius:50%;
                position:absolute;
                left:50%;
                top:50%;
                margin-left: -25px;
                margin-top:-25px;
              }`}</style>
        </>
    );
};
