import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import Swal, { SweetAlertIcon, SweetAlertPosition, SweetAlertResult } from 'sweetalert2'


@Injectable()
export class UtilService {

  constructor(private _sanitizer:DomSanitizer) { }

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

  openModal( title : string, icon?: SweetAlertIcon, confirmButtonText?: string, cancelButtonText?: string,  text?: string): Promise<SweetAlertResult>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    return swalWithBootstrapButtons.fire({
      title,
      text,
      icon,
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      reverseButtons: false
    })
    
  }

  transformStringToHtml(v:string):SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(v);
  }

}

