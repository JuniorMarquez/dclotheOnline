import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";


@Component({
  selector: 'app-prasiinstagramfeed',
  templateUrl: './prasiinstagramfeed.component.html',
  styleUrls: ['./prasiinstagramfeed.component.css']
})
export class PrasiinstagramfeedComponent implements OnInit {

  constructor(
   public _uw:UserWService
  	) { }

  ngOnInit() {
  }

}
