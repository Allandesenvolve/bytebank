import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  destino: number;
  valor: number;
  transferencia: any;


  transferir($event) { //método que recebe evento
    console.log($event); // para imprimir no console
    this.transferencia = $event;

  }
}
