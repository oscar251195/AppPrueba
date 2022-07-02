import {Component, OnInit} from '@angular/core';
import {IUsuario} from "../shared/types";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  usuario: IUsuario[];

  usuarios =[
      {id: 1, nombre: 'Suso ', texto: 'Hola, soy Suso!'},
      {id: 2, nombre: 'JR ', texto: 'Hola, soy JR Pavía!'},
      {id: 3, nombre: 'Óscar ', texto:'Hola, soy Óscar'},
    ];

  constructor() {}

  ngOnInit(): void {


  }


}
