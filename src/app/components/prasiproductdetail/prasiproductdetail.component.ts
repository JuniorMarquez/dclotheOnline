import { AddInterface } from '../../models/add-interface'; 
import { ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
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
  selector: 'app-prasiproductdetail',
  templateUrl: './prasiproductdetail.component.html',
  styleUrls: ['./prasiproductdetail.component.css']
})
export class PrasiproductdetailComponent implements OnInit {
  ngFormAddtixs: FormGroup;
  ngFormSendBook: FormGroup;

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
    
    ngFormAddToCar: FormGroup;
    submitted = false;

    public tix:TixInterface;
    public addp:AddInterface;
    public seted = false;
    public checked = true;
    public plants = "Sin planta antideslizante";
    public priceCon = 0;
    public priceSin = 0;
    public indiceTalla = 0;
    public finalPrice = 0;
    
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
    public precio = "sin";
    public precio2 = "con";
    public check = "check";
    public urlCreated = "";
    public images:any[]=[];
    public checks:any[]=[];
    public sin:any[]=[];
    public con:any[]=[];
    public tallas:any[]=[];
 
    setCategory(){
       if(this.ngFormAddtixs.value.category=='Botas y botines'){
        this._uw.botas=true;
        this._uw.moccs=false;
        this._uw.zapatos=false;
        this._uw.typeGlobal=true; 
        this.tallas=this.tallasBotas;
        this.iniciadorVacio(this.tallasBotas.length);
      }  
      if(this.ngFormAddtixs.value.category=='Moccs'){
        this._uw.botas=false;
        this._uw.moccs=true;
        this._uw.zapatos=false; 
        this._uw.typeSize=true;
        this.tallas=this.tallasMoccs;
        this.iniciadorVacio(this.tallasMoccs.length);
        }
      if(this.ngFormAddtixs.value.category=='Zapatos'){
        this._uw.botas=false;
        this._uw.zapatos=true;
        this._uw.moccs=false;
        this._uw.typeGlobal=true; 
        this.tallas=this.tallasZapatos;
        this.iniciadorVacio(this.tallasZapatos.length);      
      }
    } 

    ngOnInit() {
      if (this._uw.editingTrek){
        this.tix=this._uw.foredit;
      }  
      this.scrollTopService.setScrollTop();
      this.ngFormAddToCar = this.formBuilder.group({
        cantidad:[1,[Validators.required]]
      });
      this.ngFormAddtixs = this.formBuilder.group({
        productName: ['', [Validators.required]],
        description: ['', [Validators.required]],
        category: ['', [Validators.required]],
        color:['', [Validators.required]],
        new:[false, [Validators.required]],
        codigo:['', [Validators.required]],
        modelo:['', [Validators.required]],
        globalPrice: [0,[Validators.required]]
      });
      this.ngFormAddToCar.value.cantidad=1;
      if (this._uw.loaded==true){
        this.loadAPI = new Promise(resolve => {
          this.loadScript();
          this.loadScript2();
        });
      }
      this._uw.loaded=true;     
      this.getDetails(this.route.snapshot.paramMap.get('id'));
      if (this._uw.editingTrek){
        this.checkCategory(this._uw.foredit);
      }
      
    } 
 
    public add(tix){
      if ( !this.seted && tix.category=='Moccs' ){
        tix.price=tix.sin[0];
        this.seted=true;
      }

      if (tix.discount){
        this.finalPrice=tix.price - (tix.price*tix.discount/100);  
      }
      if (!tix.discount){
        this.finalPrice=tix.price;  
      }
      console.log("hola, entiendo que debo agregar "+this.ngFormAddToCar.value.cantidad +" pares del modelo: " +tix.productName+" para un total de: " +(this.ngFormAddToCar.value.cantidad*this.finalPrice));
  
        this.addp=tix;
        this.addp.cantidad=this.ngFormAddToCar.value.cantidad;
        this.addp.finalPrice=this.finalPrice;
        this._uw.car.push(this.addp);
        this._uw.subTotal=this._uw.subTotal+(this.ngFormAddToCar.value.cantidad*this.finalPrice);
        this._uw.numProd=this._uw.numProd+1;
        this.router.navigate(['/']);
    }

