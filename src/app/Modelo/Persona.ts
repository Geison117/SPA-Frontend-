import { Tipodocumento } from "./Tipodocumento"
import { Ciudad } from "./Ciudad"


export  class Persona{
    idpersona: number;
    apellidos: String;
    documento: String;
    email:String;
    fechanacimiento: String;
    nombres: String;
    contrasena: String;
    telefono: String;
    usuario: String;
    tipo: Tipodocumento;
    ciudad: Ciudad;

}