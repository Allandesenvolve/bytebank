import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

constructor(private service: TransferenciaService){

  }


  transferir($event) { //método que recebe evento
    this.service.adicionar($event); // para imprimir no console


  }
}
// recebe evento e propagada para o service
