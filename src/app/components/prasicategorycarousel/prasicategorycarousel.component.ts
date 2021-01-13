import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";


@Component({
  selector: 'app-prasicategorycarousel',
  templateUrl: './prasicategorycarousel.component.html',
  styleUrls: ['./prasicategorycarousel.component.css']
})
export class PrasicategorycarouselComponent implements OnInit {

  constructor(
   public _uw:UserWService
  	) { }

  ngOnInit() {
  }

}
