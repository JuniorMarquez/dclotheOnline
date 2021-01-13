import { ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataApiService} from '../../services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TixInterface } from '../../models/tix-interface'; 
import { UserWService } from "../../services/user-w.service";

@Component({
  selector: 'app-prasiproductcatalog',
  templateUrl: './prasiproductcatalog.component.html',
  styleUrls: ['./prasiproductcatalog.component.css']
})
export class PrasiproductcatalogComponent implements OnInit {

  constructor(
    private dataApi: DataApiService,
    private location: Location,
    private route:ActivatedRoute,
    private router: Router, 
    public _uw:UserWService
  	) { }
   loadAPI = null;
    url = "assets/assetsprasi/js/plugins.js";
    url2 = "assets/assetsprasi/js/main.js";
  
public tixs:TixInterface;
public seted=false;
  ngOnInit() {
  	  this.getAllTixsNew();
      if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            this.loadScript();
            this.loadScript2();
          });
        }
      this._uw.loaded=true;
      this._uw.editingTrek = false;
  }
edit(tix){
  this._uw.editingTrek = true;
  this._uw.foredit=tix;
  this._uw.images=tix.images;
  this.router.navigate(['/prasiproductdetail/'+tix.id]);
}
getAllTixsNew(){
        this.dataApi.getAllTixsNew().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("no");
       }else{
        this.tixs=res;            
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
