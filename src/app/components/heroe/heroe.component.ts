import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

  heroe:any={};
  constructor(private actRoute:ActivatedRoute,
              private _heroesService: HeroesService) { 
    this.actRoute.params.subscribe(params => {
      this.heroe=this._heroesService.getHeroe(params['id']);
      console.log(params['id']);
    });

  }



}
