import * as React from "react";
import {Skeleton} from "@mui/material";

export function LoadingProduct() {
    return (
        <>
            <section
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                <div className="bg-white rounded-2xl" style={{width:300,height:400}}>
                    <Skeleton variant="rounded" sx={{borderRadius:4}} width={'100%'} height={'60%'}/>
                    <Skeleton  height={30} sx={{marginTop:2,marginBottom:1,marginLeft:1}} width='90%'/>
                    <Skeleton width="60%" height={70} sx={{marginLeft:1}}/>
                    <Skeleton width="20%" height={90} sx={{position:'relative',left:'75%',bottom:80}}/>
                </div>
                <div className="bg-white rounded-2xl" style={{width:300,height:400}}>
                    <Skeleton variant="rounded" sx={{borderRadius:4}} width={'100%'} height={'60%'}/>
                    <Skeleton  height={30} sx={{marginTop:2,marginBottom:1,marginLeft:1}} width='90%'/>
                    <Skeleton width="60%" height={70} sx={{marginLeft:1}}/>
                    <Skeleton width="20%" height={90} sx={{position:'relative',left:'75%',bottom:80}}/>
                </div>
                <div className="bg-white rounded-2xl" style={{width:300,height:400}}>
                    <Skeleton variant="rounded" sx={{borderRadius:4}} width={'100%'} height={'60%'}/>
                    <Skeleton  height={30} sx={{marginTop:2,marginBottom:1,marginLeft:1}} width='90%'/>
                    <Skeleton width="60%" height={70} sx={{marginLeft:1}}/>
                    <Skeleton width="20%" height={90} sx={{position:'relative',left:'75%',bottom:80}}/>
                </div>
                <div className="bg-white rounded-2xl" style={{width:300,height:400}}>
                    <Skeleton variant="rounded" sx={{borderRadius:4}} width={'100%'} height={'60%'}/>
                    <Skeleton  height={30} sx={{marginTop:2,marginBottom:1,marginLeft:1}} width='90%'/>
                    <Skeleton width="60%" height={70} sx={{marginLeft:1}}/>
                    <Skeleton width="20%" height={90} sx={{position:'relative',left:'75%',bottom:80}}/>
                </div>
                <div className="bg-white rounded-2xl" style={{width:300,height:400}}>
                    <Skeleton variant="rounded" sx={{borderRadius:4}} width={'100%'} height={'60%'}/>
                    <Skeleton  height={30} sx={{marginTop:2,marginBottom:1,marginLeft:1}} width='90%'/>
                    <Skeleton width="60%" height={70} sx={{marginLeft:1}}/>
                    <Skeleton width="20%" height={90} sx={{position:'relative',left:'75%',bottom:80}}/>
                </div>
                <div className="bg-white rounded-2xl" style={{width:300,height:400}}>
                    <Skeleton variant="rounded" sx={{borderRadius:4}} width={'100%'} height={'60%'}/>
                    <Skeleton  height={30} sx={{marginTop:2,marginBottom:1,marginLeft:1}} width='90%'/>
                    <Skeleton width="60%" height={70} sx={{marginLeft:1}}/>
                    <Skeleton width="20%" height={90} sx={{position:'relative',left:'75%',bottom:80}}/>
                </div>
            </section>

        </>
    )
}