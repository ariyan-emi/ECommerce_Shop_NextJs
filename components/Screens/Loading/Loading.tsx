export function Loading(){
    return(
        <>
        <div className='flex flex-col  justify-center items-center bg-white h-screen dark:invert'>
            <div className="flex flex-row space-x-3">
            <span className='sr-only text-black'>Loading...</span>
            <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
            </div>
            <br/>
            <div className='text-center text-xl text-black'>
                Please be patient...
            </div>
        </div>

        </>
    )
}