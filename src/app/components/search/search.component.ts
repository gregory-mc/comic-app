import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit {
  term="";
  heroes:Heroe[]=[];
  constructor(private _heroesService:HeroesService, private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      this.heroes=this._heroesService.bHeroe(params['query']);
    });
    
  }

}
