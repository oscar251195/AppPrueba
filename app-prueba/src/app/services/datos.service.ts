import { Injectable } from "@angular/core";
import {IUsuario} from "../shared/types";

@Injectable({ providedIn: "root" })
export class DatosService {
  private usuarios = [
    {
      id: 1,
      nombre: 'Suso',
      mensaje: 'Hola, soy Suso!',
      icono: 'http://placekitten.com/200/300',
    },
    {
      id: 2,
      nombre: 'Jose Ramón',
      mensaje: 'Hola, soy JR!',
      icono: 'http://placekitten.com/200/301',
    },
    {
      id: 3,
      nombre: 'Óscar',
      mensaje: 'Hola, soy Óscar!',
      icono: 'http://placekitten.com/200/302',
    }
  ];

  public getUsuarios(): Array<IUsuario> {
    return this.usuarios;
  }

  public getUsuariosById(usuario_id: number): IUsuario{
    return this.usuarios.find(usuario => usuario.id === usuario_id);
  }
}
