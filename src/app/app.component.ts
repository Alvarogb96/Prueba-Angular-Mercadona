import { Component, OnInit } from '@angular/core';
import { Tornillo } from './interfaces/tornillo';

import { TornillosService } from './services/tornillos/tornillos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Prueba-Angular-Mercadona';

  tornillos: Tornillo[] = [];

  mostrarTabla: boolean = false;

  constructor( private tornillosService: TornillosService){}

  ngOnInit(): void {
  
  }

  revisar(): void {
    this.getTornillos();
  }

  getTornillos(): void {
    this.tornillosService.getTornillos().subscribe(res => {
      if(res != null && res != undefined){
        this.tornillos = res;
        this.mostrarTabla = true;
      }
    })
  }
}
