import * as React from "react";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getAllProducts} from "../Redux/slices/productsSlice";
import {Loading} from "./Loading";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import ImageNext from "next/image";
import Rating from "@mui/material/Rating";
import Link from "next/link";

export function ProductsPage() {
    let data = useSelector(getAllProducts)
    const [isLoading, setIsLoading] = useState(true);
    const [category, setCategory] = useState("all")
    useEffect(() => {
        if (data.length !== 0) {
            setIsLoading(false)
        }
    }, [data]);
    if (category == "men") {
        data = data.filter((item: any) => item['category'] == "men");
    } else if (category == "women") {
        data = data.filter((item: any) => item['category'] == "women");
    } else if (category == "jewelery") {
        data = data.filter((item: any) => item['category'] == "jewelery");
    }
    if (!isLoading) {
        return (
            <>
                <div className="flex flex-wrap">
                    <div className="p-5 flex-[25%] md:h-screen bg-violet-950">
                        Hello
                    </div>
                    <div className="p-5 flex-[75%]">
                        <div className="flex flex-wrap justify-center">
                        {data.map((data: any, index: number) => {
                            return (
                                <div key={index}>
                                    <Products Product={data}/>
                                </div>
                            );
                        })}
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (<Loading/>)
    }

}

function Products({Product}: any) {
    const {title, price, category, image, rating, id} = Product;
    const customIcons: {
        [index: string]: {
            icon: React.ReactElement;
            label: string;
        };
    } = {
        1: {
            icon: <SentimentVeryDissatisfiedIcon color="error" fontSize="inherit" style={{width: 30, height: 30}}/>,
            label: 'Very Dissatisfied'
        },
        2: {
            icon: <SentimentDissatisfiedIcon color="error" fontSize="inherit" style={{width: 30, height: 30}}/>,
            label: 'Dissatisfied'
        },
        3: {
            icon: <SentimentSatisfiedIcon color="warning" fontSize="inherit" style={{width: 30, height: 30}}/>,
            label: 'Neutral'
        },
        4: {
            icon: <SentimentSatisfiedAltIcon color="success" fontSize="inherit" style={{width: 30, height: 30}}/>,
            label: 'Satisfied'
        },
        5: {
            icon: <SentimentVerySatisfiedIcon color="success" fontSize="inherit" style={{width: 25, height: 25}}/>,
            label: 'Very Satisfied'
        },
    };
    return (
        <>
            <Link href={`products/${id}`}>
            <div className="flex justify-center container mx-auto sm:px-4 mt-5 w-auto">
                <div className="relative flex flex-col min-w-0 break-words border bg-white border-1 border-gray-300 p-6 rounded-2xl">
                    {customIcons[Math.round(rating.rate)].icon}
                    <div className="about-product text-center mt-2">
                        <img
                            src={image}
                            alt={`Image of ${title}`} className="h-72 w-64"/>
                        <div>
                            <h6 className="mt-2 font-bold">{(() => {
                                if (title !== undefined) {
                                   if (title.length > 30){
                                       return (
                                           title.substring(0, 30) + "..."
                                       )
                                   }else{
                                       return (
                                           title
                                       )
                                   }
                                }
                            })()}</h6>
                            <h4 className="uppercase">{category}</h4>
                        </div>
                    </div>
                    <div className="stats mt-2">
                        <div className="flex justify-between p-price">
                            <Rating name="half-rating-read" defaultValue={rating.rate} precision={0.5} readOnly />
                            <p>{rating.rate}</p>
                        </div>
                    </div>
                    <div className="flex justify-between total font-bold mt-4">
                        <span>Price</span><span>${price}</span></div>
                </div>
            </div>
            </Link>
        </>
    )
}
