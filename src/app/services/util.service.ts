import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import Swal, { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2'


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

  transformStringToHtml(v:string):SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(v);
  }


}