    public setPlants(tix){
      if (this.plants=="Con planta antideslizante"){
        this.tix.price=tix.con[this.indiceTalla];
        this.tix.price=this.priceCon;
        }
      if (this.plants=="Sin planta antideslizante"){
        this.tix.price=tix.sin[this.indiceTalla];
        this.tix.price=this.priceSin; 
        }
      this.setSize(tix,this.indiceTalla);
    }
    finish(id: string){
    if (this._uw.errorFormAddtixs){
      this.sendTix(id);
    }
    
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

    sendTix(id: string){
      this.submitted = true;
      if (this.ngFormAddtixs.invalid) {
        this._uw.errorFormAddtixs=true;
        return;
        } 
      this._uw.errorFormAddtixs=false;
      this.tix = this.ngFormAddtixs.value;
      this.tix.status="activated";
      if (this._uw.moccs){
        this.tix.globalPrice=0;
        this.tix.con=this.con;
        this.tix.sin=this.sin;
      }
      if (this._uw.botas || this._uw.zapatos){
        this.tix.price=this.tix.globalPrice;
      }
      if(this.tix.new){
        this.tix.colection="new";
      }
      if (this.tix.category=="Botas y botines"){
        this.tix.categoryFilter="Botas";
      }
      else{
        this.tix.categoryFilter=this.tix.category;
      }
      this.tix.check=this.checks;
      this.tix.tallas=this.tallas;
      this.tix.images=this._uw.images;
      return this.dataApi.updateTix(this.tix, id)
        .subscribe(
            tix => this.router.navigate(['/prasiproductcatalog'])
        );
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
      iniciadorVacio(size){
        for (var i = 0; i < size; i++) {
          this.checks[i]=true;
          if (this._uw.moccs)
          {
          this.con[i]=0;
          this.sin[i]=0;
          }
        }
     }

    checkCategory(tix){
      if(tix.category=='Botas y botines'){
        this._uw.botas=true;
        this._uw.moccs=false;
        this._uw.zapatos=false;
        this._uw.typeGlobal=true; 
        this.tallas=this.tallasBotas;
        this.iniciadorLleno(this.tallasBotas.length,tix);
      }
      if(tix.category=='Moccs'){
        this._uw.botas=false;
        this._uw.moccs=true;
        this._uw.zapatos=false;
        this._uw.typeGlobal=false; 
        this.tallas=this.tallasBotas;
        this.iniciadorLleno(this.tallasBotas.length,tix);
        this.tix.globalPrice=0;
        this.tix.con=this.con;
        this.tix.sin=this.sin;
      }
      if(tix.category=='Zapatos'){
        this._uw.botas=false;
        this._uw.moccs=false;
        this._uw.zapatos=true;
        this._uw.typeGlobal=true; 
        this.tallas=this.tallasBotas;
        this.iniciadorLleno(this.tallasBotas.length,tix);
      }
    } 

    public setSize(tix,i){
      if (tix.category=="Moccs" ){  
        if (this.plants=="Con planta antideslizante"){
          this.tix.price=tix.con[i];
          this.priceCon=tix.con[i];
          this.indiceTalla=i;
        }
        if (this.plants=="Sin planta antideslizante"){
          this.tix.price=tix.sin[i]; 
          this.priceSin=tix.sin[i];        
          this.indiceTalla=i;
        }
        this.seted=true;
      }
      if (tix.category=="Botas y botines" || tix.category=="Zapatos" ){  
        this.tix.price=tix.globalPrice;
        this.indiceTalla=i;
      }
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
     get fval() {
  return this.ngFormAddToCar;
  }
  get fval2() {
  return this.ngFormAddtixs.controls;
  }

    getDetails(id: string){
    this.dataApi.getTixById(id).subscribe(tix => (this.tix = tix));

   
  }
}
