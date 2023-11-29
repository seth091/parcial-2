import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../restaurante';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-restaurante-list',
  templateUrl: './restaurante-list.component.html',
  styleUrls: ['./restaurante-list.component.css']
})
export class RestauranteListComponent implements OnInit {

  restaurantes: Array<Restaurante> = [];
  selectedRestaurante! : Restaurante;
  selected: Boolean = false;
  constructor(private restauranteService : RestauranteService) { }

  getRestaurantes(): void {
    this.restauranteService.getRestaurantes().subscribe((restaurantes) => {
      this.restaurantes = restaurantes;
    });
  }

  getMayorPuntuacion(): number {
    let mayorPuntuacion = 0;
    this.restaurantes.forEach((restaurante) => {
      if (restaurante.rating > mayorPuntuacion) {
        mayorPuntuacion = restaurante.rating;
      }
    });
    return mayorPuntuacion;
  }

  getNombreDelRestauranteConMayorPuntuacion(): string {
    let mayorPuntuacion = this.getMayorPuntuacion();
    let restauranteConMayorPuntuacion = this.restaurantes.find(restaurante => restaurante.rating === mayorPuntuacion);
    return restauranteConMayorPuntuacion ? restauranteConMayorPuntuacion.name : '';
  }

  onSelected(restaurante: Restaurante): void {
    this.selected = true;
    this.selectedRestaurante = restaurante;
  }


  ngOnInit() {
    this.getRestaurantes();
  }

}
