'use client'
import {useEffect, useState} from "react";
import axios from "axios";
import {styled} from '@mui/material/styles';
import Rating, {IconContainerProps} from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Divider} from "@mui/material";
import {SimilarProducts} from "./SimilarProducts";
import {Loading} from "./Loading";
import Header from "../Navigating/Header";
import {useDispatch, useSelector} from "react-redux";
import {UseButton} from "./Button";
import {ShowAlert} from "../Utils/Utils";
import {getAllProducts} from "../Redux/slices/productsSlice";

const StyledRating = styled(Rating)(({theme}) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled
    },
}));

const customIcons: {
    [index: string]: {
        icon: React.ReactElement;
        label: string;
    };
} = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon color="error" fontSize="inherit" style={{width: 35, height: 35}}/>,
        label: 'Very Dissatisfied'
    },
    2: {
        icon: <SentimentDissatisfiedIcon color="error" fontSize="inherit" style={{width: 35, height: 35}}/>,
        label: 'Dissatisfied'
    },
    3: {
        icon: <SentimentSatisfiedIcon color="warning" fontSize="inherit" style={{width: 35, height: 35}}/>,
        label: 'Neutral'
    },
    4: {
        icon: <SentimentSatisfiedAltIcon color="success" fontSize="inherit" style={{width: 35, height: 35}}/>,
        label: 'Satisfied'
    },
    5: {
        icon: <SentimentVerySatisfiedIcon color="success" fontSize="inherit" style={{width: 35, height: 35}}/>,
        label: 'Very Satisfied'
    },
};

function IconContainer(props: IconContainerProps) {
    const {value, ...other} = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

export function ProductScreen({id}: any) {
    let allProducts = useSelector(getAllProducts);
    let data:any = allProducts[id-1]
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (allProducts.length < 0){
            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
        }

    }, [id]);
    const dispatch = useDispatch();
    const labels: { [index: string]: string } = {
        1: 'Useless',
        2: 'Poor',
        3: 'Ok',
        4: 'Good',
        5: 'Excellent',
    };
    const cart = useSelector((state: any) => state.cart);
    let indexItem :any;
if (cart !== null){
     indexItem = cart.findIndex((object:any) => {
        return object.id === Number(id);
    });
}
    if (!isLoading || data !== undefined){
        return (
            <>
                <Header/>
                <div className="py-8">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row -mx-4">
                            <div className="md:flex-1 px-4">
                                <div
                                    className="h-[400px] md:h-[700px] bg-gray-300 dark:bg-gray-700 mb-4 border rounded-3xl">
                                    <img className="w-full h-full rounded-3xl"
                                         src={data.image}
                                         alt={`${data.title} Image`}
                                         width={'100%'}
                                         height={'100%'}
                                    />
                                </div>
                                <div className="flex -mx-2 mb-5">
                                    <div className="w-full px-2">
                                        {(() => {
                                            if (indexItem == -1) {
                                                return (
                                                    <UseButton className={"w-full bg-violet-700 hover:bg-violet-900 text-white py-2 px-4 rounded-2xl font-bold"} display={'Add to Cart'} onClick={() =>{
                                                        // dispatch(addToCart({data: data}))
                                                        ShowAlert('An Amazing Choice!',"Product successfully added to the cart","success")
                                                    }} disable={false}/>
                                                )
                                            } else {
                                                return (
                                                    <div className="flex items-center justify-center w-full">
                                                        <button onClick={() => {
                                                            // dispatch(CounterSubtract({action: indexItem}))
                                                        }}
                                                                className="border text-xl font-bold text-white rounded-xl w-1/3 bg-violet-700 hover:bg-violet-900 py-2 px-4 mr-2">-
                                                        </button>
                                                        <span className="text-center my-auto w-1/4 text-xl font-bold">{(() => {
                                                            return (
                                                                cart[indexItem].count
                                                            )
                                                        })()}</span>
                                                        <button
                                                            onClick={() => {
                                                                // dispatch(CounterPlus({action: indexItem}))
                                                            }}
                                                            className="border text-xl font-bold text-white rounded-xl w-1/3 bg-violet-700 hover:bg-violet-900 py-2 px-4 ml-2">+
                                                        </button>
                                                    </div>
                                                )
                                            }
                                        })()}

                                    </div>
                                </div>
                            </div>
                            <div className="md:flex-1 px-4">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{data.title}</h2>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 uppercase">
                                    {data.category}
                                </p>
                                <div className="flex mb-5">
                                    <div className="mr-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Price: </span>
                                        <span className="text-gray-600 dark:text-gray-300">{(() => {
                                            if (data.price !== undefined) {
                                                return (
                                                    data.price.toFixed(2)
                                                )
                                            } else {
                                                return "Undefined"
                                            }
                                        })()}</span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Availability: </span>
                                        <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                                    </div>
                                </div>
                                <div className="mb-5 align-middle flex">
                                    <StyledRating
                                        name="highlight-selected-only"
                                        value={(() => {
                                            if (data.rating !== undefined) {
                                                return (
                                                    data.rating.rate.toFixed(0)
                                                )
                                            } else {
                                                return 1
                                            }
                                        })()}
                                        IconContainerComponent={IconContainer}
                                        getLabelText={(value: number) => customIcons[value].label}
                                        highlightSelectedOnly
                                        readOnly
                                    />
                                    <span className="py-1 my-auto font-bold text-black text-xl"><ArrowForwardIcon/></span>
                                    <span className="pt-1 my-auto font-bold text-black text-xl">{labels[(() => {
                                        if (data.rating !== undefined) {
                                            return (
                                                data.rating.rate.toFixed(0)
                                            )
                                        } else {
                                            return 1
                                        }
                                    })()]}</span>
                                </div>
                                <div className="mb-5">
                                    <span className="font-bold text-gray-800">Product Description:</span>
                                    <p className="text-gray-700 text-md mt-2">
                                        {data.description}
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <span className="font-bold text-gray-800">Similar Products</span>
                                    <Divider />
                                    <SimilarProducts category={data.category} id={id}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }else{
        return (
            <Loading/>
        )

    }

}