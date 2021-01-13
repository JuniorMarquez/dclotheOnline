import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-prasiabout',
  templateUrl: './prasiabout.component.html',
  styleUrls: ['./prasiabout.component.css']
})
export class PrasiaboutComponent implements OnInit {
  constructor(
  private _router: Router,
  public _uw:UserWService
    ) { }
  loadAPI = null;
  url2 = "assets/assetsprasi/js/main.js";
  url = "assets/assetsprasi/js/plugins.js";

  ngOnInit() {
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
