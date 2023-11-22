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
import SavingsIcon from '@mui/icons-material/Savings';
import PaidIcon from '@mui/icons-material/Paid';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SellIcon from '@mui/icons-material/Sell';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SortIcon from '@mui/icons-material/Sort';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Slider from '@mui/material/Slider';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ExploreIcon from '@mui/icons-material/Explore';
import { SelectChangeEvent } from '@mui/material/Select';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import Rating from "@mui/material/Rating";
import StarIcon from '@mui/icons-material/Star';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import DiamondIcon from '@mui/icons-material/Diamond';
import Link from "next/link";

export function ProductsPage() {
    let data = useSelector(getAllProducts)
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = React.useState('');
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

    const containsKeyword = (val:any) => typeof val === "string" && val.indexOf(search.toLowerCase()) !== -1;
    const dataLowerCased = data.map((item:any) => ({
        ...item,
        title: item.title.toLowerCase()
    }))
    data = dataLowerCased.filter((entry:any) => Object.keys(entry).map(key => entry['title']).some(containsKeyword));
    function changeCategory(Category: string) {
        setCategory(Category)
    }

    if (!isLoading) {
        return (
            <>
                <div className="flex flex-wrap">
                    <div className="p-5 flex-[25%] hidden justify-center text-center items-center align-middle xl:flex md:h-screen">
                        <div className="w-full h-5/6 rounded-2xl">
                           <FilterItems setSearch={setSearch} changeCategory={changeCategory}/>
                        </div>
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
            color: string;
        };
    } = {
        1: {
            icon: <SentimentVeryDissatisfiedIcon color="error" fontSize="inherit" style={{width: 30, height: 30}}/>,
            label: 'Very Dissatisfied',
            color: '#ff0000'
        },
        2: {
            icon: <SentimentDissatisfiedIcon color="error" fontSize="inherit" style={{width: 30, height: 30}}/>,
            label: 'Dissatisfied',
            color: '#ffa700'
        },
        3: {
            icon: <SentimentSatisfiedIcon color="warning" fontSize="inherit" style={{width: 30, height: 30}}/>,
            label: 'Neutral',
            color: '#fff400'
        },
        4: {
            icon: <SentimentSatisfiedAltIcon color="success" fontSize="inherit" style={{width: 30, height: 30}}/>,
            label: 'Satisfied',
            color: '#a3ff00'
        },
        5: {
            icon: <SentimentVerySatisfiedIcon color="success" fontSize="inherit" style={{width: 25, height: 25}}/>,
            label: 'Very Satisfied',
            color: '#2cba00'
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
                            <p style={{padding:2,borderRadius:5,backgroundColor:customIcons[Math.round(rating.rate)].color}}>{rating.rate.toFixed(1)}</p>
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

function FilterItems({changeCategory,setSearch}:any) {
    const [open, setOpen] = React.useState(false);
    const [openSort, setOpenSort] = React.useState(true);
    const [openRate, setOpenRate] = React.useState(false);
    const [value2, setValue2] = React.useState<number[]>([1,700 ]);
    function valuetext(value: number) {
        return `${value}°C`;
    }

    const minDistance = 10;
    const handleChange2 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue2([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue2([clamped - minDistance, clamped]);
            }
        } else {
            setValue2(newValue as number[]);
        }
    };

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClickSort = () => {
        setOpenSort(!openSort);
    };
    const handleClickRate = () => {
        setOpenRate(!openRate);
    };
    const handleChangeSearch = (event: SelectChangeEvent) => {
        setSearch(event.target.value as string);
    };


    return(
        <>
            <List
                sx={{ width: '100%', padding:'10px',borderRadius:3, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <h1 className="text-left text-gray-500">Search</h1>
                <div className="flex w-full my-2">
                    <div className="flex rounded-md w-full">
                        <input type="text" name="q"
                               className="w-full p-3 rounded-md rounded-r-none border-2 border-gray-300 placeholder-current dark:bg-gray-500  dark:text-gray-300 dark:border-none "
                               placeholder="Search..." onChange={handleChangeSearch}/>
                    </div>
                </div>
            </List>
            <List
                sx={{ width: '100%', padding:'10px',marginY:5,borderRadius:3, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <h1 className="text-left text-gray-500">Category</h1>
                <ListItemButton onClick={()=>changeCategory('all')}>
                    <ListItemIcon>
                        <ExploreIcon fontSize='large' />
                    </ListItemIcon>
                    <ListItemText primary="All Items" />
                </ListItemButton>
                <ListItemButton onClick={()=>changeCategory('jewelery')}>
                    <ListItemIcon>
                        <DiamondIcon fontSize='large' />
                    </ListItemIcon>
                    <ListItemText primary="Accessories" />
                </ListItemButton>
                <ListItemButton onClick={()=>changeCategory('men')}>
                    <ListItemIcon>
                        <ManIcon fontSize='large' />
                    </ListItemIcon>
                    <ListItemText primary="Men" />
                </ListItemButton>
                <ListItemButton onClick={()=>changeCategory('women')}>
                    <ListItemIcon>
                        <WomanIcon fontSize='large' />
                    </ListItemIcon>
                    <ListItemText primary="Women" />
                </ListItemButton>
            </List>
            <List
                sx={{
                    padding:'10px',
                    marginY:5,
                    width: '100%',
                    borderRadius:3,
                    bgcolor: 'background.paper',
                }}
            >
                <h1 className="text-left text-gray-500">Sort</h1>
                <ListItemButton onClick={handleClickSort}>
                    <ListItemAvatar>
                        <Avatar>
                            <SortIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Sort By"/>
                    {openSort ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openSort} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <TrendingUpIcon />
                            <div className="w-[2%]"></div>
                            <ListItemText primary="Best Selling" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <PaidIcon />
                            <div className="w-[2%]"></div>
                            <ListItemText primary="Most Expensive" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <SavingsIcon />
                            <div className="w-[2%]"></div>
                            <ListItemText primary="Cheapest" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <SellIcon />
                            <div className="w-[2%]"></div>
                            <ListItemText primary="Newest" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ThumbUpIcon />
                            <div className="w-[2%]"></div>
                            <ListItemText primary="Most Liked"/>
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            
            <List
                sx={{
                    padding:'10px',
                    marginY:5,
                    width: '100%',
                    borderRadius:3,
                    bgcolor: 'background.paper',
                }}
            >
                <h1 className="text-left text-gray-500">Filters</h1>
                <ListItemButton onClick={handleClickRate}>
                    <ListItemAvatar>
                        <Avatar>
                            <StarIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Rateing"/>
                    {openRate ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openRate} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Stars" />
                            <Slider sx={{width:'60%'}}  color="secondary" defaultValue={1} min={1} max={5} aria-label="Default" valueLabelDisplay="auto" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <Divider variant="inset" component="li" />
                <ListItemButton onClick={handleClick}>
                    <ListItemAvatar>
                        <Avatar>
                            <AttachMoneyIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Price"/>

                    {/*مثل دیجیکالا بکنش*/}
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Dollar" />
                            <Slider
                                getAriaLabel={() => 'Minimum distance shift'}
                                value={value2}
                                onChange={handleChange2}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                disableSwap
                                min={1}
                                max={700}
                                sx={{width:'75%'}}
                            />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
    </>)
}