import { Component, OnInit } from '@angular/core';

import { HttpClient } from  '@angular/common/http';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { ActivatedRoute, Params} from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-prasislider',
  templateUrl: './prasislider.component.html',
  styleUrls: ['./prasislider.component.css']
})
export class PrasisliderComponent implements OnInit {
  constructor(
    public _uw:UserWService
  	) { }
 	loadAPI = null;
    url2 = "assets/assetsprasi/js/main.js";
    url = "assets/assetsprasi/js/plugins.js";
    public tix:TixInterface;

	ngOnInit() {
		 if (this._uw.loaded==true){
	    this.loadAPI = new Promise(resolve => {
	      // console.log("resolving promise...");
	      this.loadScript();
	       this.loadScript2();
	    });
	  }
	    this._uw.loaded=true;
	}
	public loadScript() {
	  // console.log("preparing to load...");
	  let node = document.createElement("script");
	  node.src = this.url;
	  node.type = "text/javascript";
	  node.async = true;
	  node.charset = "utf-8";
	  document.getElementsByTagName("head")[0].appendChild(node);
	}
	public loadScript2() {
	  // console.log("preparing to load 2...");
	  let node = document.createElement("script");
	  node.src = this.url2;
	  node.type = "text/javascript";
	  node.async = true;
	  node.charset = "utf-8";
	  document.getElementsByTagName("head")[0].appendChild(node);
	}
}
