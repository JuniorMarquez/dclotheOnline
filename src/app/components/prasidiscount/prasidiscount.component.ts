import { AddInterface } from '../../models/add-interface'; 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { HttpClient } from  '@angular/common/http';
import { isError } from "util";
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { TixInterface } from '../../models/tix-interface'; 
import { UserWService } from "../../services/user-w.service";
import { ValidationError } from '../../../assets/file-picker/src/lib/validation-error.model';

@Component({
  selector: 'app-prasidiscount',
  templateUrl: './prasidiscount.component.html',
  styleUrls: ['./prasidiscount.component.css']
})
export class PrasidiscountComponent implements OnInit {

  constructor(
  	public scrollTopService:ScrollTopService,
    private router: Router, 
    private dataApi: DataApiService,
    private route:ActivatedRoute,
    private location: Location,
    public _uw:UserWService,
    private formBuilder: FormBuilder
    ) { }
    loadAPI = null;
    url2 = "assets/assetsprasi/js/main.js";
    url = "assets/assetsprasi/js/plugins.js";
    
    ngSetDiscount: FormGroup;
    submitted = false;
      tallasBotas: string[]=[
  '18 (12 cm)',
  '19 (12,50 cm)',
  '20 (13 cm)',
  '21 (14 cm)',
  '22 (14,50 cm)',
  '23 (15 cm)',
  '24 (15,80 cm)',
  '25 (16,30 cm)'
  ];

 tallasMoccs: string[]=[
  '16 (0-3 meses)',
  '17 (3-6 meses)',
  '18 (6-12 meses)',
  '19 - 20 (12-18 meses)',
  '21 - 22 (18-24 meses)'
  ];

  tallasZapatos: string[]=[
  '18 (6 meses)',
  '19 (9 meses)',
  '20 (1 año)',
  '21 (1 año 6 meses)',
  '22 (2 años)',
  '23 (2 años 6 meses)',
  '24 (3 años)',
  '25 (4 años)'
  ];

    public tix:TixInterface;
    public addp:AddInterface;
    public seted = false;
    public checked = true;
    public plants = "Sin planta antideslizante";
    public priceCon = 0;
    public priceSin = 0;
    public indiceTalla = 0;
    public finalPrice = 0;

    public precio = "sin";
    public precio2 = "con";
    public check = "check";
    public urlCreated = "";
    public images:any[]=[];
    public checks:any[]=[];
    public sin:any[]=[];
    public con:any[]=[];
    public tallas:any[]=[];

  ngOnInit() {
      this.ngSetDiscount = this.formBuilder.group({
        discount: [this._uw.foredit.discount,[Validators.required]]
      });
  	  if (this._uw.editingTrek){
        this.tix=this._uw.foredit;
      }  
      this.scrollTopService.setScrollTop();
      if (this._uw.loaded==true){
        this.loadAPI = new Promise(resolve => {
          this.loadScript();
          this.loadScript2();
        });
      }
      this._uw.loaded=true;     
      this.getDetails(this.tix.id);
      if (this._uw.editingTrek){
      }
        this.iniciadorLleno(this.tallasBotas.length,this.tix);
  }
   iniciadorLleno(size,tix){
        for (var i = 0; i < size; i++) {
          this.checks[i]=tix.check[i];
          if (this._uw.moccs)
          {
          this.con[i]=tix.con[i];
          this.sin[i]=tix.sin[i];
          }
        }
     }
  setDiscount(){
    this.tix.discount=this.ngSetDiscount.value.discount;
     let id =this.tix.id;
      return this.dataApi.updateTix(this.tix, id)
        .subscribe(
            tix => this.router.navigate(['/prasiproductcatalog'])
        );
  }
    public loadScript() {
      let node = document.createElement("script");
      node.src = this.url;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
    setDeleted(){
    this.tix=this.tix=this._uw.foredit;
    let id =this.tix.id;
    this.tix.status="deleted";
    return this.dataApi.updateTix(this.tix, id)
        .subscribe(
            tix => this.router.navigate(['/prasiproductcatalog'])
        );

  }



    public loadScript2() {
      let node = document.createElement("script");
      node.src = this.url2;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
	getDetails(id: string){
		this.dataApi.getTixById(id).subscribe(tix => (this.tix = tix));
	}
    get fval() {
  return this.ngSetDiscount;
  }

}
