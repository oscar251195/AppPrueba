import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUsuario} from "../shared/types";
import {DatosService} from "../services/datos.service";
import {Keyboard} from "@capacitor/keyboard";

@Component({
  selector: 'app-detalle-chats',
  templateUrl: './detalle-chats.page.html',
  styleUrls: ['./detalle-chats.page.scss'],
})
export class DetalleChatsPage implements OnInit {
  @ViewChild('inputMsg') inputMsg;
  public usuario: IUsuario;

  inputmensaje: any;
  cambioIcono: boolean = false;
  mostrarDiv: boolean = false;
  mensajeEmisor: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datosService: DatosService
  ) {
  }

  ngOnInit() {
    //id es el mismo nombre del parámetro en el fichero app-routing.module.ts (parámetro :id)
    //Se almacena en usuario_id información (el id) de la ruta asociada
    const usuario_id = +this.activatedRoute.snapshot.params.id;
    //Se obtiene el usuario individual (con todos sus datos). En el html
    //se puede mostrar toda la información del usuario (de momento nombre).
    this.usuario = this.datosService.getUsuariosById(usuario_id);
    //Aautofocus input
    this.ionViewLoaded();

  }

  ionViewLoaded() {
    setTimeout(() => {
      this.inputMsg.setFocus();
    }, 150);
  }

  onChangeMensaje(event) {
    console.log(event);

    if (this.inputmensaje.length == 0) {
      this.cambioIcono = false;
      this.mostrarDiv = false;
    } else {
      if (event.key === "Enter") {
        console.log(event);
      }
      this.cambioIcono = true;
      this.mostrarDiv = true;

    }

    this.mensajeEmisor = this.inputmensaje;
    console.log(this.mensajeEmisor)
  }

}
