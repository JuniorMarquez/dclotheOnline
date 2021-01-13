import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserWService } from "../../services/user-w.service";
declare var $: any;
@Component({
  selector: 'app-prasitopbar',
  templateUrl: './prasitopbar.component.html',
  styleUrls: ['./prasitopbar.component.css']
})
export class PrasitopbarComponent implements OnInit {

  constructor(
      private _router: Router,
      public _uw:UserWService,
      private authService: AuthService,
      private dataApi: DataApiService,
      private location: Location
   ) {}
    loadAPI = null;
    url = "assets/assetsprasi/js/plugins.js";
    url2 = "assets/assetsprasi/js/main.js";

  ngOnInit() {
     if (this._uw.loaded==true){
        this.loadAPI = new Promise(resolve => {
          this.loadScript();
          this.loadScript2();
        });
      }
      this._uw.loaded=true;  
  }
   onLogout():void{
    this.authService.logoutUser();
    location.reload();
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
