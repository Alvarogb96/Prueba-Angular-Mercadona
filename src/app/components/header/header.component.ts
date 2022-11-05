import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Constantes } from 'src/app/constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  @Input() usuario!: string;
  @Input() mostrarUsuario!: boolean;

  @Output() loginEvent = new EventEmitter<boolean>();

  constantes = Constantes;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['mostrarUsuario']){
      console.log(this.usuario);
    }
  }

  iniciarSesion(): void {
    this.loginEvent.emit(true);
  }

  logout(): void {
    this.loginEvent.emit(false);
  }

}
