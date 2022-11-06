import { Component, OnInit } from '@angular/core';
import { Tornillo } from './interfaces/tornillo';

import { TornillosService } from './services/tornillos/tornillos.service';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';

import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';

import { Constantes } from './constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Prueba-Angular-Mercadona';

  constantes = Constantes;

  usuario!: string;

  tornillos: Tornillo[] = [];

  tornillosNuevos: Tornillo[] = [];

  total!: number;

  mostrarUsuario: boolean = false;
  mostrarTabla: boolean = false;
  mostrarLogin: boolean = false;
  cargando!: boolean;

  constructor(private tornillosService: TornillosService, private dialogService: DialogService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.getTornillos();
  }

  revisar(): void {
    this.mostrarLogin = true;
  }

  getTornillos(): void {
    this.tornillosService.getTornillos().subscribe(res => {
      if (res != null && res != undefined) {
        this.tornillos = res;
        this.total = this.tornillos.length;

        setTimeout(() => {
          this.cargando = false
        }, 2000)
      }
    })
  }

  nuevoProducto() {
    const ref = this.dialogService.open(NuevoProductoComponent, {
      header: this.constantes.nuevo_producto,
      width: '60%',
      contentStyle: { "overflow": "hidden" },
      closable: false,
    });

    ref.onClose.subscribe((tornillo: Tornillo) => {
      if (tornillo != undefined) {
        this.tornillosNuevos = [...this.tornillos];
        this.tornillosNuevos.unshift(tornillo);
        this.tornillos = [...this.tornillosNuevos];
      }
    });
  }

  eliminar(tornilloSeleccionado: Tornillo): void {
    this.confirmationService.confirm({
      message: this.constantes.desea_eliminar,
      header: this.constantes.confirmacion,
      acceptLabel: this.constantes.eliminar,
      rejectLabel: this.constantes.cancelar,
      acceptIcon: 'null',
      rejectIcon: 'null',
      accept: () => {
          this.tornillos = this.tornillos.filter(tornillo => tornillo != tornilloSeleccionado);
      }
  });
  }

  loginEvent(event: boolean): void {
    if(event){
      this.mostrarLogin = true;
    } else {
      this.mostrarTabla = false;
      this.mostrarLogin = false;
      this.mostrarUsuario = false;
      this.total = this.tornillos.length;
    }
    
  }

  mostrarUsuarioEvent(event: boolean): void {
    if(event){
      this.cargando = true;
      this.mostrarLogin = false;
      this.mostrarUsuario = event;
      setTimeout(() => {
        this.cargando = false;
        this.mostrarTabla = true;
      }, 2000)
      
    } 
    
  }

  usuarioEvent(event: string): void {
    this.usuario = event;
  }
}
