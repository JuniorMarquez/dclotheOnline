import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user-interface';  
import { CardInterface } from '../../models/card-interface';  
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BookInterface } from '../../models/book-interface'; 
import { TixInterface } from '../../models/tix-interface'; 

@Component({
  selector: 'app-my-tixs',
  templateUrl: './my-tixs.component.html',
  styleUrls: ['./my-tixs.component.css']
})
export class MyTixsComponent implements OnInit {
  constructor(
    private router: Router, 
    private location: Location, 
    private authService: AuthService,
    public dataApi: DataApiService, 
    public _uw:UserWService
    ) { }
  loadAPI = null;
  url = "assets/assetsprasi/js/plugins.js";
  url2 = "assets/assetsprasi/js/main.js";
  public seted = false;
  public user : UserInterface ={
    name:"",
    email:"",
    password:""
  };
  cardArray: any[]=[];
  public cards:CardInterface;
  public cardsResult:any[]=[];
  public isLogged =false;
  public tixs:TixInterface;
  public books:BookInterface;
 getBookPending(){
         this.dataApi
         .getBookPending().subscribe((res:any) => {
      if (res[0] === undefined){
        return
        }else{
          this.books=res[0];
          let cantbooks=0;
         this._uw.totalBooks = res.length;
        }
      });
    }
  ngOnInit() {
     this.getBookPending();
     this.getAllTixs();
    if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            this.loadScript();
            this.loadScript2();
          });
        }
    this._uw.loaded=true;
    this._uw.usersPending=false;
	  this.user = this.authService.getCurrentUser();
    this._uw.name=this.user.name;
 	 	this.onCheckUser();    
    let val=(this.user.id).toString();
    this.dataApi.getCards(val).subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("no");
        this.router.navigate(['/new-member']);
        }else{
        console.log("si");
        this._uw.card= (res[0]);
        this._uw.bandera=(res[0].bander);
        if (res[0].type=="affiliateType"){
          this._uw.affiliate=true;
          this.router.navigate(['/booking']);
        }
        if (res[0].type=="partnerType"){
          this._uw.partner=true;
        }
        if (res[0].type=="adminType"){
          this._uw.admin=true;
          this.getUsersPending();
        }        
        this._uw.type=res[0].type;
        }
      });
  }

  getUsersPending(){
  this.dataApi.getPendingPartners().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("no");
       this._uw.usersPending=false;
       }else{
        this._uw.usersPending=true;
        this.cards=res;
        }
     });
   }
   getPending(){
        this.dataApi
        .getPendingPartners()
        .subscribe((cards: CardInterface) => (this.cards=cards));
    }

  getCards(card_id: string){
    this.dataApi.getCards(card_id);
    }
   getAllTixs(){
        this.dataApi
        .getAllTixsReturn()
        .subscribe((tixs: TixInterface) => (this.tixs=tixs));


        this.dataApi
        .getAllTixsReturn().subscribe((res:any) => {
      if (res[0] === undefined){
        
        }else{
          this.tixs=res[0];
          let cantTixs=0;
          this._uw.totalTixs = res.length;
        }
      });
    }

  onCheckUser(): void {
    if (this.authService.getCurrentUser() === null) {
      this.isLogged = false;
      this._uw.isLogged=false;
    } else {
      this.isLogged = true;
      this._uw.isLogged=true;
    }
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
