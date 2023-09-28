export function LocalStorage() {
    if ( typeof window !== "undefined" ? window.localStorage.getItem('ShoppingCard') : false){
        let count = JSON.parse(localStorage.getItem('ShoppingCard') || '{}')
        const nonDuplicatedData:any = [];
        count.map((x:any) => {
            if (!nonDuplicatedData[x.id]){
                nonDuplicatedData[x.id] = x;
            }
        });
        const filteredData = nonDuplicatedData.filter((n:any)  => {return n != undefined});
        return filteredData
    }else{
        if (typeof window !== 'undefined') {
            localStorage.setItem('ShoppingCard', "[]" )
            return '';
        }else{
            localStorage.setItem('ShoppingCard', "[]" )
            return '';
        }


    }
}
