import { ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { HttpClient } from  '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserWService } from "../../services/user-w.service";

@Component({
  selector: 'app-prasicartoverlay',
  templateUrl: './prasicartoverlay.component.html',
  styleUrls: ['./prasicartoverlay.component.css']
})
export class PrasicartoverlayComponent implements OnInit {

  constructor(
  	private router: Router, 
    private dataApi: DataApiService,
    private route:ActivatedRoute,
    private location: Location,
    public _uw:UserWService
  	) { }

remove(i){
  console.log("indice a remover: "+i);
  this._uw.subTotal=this._uw.subTotal-(this._uw.car[i].cantidad*this._uw.car[i].finalPrice);
  this._uw.car.splice(i, 1);
  this._uw.numProd=this._uw.numProd-1;
}
  ngOnInit() {

  }
}
