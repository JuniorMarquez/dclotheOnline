import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ArchwizardModule } from 'angular-archwizard';
import { HttpClientModule } from '@angular/common/http';
import { Component, Inject} from '@angular/core';
import { XunkCalendarModule } from '../xunk-calendar/xunk-calendar.module';
//RUTAS
import { app_routing } from "./app.routes";       
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
//DIRECTIVAS
import { FilePickerModule } from  '../assets/file-picker/src/public_api';
//COMPONENTS
//SERVICES
import {TixsService} from './services/tixs.service';
import {ProductInfoService} from './services/product-info.service';
import {CarService} from './services/car.service';
import {DataApiService} from './services/data-api.service';
import {ScrollTopService} from './services/scroll-top.service';
import {UserWService} from './services/user-w.service';
import {IpbucketService} from './services/ipbucket.service';
//ANIMATIONS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//MATERIAL
//import { MaterialModule } from './material';
import {MatButtonModule, MatCheckboxModule,MatTabsModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';


import { AddtixsComponent } from './components/addtixs/addtixs.component';
import { AdminComponent } from './components/admin/admin.component';
import { MyTixsComponent } from './components/my-tixs/my-tixs.component';
import { TestappComponent } from './components/testapp/testapp.component';
import { PrasitopbarComponent } from './components/prasitopbar/prasitopbar.component';
import { PrasisliderComponent } from './components/prasislider/prasislider.component';
import { PrasicategorycarouselComponent } from './components/prasicategorycarousel/prasicategorycarousel.component';
import { PrasiproductcatalogComponent } from './components/prasiproductcatalog/prasiproductcatalog.component';
import { PrasiinstagramfeedComponent } from './components/prasiinstagramfeed/prasiinstagramfeed.component';
import { PrasitopfooterComponent } from './components/prasitopfooter/prasitopfooter.component';
import { PrasifooterComponent } from './components/prasifooter/prasifooter.component';
import { PrasiaboutoverlayComponent } from './components/prasiaboutoverlay/prasiaboutoverlay.component';
import { PrasicartoverlayComponent } from './components/prasicartoverlay/prasicartoverlay.component';
import { PrasisearchoverlayComponent } from './components/prasisearchoverlay/prasisearchoverlay.component';
import { PrasiproductdetailComponent } from './components/prasiproductdetail/prasiproductdetail.component';
import { PrasicontactComponent } from './components/prasicontact/prasicontact.component';
import { PrasiaboutComponent } from './components/prasiabout/prasiabout.component';
import { PrasidevolucionesComponent } from './components/prasidevoluciones/prasidevoluciones.component';
import { PrasifilterComponent } from './components/prasifilter/prasifilter.component';
import { PrasishopcartComponent } from './components/prasishopcart/prasishopcart.component';
import { PrasiconfirmationoverlayComponent } from './components/prasiconfirmationoverlay/prasiconfirmationoverlay.component';
import { PrasidiscountComponent } from './components/prasidiscount/prasidiscount.component';
import { DclothetopbarComponent } from './components/dclothetopbar/dclothetopbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShopComponent } from './components/shop/shop.component';
import { DetailComponent } from './components/detail/detail.component';
import { CartComponent } from './components/cart/cart.component';
import { PagoComponent } from './components/pago/pago.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    AddtixsComponent,
    AdminComponent,
    MyTixsComponent,
    PrasitopbarComponent,
    PrasisliderComponent,
    PrasicategorycarouselComponent,
    PrasiproductcatalogComponent,
    PrasiinstagramfeedComponent,
    PrasitopfooterComponent,
    PrasifooterComponent,
    PrasiaboutoverlayComponent,
    PrasicartoverlayComponent,
    PrasisearchoverlayComponent,
    PrasiproductdetailComponent,
    PrasicontactComponent,
    PrasiaboutComponent,
    PrasidevolucionesComponent,
    PrasifilterComponent,
    PrasishopcartComponent,
    PrasiconfirmationoverlayComponent,
    PrasidiscountComponent,
    TestappComponent,
    DclothetopbarComponent,
    TopbarComponent,
    SliderComponent,
    ProductsComponent,
    FooterComponent,
    ShopComponent,
    DetailComponent,
    CartComponent,
    PagoComponent,
    BlogComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    app_routing,
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule,
    ArchwizardModule,
    CarouselModule,
    XunkCalendarModule,
    FilePickerModule,
    MatRadioModule, 
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule
  ],
 entryComponents:[],
  providers: [
    TixsService,
    DataApiService,
    ScrollTopService,
    UserWService,
    IpbucketService
      ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
