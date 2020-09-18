import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';
import { Ciudad } from 'src/app/Modelo/Ciudad';
import { Tipodocumento } from 'src/app/Modelo/Tipodocumento';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})


export class EditComponent implements OnInit {
  persona :Persona=new Persona();
  ciudades: Ciudad[];
  tipos: Tipodocumento[];
  date: Date = new Date();
  ;


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
    this.service.updatePersona(persona)
    .subscribe(data=>{
      this.persona=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }




  onGuardarCurso(myForm: NgForm) {
    if (myForm.valid === true) 
    {        
    }
  }
}
