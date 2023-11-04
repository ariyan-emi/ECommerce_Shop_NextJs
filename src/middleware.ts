import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
    let res;
    try {
         await fetch('https://console.firebase.google.com/u/0/project/nextjsecommerce-c8701/database/nextjsecommerce-c8701-default-rtdb/data/').then((response)=>{res = response.status})
    } catch (error) {
        res = 403
    }
    console.log(res)
    if(res !== 200){
        return NextResponse.redirect(new URL('/network', req.url))
    }
}

export const config = {
    matcher: '/',
}