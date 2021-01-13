import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";

@Component({
  selector: 'app-prasifooter',
  templateUrl: './prasifooter.component.html',
  styleUrls: ['./prasifooter.component.css']
})
export class PrasifooterComponent implements OnInit {

  constructor(
    public _uw:UserWService,
  	) { }

  ngOnInit() {
  }

}
