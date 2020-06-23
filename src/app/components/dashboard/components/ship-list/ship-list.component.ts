import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'app/services/ships.service';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.scss']
})
export class ShipListComponent implements OnInit {
  ships: any;


  constructor(private _shipsService: ShipsService) { }

  ngOnInit(): void {
    this.getShipsList();
  }

  getShipsList() {
    this._shipsService.getShips().subscribe((data)=>{
      this.ships = data;
      console.log(this.ships)
    })
  }

}
