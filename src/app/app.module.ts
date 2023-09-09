import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SnackBarMessageComponent } from './helpers/snack-bar-message/snack-bar-message.component';

import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HeaderPublicComponent } from './layout/header-public/header-public.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './modules/dashboard/home/home.component';
import { PersonalComponent } from './modules/dashboard/personal/personal.component';
import { InvoicesComponent } from './modules/dashboard/invoices/invoices.component';
import { AddInvoiceComponent } from './modules/dashboard/add-invoice/add-invoice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroDetailComponent } from './modules/heros-dashboard/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './modules/heros-dashboard/hero-search/hero-search.component';
import { HeroesComponent } from './modules/heros-dashboard/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    SnackBarMessageComponent,
    FooterComponent,
    HeaderComponent,
    HeaderPublicComponent,
    PublicLayoutComponent,
    SidebarComponent,
    HomeComponent,
    PersonalComponent,
    InvoicesComponent,
    AddInvoiceComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
