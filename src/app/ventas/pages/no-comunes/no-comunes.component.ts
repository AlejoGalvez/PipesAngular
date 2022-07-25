import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [`
  button {
    margin-right: 20 px;
  }
  `
  ]
})
export class NoComunesComponent  {

  //i18nSelect
  nombre: string = 'Alejo';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Hernan', 'Eduardo', 'Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

    cambiarCliente(){
      (this.nombre === 'Alejo')
        ?this.nombre = 'Maria'
        :this.nombre = 'Alejo'
    }

    borrarCliente(){
      this.clientes.pop();
    }
    
    resetCliente(){
      this.clientes = ['Maria', 'Pedro', 'Hernan', 'Eduardo', 'Fernando'];
    }


    //KeyValue Pipe
    persona = {
      nombre: 'Alejo',
      edad: 25,
      direccion: 'Buenos aires, Argentina'
    }

    //Json Pipe
    heroes = [
      {
        nombre: 'Superman',
        vuela: true
      },
      {
        nombre: 'Robin',
        vuela: false
      },
      {
        nombre: 'Aquaman',
        vuela: false
      }
    ];

    //Async Pipe
    miObservable = interval(2000); //0,1,2,3,4,5,6,

    valorPromesa = new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve('Tenemos data de promesa');
      }, 3500);
    } )
}
