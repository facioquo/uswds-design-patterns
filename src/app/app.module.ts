import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// pages
import { HomeModule } from './pages/home/home.module';
import { CatalogModule } from './pages/catalog/catalog.module';

// components
import { SiteCardComponent } from './components/site-card/site-card.component';
import { CatalogComponent } from './pages/catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteCardComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // pages
    HomeModule,
    CatalogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
