import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';
import { Ciudad } from 'src/app/Modelo/Ciudad';
import { Tipodocumento } from 'src/app/Modelo/Tipodocumento';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  persona :Persona=new Persona();
  ciudades: Ciudad[];
  tipos: Tipodocumento[];
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();

    this.service.getCiudades()
      .subscribe(data => {
        this.ciudades = data;
      });

      this.service.getTipos()
      .subscribe(data =>{this.tipos = data});

  }

  Editar(){
    let id=localStorage.getItem("idpersona");
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      this.persona=data;
    })
  }

  Actualizar(persona:Persona){
    console.log(persona.tipo.nombre);
    console.log(persona.ciudad.nombre);

    this.service.updatePersona(persona)
    .subscribe(data=>{
      this.persona=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }



}
