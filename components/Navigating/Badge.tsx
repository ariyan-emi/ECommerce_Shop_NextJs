import Badge from "@mui/material/Badge";
import Image from "next/image";
import ShoppingBagIcon from "../../assets/icon/minicon/cart.png";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Link from "next/link";
export function BadgeCart() {

    let [notification,setNotification]=useState<number>(0)
    const cart = useSelector((state: any) => state.cart);
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    if (cart !== null){
        notification = cart.length
    }else {
        notification = 0
    }
    if (isClient){
        return(
            <Link href='cart' className="mx-1">
                <Badge anchorOrigin={{vertical: 'top', horizontal: 'left'}} badgeContent={(() => {
                    if (notification !== undefined) {
                        return notification
                    }else {
                        return 0
                    }
                })()}
                       color="secondary" overlap="circular">
                    <Image alt="icon image for Cart page" src={ShoppingBagIcon}
                           className="lg:w-10 lg:h-10 w-8 h-8 mr-3 "/>
                </Badge>
            </Link>
        )
    }
}
