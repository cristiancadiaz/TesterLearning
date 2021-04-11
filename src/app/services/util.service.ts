import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2'


@Injectable()
export class UtilService {

  constructor() { }

  openCustomAlert( title : string,icon: SweetAlertIcon, timer: number, position : SweetAlertPosition,text? : string, showConfirmButton : boolean = false){
      return Swal.fire({
        title,
        text,
        icon,
        position : position,
        timer,
        showConfirmButton
      })
  }

}

