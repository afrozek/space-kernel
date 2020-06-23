import { Injectable } from '@angular/core';
import { ships } from '../mockData/ships.js';
import { statusMap } from '../mockData/status-map.js';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  ships: [];

  constructor() { 
    this.ships = [];
    this.mapShipStatuses();
  }

  mapShipStatuses() {
    this.ships = ships.map(ship => {
      ship.statusObject = statusMap[ship.statusCode];
      return ship;
   })
  }

  getShips() {
   return of(this.ships).pipe(delay(2000));
 }
}
