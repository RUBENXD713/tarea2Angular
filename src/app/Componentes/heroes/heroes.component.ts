import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Modelos/hero';
import { HEROES } from '../../Modelos/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id:1,
    name: 'Spiderman'
  };
  heroes=HEROES;
  value="mostrar";
  valueB="Ocultar";

  constructor() {}

  selectedHero: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
  eventoButton():void{
    if (this.value=="mostrar"){
      this.value="ocultar";
      this.valueB="Mostrar";
    }else{
      this.value="mostrar"
      this.valueB="Ocultar";
    }
}

  ngOnInit(): void {
  }

}
