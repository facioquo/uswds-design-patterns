import { bootstrapApplication } from "@angular/platform-browser";
import { Meta, Title, provideClientHydration } from "@angular/platform-browser";
import {
  provideRouter,
  PreloadAllModules,
  TitleStrategy,
  withEnabledBlockingInitialNavigation,
  withPreloading,
  withInMemoryScrolling,
} from "@angular/router";
import { AppComponent } from "./app/app.component";
import { UtilityService } from "./app/services/utility.service";
import { AppTitleStrategy } from "./app/services/app-title.strategy";
import { SITE_TITLE } from "./app/services/site.constants";

bootstrapApplication(AppComponent, {
  providers: [
    Meta,
    Title,
    UtilityService,
    { provide: TitleStrategy, useClass: AppTitleStrategy },
    provideClientHydration(),
    provideRouter(
      [
        {
          path: "",
          title: SITE_TITLE,
          data: {
            meta: {
              description:
                "A design pattern idea book for designers and developers using the U.S. Web Design System (USWDS).",
            },
          },
          loadComponent: () =>
            import("./app/pages/home/home.component").then((m) => m.HomeComponent),
        },
        {
          path: "card-catalog",
          title: "Card catalog",
          data: {
            meta: {
              description:
                "A catalog of Cards with consistent vertical spacing and show more pagination.",
              image: "/assets/thumbnails/card-catalog.png?v=YYYY.MM.DD",
            },
          },
          loadComponent: () =>
            import("./app/pages/card-catalog/card-catalog.component").then(
              (m) => m.CardCatalogComponent
            ),
        },
        {
          path: "hero-overlay",
          title: "Hero callout overlay",
          data: {
            meta: {
              description:
                "A full-width Hero callout overlay with semi-transparent background and faded edge.",
              image: "/assets/thumbnails/hero-overlay.png?v=YYYY.MM.DD",
            },
          },
          loadComponent: () =>
            import("./app/pages/hero-overlay/hero-overlay.component").then(
              (m) => m.HeroOverlayComponent
            ),
        },
        {
          path: "bubbles",
          title: "Floating bubbles",
          data: {
            meta: {
              description:
                "A floating collection of bubble-shaped cards without use of the Grid layout.",
              image: "/assets/thumbnails/bubbles.png?v=YYYY.MM.DD",
            },
          },
          loadComponent: () =>
            import("./app/pages/bubbles/bubbles.component").then((m) => m.BubblesComponent),
        },
        {
          path: "sticky-menu",
          title: "Sticky process menu",
          data: {
            meta: {
              description: "A matching sticky Side Navigation menu for the Process List.",
              image: "/assets/thumbnails/sticky-menu.png?v=YYYY.MM.DD",
            },
          },
          loadComponent: () =>
            import("./app/pages/sticky-menu/sticky-menu.component").then(
              (m) => m.StickyMenuComponent
            ),
        },
        {
          path: "**",
          title: "Page not found",
          loadComponent: () =>
            import("./app/pages/404/404.component").then((m) => m.PageNotFoundComponent),
          data: { description: "This is not a page.  Try again." },
        },
      ],
      withPreloading(PreloadAllModules),
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({ anchorScrolling: "enabled" })
    ),
  ],
}).catch((err) => console.error(err));
