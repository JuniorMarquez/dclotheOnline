import {RouterModule,Routes} from '@angular/router';
import {
	AddtixsComponent,
	AdminComponent,
	MyTixsComponent,
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
	CartoverlayComponent,
	TestappComponent
	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:TestappComponent},
	{path:'topbar',component:TopbarComponent},
	{path:'slider',component:SliderComponent},
	{path:'products',component:ProductsComponent},
	{path:'footer',component:FooterComponent},
	{path:'shop',component:ShopComponent},
	{path:'detail/:id',component:DetailComponent},
	{path:'cart',component:CartComponent},
	{path:'pago',component:PagoComponent},
	{path:'blog',component:BlogComponent},
	{path:'post/:id',component:PostComponent},
	{path:'cartoverlay',component:CartoverlayComponent},
	{path:'admin',component:AdminComponent},
	{path:'addtixs',component:AddtixsComponent },
	{path:'mytixs',component:MyTixsComponent, canActivate:[AuthGuard]},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

