import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import {Ng2GoogleChartsModule} from 'ng2-google-charts'
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountryComponent } from './components/country/country.component';
import { DashboardDataComponent } from './components/dashboard-data/dashboard-data.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CountryComponent,
    HomeComponent,
    DashboardDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
