import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Constantes } from 'src/app/constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() usuario!: string;
  @Input() mostrarUsuario!: boolean;

  @Output() loginEvent = new EventEmitter<boolean>();

  constantes = Constantes;

  constructor() { }

  ngOnInit(): void {
  }


  iniciarSesion(): void {
    this.loginEvent.emit(true);
  }

  logout(): void {
    this.loginEvent.emit(false);
  }

}
