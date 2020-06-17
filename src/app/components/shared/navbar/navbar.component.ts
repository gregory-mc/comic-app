import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  termino:string = "";
  constructor(private _heroesService:HeroesService) { }

  ngOnInit(): void {
  }

  bHeroe(termino:string){
    this.termino=termino;
    console.log(this.termino);
  }

}
