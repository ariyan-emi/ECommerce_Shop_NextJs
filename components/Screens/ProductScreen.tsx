'use client'
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
import {getProductById} from "../Redux/slices/productsSlice";
import {getIsAuth} from "../Redux/slices/isAuthSlice";
import {
    addExtraItemAsync,
    addToCartAsync,
    deleteItemFromCart,
    isItemInCart,
    minusItemAsync
} from "../Redux/slices/shoppingCartSlice";
import {auth} from "../../firebase/firebase";
import {useRouter} from "next/navigation";
import swal from "sweetalert";
import {useEffect, useState} from "react";

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
    const [isLoading,setIsLoading] =useState(true)
    const product = useSelector(getProductById(id));
    const isAuth = useSelector(getIsAuth);
    const isInCart = useSelector(isItemInCart(Number(id)));
    // @ts-ignore
    const dispatch = useDispatch();
    const router = useRouter()
    const labels: { [index: string]: string } = {
        1: 'Useless',
        2: 'Poor',
        3: 'Ok',
        4: 'Good',
        5: 'Excellent',
    };

    setTimeout(
        function () {
            setIsLoading(false)
        }, 1300);
    function addToCart() {
        if (isAuth) {
            // @ts-ignore
            dispatch(addToCartAsync(product, auth.currentUser.uid));
            return;
        }

        router.push('/auth')
    }

    let items = 0;
    // @ts-ignore
    const {shoppingCart} = useSelector(state => state);
    let productOnCart = shoppingCart.find((x: any) => x.id === Number(id))
    if (productOnCart) {
        items = productOnCart.items
    }
    let uid: string;
    if (auth.currentUser !== null) {
        uid = auth.currentUser.uid;
    }

    // @ts-ignore

    function showHideDeleteConfirmation() {
        swal({
            title: "Are you sure?",
            text: "Would you like to delete your shopping cart!",
            icon: "warning",
            buttons: ["Cancel", "Ok"],
            dangerMode: true,
            closeOnClickOutside: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteItem()
                }
            });
    }

    function deleteItem() {
        // @ts-ignore
        dispatch(deleteItemFromCart(id, uid));
    }
    if (!product) {
        return undefined
    }

    const {category, description, image, price, rating, title} = product;
    const productId = product.id



    function minusOneItem() {
        if (items === 1) {
            showHideDeleteConfirmation();
            return;
        }
        // @ts-ignore
        dispatch(minusItemAsync(productId, uid));
    }

    function addOneItem() {
        // @ts-ignore
        dispatch(addExtraItemAsync(productId, uid));
    }
    if (!isLoading) {
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
                                         src={image}
                                         alt={`${title} Image`}
                                         width={'100%'}
                                         height={'100%'}
                                    />
                                </div>
                                <div className="flex -mx-2 mb-5">
                                    <div className="w-full px-2">
                                        {(() => {
                                            if (!isInCart) {
                                                if (isAuth) {
                                                    return (
                                                        <UseButton
                                                            className={"w-full bg-violet-700 hover:bg-violet-900 text-white py-2 px-4 rounded-2xl font-bold"}
                                                            display={'Add to Cart'} onClick={() => {
                                                            addToCart()
                                                            ShowAlert('An Amazing Choice!', "Product successfully added to the cart", "success")
                                                        }} disable={false}/>
                                                    )
                                                } else {
                                                    return (
                                                        <UseButton
                                                            className={"w-full bg-violet-700 hover:bg-violet-900 text-white py-2 px-4 rounded-2xl font-bold"}
                                                            display={'Login'} onClick={() => {
                                                            router.push('/auth')
                                                        }} disable={false}/>
                                                    )
                                                }
                                            } else {
                                                return (
                                                    <div className="flex items-center justify-center w-full">
                                                        <button onClick={minusOneItem}
                                                                className="border text-xl font-bold text-white rounded-xl w-1/3 bg-violet-700 hover:bg-violet-900 py-2 px-4 mr-2">-
                                                        </button>
                                                        <span
                                                            className="text-center my-auto w-1/4 text-xl font-bold">{items}</span>
                                                        <button
                                                            onClick={addOneItem}
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
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{title}</h2>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 uppercase">
                                    {category}
                                </p>
                                <div className="flex mb-5">
                                    <div className="mr-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Price: </span>
                                        <span className="text-gray-600 dark:text-gray-300">{(() => {
                                            if (price !== undefined) {
                                                return (
                                                    price.toFixed(2)
                                                )
                                            } else {
                                                return "Undefined"
                                            }
                                        })()}</span>
                                    </div>
                                    <div>
                                        <span
                                            className="font-bold text-gray-700 dark:text-gray-300">Availability: </span>
                                        <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                                    </div>
                                </div>
                                <div className="mb-5 align-middle flex">
                                    <StyledRating
                                        name="highlight-selected-only"
                                        value={(() => {
                                            if (rating !== undefined) {
                                                return (
                                                    rating.rate.toFixed(0)
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
                                    <span
                                        className="py-1 my-auto font-bold text-black text-xl"><ArrowForwardIcon/></span>
                                    <span className="pt-1 my-auto font-bold text-black text-xl">{labels[(() => {
                                        if (rating !== undefined) {
                                            return (
                                                rating.rate.toFixed(0)
                                            )
                                        } else {
                                            return 1
                                        }
                                    })()]}</span>
                                </div>
                                <div className="mb-5">
                                    <span className="font-bold text-gray-800">Product Description:</span>
                                    <p className="text-gray-700 text-md mt-2">
                                        {description}
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <span className="font-bold text-gray-800">Similar Products</span>
                                    <Divider/>
                                    <SimilarProducts category={category} id={id}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <Loading/>
        )

    }

}