import {Component} from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: 'fruta.component.html'
})

export class FrutaComponent{
  public nombre_componente = 'Componente de fruta';
  public listado_frutas = 'Naranja, Manzana, Pera y Sandia';
  public nombre:string;
  public edad:number;
  public mayorDeEdad:boolean;
  public trabajo:Array<string> = ['carpintero', 'martelo'];
  comodin:any;

  constructor(){
    this.comodin = "tugfa";
    this.mayorDeEdad = false;
  }
  ngOnInit(){
      this.cambiarEdad(22);
      this.cambiarNombre();
      console.log(this.nombre + " " + this.edad);


      //Variables y el alcance

  }
  cambiarNombre(){
      this.nombre = "Jherson Martelo";
  }
  cambiarEdad(edad){
    this.edad = edad;
  }

}
