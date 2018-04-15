import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({
  selector: 'empleado',
  templateUrl: 'empleado.component.html'
})

export class EmpleadoComponent{
  public titulo = 'Componente empleados';
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_ext:boolean;
  public color:string;

  constructor(){
    this.empleado = new Empleado('Jherson Martelo', 20, 'Ingeniero',true);
    this.trabajadores = [
      new Empleado('Oscar manuel', 21, 'Carretero', true),
      new Empleado('Alvaro miguel', 35, 'Carretero', true),
      new Empleado('Johana gil', 43, 'Carretero', false)
    ];
    this.trabajador_ext = false;
    this.color='green';

  }
  ngOnInit(){
    console.log(this.empleado);
  }
  cambiarExterno(valor){
    this.trabajador_ext = valor;
  }
}
