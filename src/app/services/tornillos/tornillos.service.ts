import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tornillo } from 'src/app/interfaces/tornillo';

@Injectable({
  providedIn: 'root'
})
export class TornillosService {

  constructor(private http: HttpClient) { }

  getTornillos(): Observable<Tornillo[]> {
    return this.http.get<Tornillo[]>('assets/tornillos.json');

}
}
