import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NavController} from "@ionic/angular";
import {IUsuario} from "../shared/types";
import {DatosService} from "../services/datos.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public usuarios: Array<IUsuario>

  constructor(
    private router: Router,
    public navControl: NavController,
    private datosService: DatosService
  ) {}

  ngOnInit(): void {
    //Carga de usuarios al iniciar la app
    this.usuarios = this.datosService.getUsuarios();
  }

  detalleUsuario(usuario_id): void {
    //Envía a la página de detalle-chats el id del usuario que se ha pinchado
    this.navControl.navigateForward(['detalle-chats', usuario_id]);
  }

}
