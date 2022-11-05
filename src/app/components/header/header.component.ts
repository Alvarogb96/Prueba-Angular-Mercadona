import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/app/constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constantes = Constantes;

  constructor() { }

  ngOnInit(): void {
  }

}
