import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: []
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() h:any={}
  @Input() index:number;//Recibido de padre

  //@Output() heroeSeleccionado: EventEmitter<number>;
  constructor(private router:Router) { 
    //this.heroeSeleccionado= new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(idx:number){ //Recibido de evento 
    //this.heroeSeleccionado.emit(this.index); index recibido como input
     this.router.navigate(['/heroe',idx]);
  }
}
