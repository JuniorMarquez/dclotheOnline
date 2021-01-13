import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
@Component({
  selector: 'app-prasitopfooter',
  templateUrl: './prasitopfooter.component.html',
  styleUrls: ['./prasitopfooter.component.css']
})
export class PrasitopfooterComponent implements OnInit {

  constructor(
   public _uw:UserWService
   ) { }

  ngOnInit() {
  }

}
