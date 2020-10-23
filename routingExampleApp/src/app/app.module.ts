import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './core/components/home/home.component';
import { ContactComponent } from './core/components/contact/contact.component';
import { ProductsComponent } from './core/components/contact/products/products.component';
import { CajaComponent } from './products/caja/caja.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ProductsComponent,
    CajaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
