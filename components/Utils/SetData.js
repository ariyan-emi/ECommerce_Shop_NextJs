import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {onValue,child,get, ref} from "firebase/database";
import {auth, db} from "../../firebase/firebase";
import {setProducts} from "../Redux/slices/productsSlice";
import {wait} from "./Utils";
import {setIsAuth} from "../Redux/slices/isAuthSlice";
import { onAuthStateChanged } from "firebase/auth";
import {setOrFirstAddToCart} from "../Redux/slices/shoppingCartSlice";
export function SetData() {
    const dispatch = useDispatch();

    useEffect(() => {
        const starCountRef = ref(db, "products");
        onValue(starCountRef, async snapshot => {
            const data = snapshot.val();
            dispatch(setProducts(data));
        });

        //! Authentication listener
        onAuthStateChanged(auth, async user => {
            await wait(1000);
            if (user) {
                dispatch(setIsAuth(true));
                const dbRef = ref(db);
                get(child(dbRef, `users/${user.uid}/cart`))
                    .then(snapshot => {
                        if (snapshot.exists()) {
                            dispatch(setOrFirstAddToCart(snapshot.val()));
                        } else {
                            dispatch(setOrFirstAddToCart());
                        }
                    })
            } else {
                dispatch(setIsAuth(false));
                dispatch(setOrFirstAddToCart());
            }
        });
    }, []);
    return(
        <>
        </>
    )
}
