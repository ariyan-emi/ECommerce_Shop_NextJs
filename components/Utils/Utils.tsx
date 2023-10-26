import swal from 'sweetalert';
export function GetTaxes() {
    return Number(1.99)
}
export function ShowAlert(title:string, discription:string, icon:string){
    swal(title, discription, icon);
}