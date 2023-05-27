import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UtilityService } from './services/utility.service';

import { SiteIdentifierComponent } from './components/site-identifier/site-identifier.component';
import { SiteBannerComponent } from './components/site-banner/site-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteIdentifierComponent,
    SiteBannerComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    AppRoutingModule
  ],
  providers: [
    Meta,
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
