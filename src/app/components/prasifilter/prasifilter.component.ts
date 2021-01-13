import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { AddInterface } from '../../models/add-interface'; 
import { ActivatedRoute, Params} from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ValidationError } from '../../../assets/file-picker/src/lib/validation-error.model';

@Component({
  selector: 'app-prasifilter',
  templateUrl: './prasifilter.component.html',
  styleUrls: ['./prasifilter.component.css']
})
export class PrasifilterComponent implements OnInit {

  constructor(
    private router: Router, 
    private dataApi: DataApiService,
    private route:ActivatedRoute,
    private location: Location,
    public _uw:UserWService,
    private formBuilder: FormBuilder
  	) { }
    public seted = false;
    public tixs:TixInterface;
    loadAPI = null;
    url = "assets/assetsprasi/js/plugins.js";
    url2 = "assets/assetsprasi/js/main.js";

    edit(tix){
      this._uw.editingTrek = true;
      this._uw.foredit=tix;
      this._uw.images=tix.images;
      this.router.navigate(['/prasiproductdetail/'+tix.id]);
    }

    ngOnInit() {
      this._uw.editingTrek = false;
    	if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            this.loadScript();
            this.loadScript2();
          });
        }
        this._uw.loaded=true;
        this.getAllTixs();
    }
    getTixsFilter(catego: string){
      let categ = catego; 
      this.dataApi.getTixsFilter(categ).subscribe((res:any) => {
    	  if (res[0] === undefined){
          }
        else{
          this.tixs=res;            
        }
      }); 
    }

    filterDiscount(){
      this._uw.totalDiscount=0;
      this._uw.tixsDiscount=[];
      let ind = this._uw.tixsOrigin.length;
      let res =  this._uw.tixsOrigin;
        for (var i = 0; i < ind; i++) {
          if (res[i].discount){
            this._uw.tixsDiscount.push(res[i]);
            this._uw.totalDiscount=this._uw.totalDiscount+1;
            this.tixs=this._uw.tixsDiscount;
          }
        }     
    }
     filterNew(){
      let ind = this._uw.tixsOrigin.length;
      let res =  this._uw.tixsOrigin;
      this._uw.totalNew=0;
      this._uw.tixsNew=[];
        for (var i = 0; i < ind; i++) {
          if (res[i].new){
            this._uw.tixsNew.push(res[i]);
            this._uw.totalNew=this._uw.totalNew+1;
            this.tixs=this._uw.tixsNew;
          }
        }     
    }
    filterDiscountIni(ind,res){
      this._uw.totalDiscount=0;
        for (var i = 0; i < ind; i++) {
          if (res[i].discount){
            this._uw.totalDiscount=this._uw.totalDiscount+1;
          }
        }     
    }
    filterNewIni(ind,res){
      this._uw.totalNew=0;
        for (var i = 0; i < ind; i++) {
          if (res[i].new){
            this._uw.totalNew=this._uw.totalNew+1;
          }
        }     
    }
    getAllTixs(){
        this.dataApi.getAllTixs().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("no");
       }else{
        this.tixs=res;
        this._uw.tixsOrigin=res;  
         let ind =res.length;
         this.filterDiscountIni(ind,res);       
         this.filterNewIni(ind,res);     
        }
     });  
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
