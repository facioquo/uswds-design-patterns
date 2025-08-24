import { bootstrapApplication } from "@angular/platform-browser";
import { Meta, provideClientHydration } from "@angular/platform-browser";
import { provideRouter, PreloadAllModules, withEnabledBlockingInitialNavigation, withPreloading, withInMemoryScrolling } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { UtilityService, SITE_TITLE, patternTitle, titleWithSuffix } from "./app/services/utility.service";

bootstrapApplication(AppComponent, {
  providers: [
    Meta,
    UtilityService,
    provideClientHydration(),
    provideRouter([
      { path: "", title: SITE_TITLE, loadComponent: () => import("./app/pages/home/home.component").then(m => m.HomeComponent) },
      { path: "card-catalog", title: patternTitle("card-catalog"), loadComponent: () => import("./app/pages/card-catalog/card-catalog.component").then(m => m.CardCatalogComponent) },
      { path: "hero-overlay", title: patternTitle("hero-overlay"), loadComponent: () => import("./app/pages/hero-overlay/hero-overlay.component").then(m => m.HeroOverlayComponent) },
      { path: "bubbles", title: patternTitle("bubbles"), loadComponent: () => import("./app/pages/bubbles/bubbles.component").then(m => m.BubblesComponent) },
      { path: "sticky-menu", title: patternTitle("sticky-menu"), loadComponent: () => import("./app/pages/sticky-menu/sticky-menu.component").then(m => m.StickyMenuComponent) },
      { path: "**", title: titleWithSuffix("Page not found"), loadComponent: () => import("./app/pages/404/404.component").then(m => m.PageNotFoundComponent) },
    ],
      withPreloading(PreloadAllModules),
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({ anchorScrolling: "enabled" })
    ),
  ],
}).catch((err) => console.error(err));
