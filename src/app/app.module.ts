import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';

import { UtilityService } from './services/utility.service';

import { AppComponent } from './app.component';
import { BootstrapComponent } from './bootstrap.component';
import { SiteIdentifierComponent } from './components/site-identifier/site-identifier.component';
import { SiteBannerComponent } from './components/site-banner/site-banner.component';

@NgModule({
  declarations: [
    BootstrapComponent
  ],
  imports: [
    AppComponent,
    AppRoutingModule,
    BrowserModule,
    NgOptimizedImage,
    SiteIdentifierComponent,
    SiteBannerComponent
  ],
  providers: [
    Meta,
    UtilityService
  ],
  bootstrap: [
    BootstrapComponent
  ]
})
export class AppModule { }
