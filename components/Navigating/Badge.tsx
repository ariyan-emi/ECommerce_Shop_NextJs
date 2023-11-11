import Badge from "@mui/material/Badge";
import Image from "next/image";
import ShoppingBagIcon from "../../assets/icon/minicon/cart.png";
import {useSelector} from "react-redux";
import Link from "next/link";
import {totalCartItems} from "../Redux/slices/shoppingCartSlice";
export function BadgeCart() {
    const cartItemsQuantity = useSelector(totalCartItems);
        return(
            <Link href={'/cart'} className="mx-1">
                <Badge anchorOrigin={{vertical: 'top', horizontal: 'left'}} badgeContent={cartItemsQuantity}
                       color="secondary" overlap="circular">
                    <Image alt="icon image for Cart page" src={ShoppingBagIcon}
                           className="lg:w-10 lg:h-10 w-8 h-8 mr-3 "/>
                </Badge>
            </Link>
        )
}
