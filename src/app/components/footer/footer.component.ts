import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { HttpClient } from  '@angular/common/http';

import { DataApiService } from '../../services/data-api.service';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { ActivatedRoute, Params} from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
    




@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
  	public scrollTopService:ScrollTopService,
    public router: Router, 
    private dataApi: DataApiService,
    public route:ActivatedRoute,
    private location: Location,
    public _uw:UserWService
  	) { }

  ngOnInit() {
  }

}
