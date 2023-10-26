export function UseButton({className,display,onClick,disable}:any){
    return(
        <button className={className} onClick={onClick} disabled={disable}>
            {display}
        </button>
    )
}