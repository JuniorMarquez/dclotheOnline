import { AuthService } from '../../services/auth.service';
import { CardInterface } from '../../models/card-interface'; 
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { delay, map } from 'rxjs/operators';
import { DemoFilePickerAdapter } from  '../../file-picker.adapter';
import { FilePickerComponent } from '../../../assets/file-picker/src/lib/file-picker.component';
import { FilePreviewModel } from '../../../assets/file-picker/src/lib/file-preview.model';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { HttpClient } from  '@angular/common/http';
import { isError } from "util";
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { TixInterface } from '../../models/tix-interface';  
import { UserInterface } from '../../models/user-interface'; 
import { UserWService } from '../../services/user-w.service';
import { ValidationError } from '../../../assets/file-picker/src/lib/validation-error.model';


@Component({
  selector: 'app-addtixs',
  templateUrl: './addtixs.component.html',
  styleUrls: ['./addtixs.component.css']
})
export class AddtixsComponent implements OnInit {
 favoriteSeason: string;
  seasons: string[] = ['Un precio para todos', 'Precio por talla'];

  tallasBotas: string[]=[
  '18 (12 cm)',
  '19 (12,50 cm)',
  '20 (13 cm)',
  '21 (14 cm)',
  '22 (14,50 cm)',
  '23 (15 cm)',
  '24 (15,80 cm)',
  '25 (16,30 cm)'
  ];

 tallasMoccs: string[]=[
  '16 (0-3 meses)',
  '17 (3-6 meses)',
  '18 (6-12 meses)',
  '19 - 20 (12-18 meses)',
  '21 - 22 (18-24 meses)'
  ];

  tallasZapatos: string[]=[
  '18 (6 meses)',
  '19 (9 meses)',
  '20 (1 año)',
  '21 (1 año 6 meses)',
  '22 (2 años)',
  '23 (2 años 6 meses)',
  '24 (3 años)',
  '25 (4 años)'
  ];




    adapter = new DemoFilePickerAdapter(this.http,this._uw);
  @ViewChild('uploader', { static: true }) uploader: FilePickerComponent;
   myFiles: FilePreviewModel[] = [];

ngFormAddtixs: FormGroup;
  submitted = false;

  constructor(
  private  http: HttpClient,
  public _uw:UserWService, 
  private dataApiService: DataApiService,
  private authService: AuthService, 
  private location: Location,
  private router: Router,
  private formBuilder: FormBuilder
  	) { }

public user : UserInterface ={
    name:"",
    email:"",
    password:""
  };

public card : CardInterface ={
      userd:"",
      type:"",
      phone:"",
      companyName:"",
      address:""
    };

public tix : TixInterface ={
       userd:"",
      productName:"",
      description:"",
      notes:"",
      category:"categoría",
      check:[],
      codigo:"",
      color:"",
      con:[],
      colection:"",
      globalPrice:0,
      images:[],
      modelo:"",
      new:true,
      sin:[],
      status:"",
      tallas:[],
      typePrice:"global"
    };


    public isError = false;
    public isLogged =false;
    public precio = "sin";
    public precio2 = "con";
    public check = "check";
    public urlCreated = "";
    public images:any[]=[];
    public checks:any[]=[];
    public sin:any[]=[];
    public con:any[]=[];
    public tallas:any[]=[];

     iniciador(size){
        for (var i = 0; i < size; i++) {
          this.checks[i]=true;
          if (this._uw.moccs)
          {
          this.con[i]=0;
          this.sin[i]=0;
          }
        }
     }


  ngOnInit() {      
    this._uw.images=[];
    this.ngFormAddtixs = this.formBuilder.group({
      productName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      color:['', [Validators.required]],
      codigo:['', [Validators.required]],
      new:[true, [Validators.required]],
      modelo:['', [Validators.required]],
      globalPrice: [0,[Validators.required]]
      });
  }


 get fval() {
  return this.ngFormAddtixs.controls;
  }

  sendTix(){
      this.submitted = true;
      if (this.ngFormAddtixs.invalid) {
        this._uw.errorFormAddtixs=true;
      return;
        } 
      this._uw.errorFormAddtixs=false;
      this.tix = this.ngFormAddtixs.value;
      this.tix.status="activated";
      if (this._uw.moccs){
        this.tix.globalPrice=0;
        this.tix.con=this.con;
        this.tix.sin=this.sin;
      }
      if (this._uw.botas || this._uw.zapatos){
        this.tix.price=this.tix.globalPrice;
      }
      if(this.tix.new){
        this.tix.colection="new";
      }
      if (this.tix.category=="Botas y botines"){
        this.tix.categoryFilter="Botas";
      }
      else{
        this.tix.categoryFilter=this.tix.category;
      }
      this.tix.check=this.checks;
      this.tix.tallas=this.tallas;
      this.tix.images=this._uw.images;
      return this.dataApiService.saveTixFree(this.tix)
        .subscribe(
        );
  }    
    
  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
  set():void{
     this._uw.typeSize=false;
      this._uw.typeGlobal=false;  
      this.setType();
  }
  setType():void{
      
      if(this.ngFormAddtixs.value.category=='Botas y botines'){
        this._uw.botas=true;
        this._uw.moccs=false;
        this._uw.zapatos=false;
        this._uw.typeGlobal=true; 
        this.tallas=this.tallasBotas;
        this.iniciador(this.tallasBotas.length);
      }  
      if(this.ngFormAddtixs.value.category=='Moccs'){
        this._uw.botas=false;
        this._uw.moccs=true;
        this._uw.zapatos=false; 
        this._uw.typeSize=true;
        this.tallas=this.tallasMoccs;
        this.iniciador(this.tallasMoccs.length);
        }
      if(this.ngFormAddtixs.value.category=='Zapatos'){
        this._uw.botas=false;
        this._uw.zapatos=true;
        this._uw.moccs=false;
        this._uw.typeGlobal=true; 
        this.tallas=this.tallasZapatos;
        this.iniciador(this.tallasZapatos.length);      
      }
    }

 finish(){
    if (this._uw.errorFormAddtixs){
      this.sendTix();
    }
    this.router.navigate(['/mytixs'])
  }
  reset():void{
    this._uw.selectorA=true;
    this.router.navigate(['/addtixs']);
  }
   onValidationError(e: ValidationError) {
    console.log(e);
  }
  onUploadSuccess(e: FilePreviewModel) {
  this.images=this._uw.file;
  }
  onRemoveSuccess(e: FilePreviewModel) {
    console.log(e);
  }
  onFileAdded(file: FilePreviewModel) {
    
    file.fileName="https://db.andesproadventures.com:80/imgPrasi/server/local-storage/tixsImages/"+file.fileName;
    this.myFiles.push(file);
  }

  removeFile() {
  this.uploader.removeFileFromList(this.myFiles[0].fileName);
  }





}
