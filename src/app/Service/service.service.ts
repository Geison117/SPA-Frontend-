import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Persona} from '../Modelo/Persona';
import {Ciudad} from '../Modelo/Ciudad';
import { Tipodocumento } from '../Modelo/Tipodocumento';

@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8181/ejemplo01/personas';
  UrlC = 'http://localhost:8181/ejemplo01/personas/ciudades';
  UrlT = 'http://localhost:8181/ejemplo01/personas/tipos';

  getPersonas()
  {
    return this.http.get<Persona[]>(this.Url);
  }

  getCiudades()
  {
    return this.http.get<Ciudad[]>(this.UrlC);
  }

  getTipos()
  {
    return this.http.get<Tipodocumento[]>(this.UrlT);
  }
  

  createPersona(persona: Persona){
    console.log(persona)
    return  this.http.post<Persona>(this.Url,persona);    
  }

  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+"/"+id);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/"+persona.idpersona,persona);
  }
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+"/"+persona.idpersona);
  }


}