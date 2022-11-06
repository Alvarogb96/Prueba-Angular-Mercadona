import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Tornillo, TORNILLO_BLANK } from 'src/app/interfaces/tornillo';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { Constantes } from 'src/app/constants/constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent implements OnInit {

  constantes = Constantes;

  producto: Tornillo = TORNILLO_BLANK();

  precio: number = 0.1;

  form: FormGroup = new FormGroup({})

  formatos: any[] = [{ id: 0, valor: 'black' }, { id: 2, valor: 'orange' }, { id: 3, valor: 'azure' }];

  validaciones: any = {
    nombre: true,
    formato: true,
    precio: true,
    marca: true
  }

  constructor(private ref: DynamicDialogRef, private config: DynamicDialogConfig, private utilsService: UtilsService,  private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      precio: [null, [Validators.required]],
      formato: ['', [Validators.required]],
      marca: ['', [Validators.required]],
    })
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
