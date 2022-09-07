import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componetns/header/header.component';
import { FooterComponent } from './Componetns/footer/footer.component';
import { SidebarComponent } from './Componetns/sidebar/sidebar.component';
import { HomeComponent } from './Componetns/home/home.component';
import { ProductListComponent } from './Componetns/Order/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { USDtoEURPipe } from './Pipes/usdto-eur.pipe';
import { OrderMasterComponent } from './Componetns/Order/order-master/order-master.component';

@NgModule({
  declarations: [
    //Component you have
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductListComponent,
    LightBoxDirective,
    USDtoEURPipe,
    OrderMasterComponent
  ],

  //set models -> api->httpclass
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  //Component you start
  bootstrap: [AppComponent]
})
export class AppModule { }
