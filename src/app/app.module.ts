import { NgModule, isDevMode } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
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
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  bootstrap: [AppComponent],
  providers: [
    Meta,
    UtilityService
  ]
})
export class AppModule { }
