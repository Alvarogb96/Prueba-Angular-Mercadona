import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public validationField(field: any): boolean {
    let res!: boolean;
    if (field != null && field != undefined && field != '') {
      res = true;
    } else {
      res = false;
    }

    return res;
  }
}
