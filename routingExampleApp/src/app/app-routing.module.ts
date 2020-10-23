import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './core/components/contact/contact.component';
import { ProductsComponent } from './core/components/contact/products/products.component';
import { HomeComponent } from './core/components/home/home.component';
import { CajaComponent } from './products/caja/caja.component';

const routes: Routes = [
  {path:'contact', component: ContactComponent},
  {path:'homepage', component: HomeComponent},
  {path:'products', component: ProductsComponent },
  {path:'caja', component: CajaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
