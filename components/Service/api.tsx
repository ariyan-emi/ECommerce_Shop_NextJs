export function MenProducts(){
    return fetch('https://fakestoreapi.com/products/category/men\'s%20clothing')
        .then(res=>{
            res.json()
            console.log(res.json())
            return res.json();
        })
}
export function AccessoriesProducts(){
    fetch('https://fakestoreapi.com/products/categories/jewelery')
        .then(res=>{
            res.json()
            console.log(res.json())
            return res.json();
        })

}
export function WomenProducts(){
        fetch('https://fakestoreapi.com/products/category/women\'s%20clothing')
            .then(res=>{
                res.json()
                console.log(res.json())
                return res.json();
            })
}