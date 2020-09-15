import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { Ciudad } from 'src/app/Modelo/Ciudad';
import { Tipodocumento } from 'src/app/Modelo/Tipodocumento';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  persona:Persona=new Persona();
  ciudades: Ciudad[];
  tipos: Tipodocumento[];

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(){
    this.service.getCiudades()
      .subscribe(data => {
        this.ciudades = data;
      });

      this.service.getTipos()
      .subscribe(data =>{this.tipos = data});
  }

  Guardar(){
   
    this.service.createPersona(this.persona)
    .subscribe(data =>{
      alert("Se agregó con Exito...!!!");
      this.router.navigate(["listar"]);
    })
    
  }

}
