import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { ActivatedRoute, Params} from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-prasishopcart',
  templateUrl: './prasishopcart.component.html',
  styleUrls: ['./prasishopcart.component.css']
})
export class PrasishopcartComponent implements OnInit {

  constructor(
    public scrollTopService:ScrollTopService,
    private router: Router, 
    private dataApi: DataApiService,
    private route:ActivatedRoute,
    private location: Location,
    public _uw:UserWService
  	) { }
      loadAPI = null;
    url2 = "assets/assetsprasi/js/main.js";
    url = "assets/assetsprasi/js/plugins.js";

   public envio = 0;
   public destino ='Seleccione un destino';

 localidades: string[]=[
  'Arica, Iquique',
  'Antofagasta',
  'Calama',
  'Copiapo',
  'La Serena, Coquimbo',
  'Valparaiso, Viña del mar',
  'Santiago',
  'Rancagua; San Fernando',
  'Curico, Talca, Chillan, Concepción, Los Angeles',
  'Temuco, Valdivia, Osorno',
  'Puerto Montt, Pto. Varas, Castro',
  'Coyhaique',
  'Punta Arenas'
  ];
	costosEnvio: number[]=[
	8140,
	7210,
	8330,
	4510,
	4400,
	4110,
	2830,
	4270,
	4360,
	4450,
	4930,
	8050,
	8320  
	];

setEnvio(){
	for (var i = 0; i < this.costosEnvio.length; i++) {
		if (this.destino==this.localidades[i]){
			this.envio=this.costosEnvio[i];
			this._uw.total=this._uw.subTotal+this.costosEnvio[i];
		}
	}
}
remove(i){
  console.log("indice a remover: "+i);
  this._uw.subTotal=this._uw.subTotal-(this._uw.car[i].cantidad*this._uw.car[i].finalPrice);
  this._uw.car.splice(i, 1);
  this._uw.numProd=this._uw.numProd-1;
}
  ngOnInit() {

        this.scrollTopService.setScrollTop();
          if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            this.loadScript();
            this.loadScript2();
          });
        }
        this._uw.loaded=true;
  }
      public loadScript() {
      let node = document.createElement("script");
      node.src = this.url;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }

    public loadScript2() {
      let node = document.createElement("script");
      node.src = this.url2;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }

}
