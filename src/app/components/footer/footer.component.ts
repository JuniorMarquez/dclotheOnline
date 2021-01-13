import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    public _uw:UserWService,
  	) { }

  ngOnInit() {
  }

}
