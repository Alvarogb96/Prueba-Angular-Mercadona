import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Tornillo, TORNILLO_BLANK } from 'src/app/interfaces/tornillo';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent implements OnInit {

  producto: Tornillo = TORNILLO_BLANK();

  precio: number = 0.1;

  formatos: any[] = [{ id: 0, valor: 'black' }, { id: 2, valor: 'orange' }, { id: 3, valor: 'azure' }];

  validaciones: any = {
    nombre: true,
    formato: true,
    precio: true,
    marca: true
  }

  constructor(private ref: DynamicDialogRef, private config: DynamicDialogConfig, private utilsService: UtilsService) { }

  ngOnInit(): void {

  }

  cancelar(): void {
    this.ref.close();
  }

  guardar(): void {
    if(this.utilsService.validationField(this.precio)){
      this.producto.precio = this.precio.toString().replace('.', ',');
    }
    
    
    if(this.validarCampos()){
      this.ref.close(this.producto);
    }
    
  }

  validarCampos():boolean {
    this.limpiarValidaciones();
    let aux: boolean = true;

    if(!this.utilsService.validationField(this.producto.nombre)){
      aux = false;
      this.validaciones.nombre = false;
    }

    if(!this.utilsService.validationField(this.producto.precio)){
      aux = false;
      this.validaciones.precio = false;
    }

    if(!this.utilsService.validationField(this.producto.formato)){
      aux = false;
      this.validaciones.formato = false;
    }

    if(!this.utilsService.validationField(this.producto.marca)){
      aux = false;
      this.validaciones.marca = false;
    }

    return aux;
  }

  limpiarValidaciones(): void {
    this.validaciones.nombre = true;
    this.validaciones.precio = true;
    this.validaciones.formato = true;
    this.validaciones.marca = true;
  }

}
