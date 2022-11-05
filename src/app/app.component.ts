import { Component, OnInit } from '@angular/core';
import { Tornillo } from './interfaces/tornillo';

import { TornillosService } from './services/tornillos/tornillos.service';
import { DialogService } from 'primeng/dynamicdialog';

import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Prueba-Angular-Mercadona';

  tornillos: Tornillo[] = [];

  tornillosNuevos: Tornillo[] = [];

  mostrarTabla: boolean = false;

  constructor(private tornillosService: TornillosService, private dialogService: DialogService) { }

  ngOnInit(): void {

  }

  revisar(): void {
    this.getTornillos();
  }

  getTornillos(): void {
    this.tornillosService.getTornillos().subscribe(res => {
      if (res != null && res != undefined) {
        this.tornillos = res;
        if (this.tornillosNuevos.length > 0) {
          this.tornillos.unshift(...this.tornillosNuevos);
        }
        this.mostrarTabla = true;
      }
    })
  }

  nuevoProducto() {
    const ref = this.dialogService.open(NuevoProductoComponent, {
      header: 'Nuevo producto',
      width: '60%',
      contentStyle: { "overflow": "hidden" },
    });

    ref.onClose.subscribe((tornillo: Tornillo) => {
      if (tornillo != undefined) {
        this.tornillosNuevos.unshift(tornillo);
        this.revisar();
      }
    });
  }

  eliminar(tornillo: Tornillo): void {
    
  }
}
