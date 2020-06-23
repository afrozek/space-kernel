import { Injectable } from '@angular/core';
import { ships } from '../mockData/ships.js';
import { statusMap } from '../mockData/status-map.js';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor() { }

  getShips() {

    const mappedWithStatusObject = ships.map(ship => {
       ship.statusObject = statusMap[ship.statusCode];
       return ship;
    })

    let fakeObservable = of(mappedWithStatusObject).pipe(delay(1000));
    return fakeObservable;

 }
}
