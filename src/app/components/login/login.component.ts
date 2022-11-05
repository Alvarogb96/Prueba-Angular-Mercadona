import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Constantes } from 'src/app/constants/constants';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() mostrarUsuarioEvent = new EventEmitter<boolean>();
  @Output() usuarioEvent = new EventEmitter<string>();

  constantes = Constantes;

  usuario!: string;
  password!: string;

  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
  }

  aceptar(): void {
    if(this.utilsService.validationField(this.usuario)){
      this.usuarioEvent.emit(this.usuario);
      this.mostrarUsuarioEvent.emit(true);
    }
  }

}
