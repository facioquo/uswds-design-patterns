import { TestBed } from "@angular/core/testing";
import { provideRouter, TitleStrategy } from "@angular/router";
import { RouterTestingHarness } from "@angular/router/testing";
import { Title } from "@angular/platform-browser";
import { SITE_TITLE } from "./services/site.constants";
import { HomeComponent } from "./pages/home/home.component";
import { BubblesComponent } from "./pages/bubbles/bubbles.component";
import { AppTitleStrategy } from "./services/app-title.strategy";

describe("Routing titles", () => {
  let harness: RouterTestingHarness;
  let title: Title;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        Title,
        { provide: TitleStrategy, useClass: AppTitleStrategy },
        provideRouter([
          {
            path: "",
            title: SITE_TITLE,
            data: { meta: { description: "Home" } },
            loadComponent: () => import("./pages/home/home.component").then((m) => m.HomeComponent),
          },
          {
            path: "bubbles",
            title: "Floating bubbles",
            data: { meta: { description: "Bubbles" } },
            loadComponent: () =>
              import("./pages/bubbles/bubbles.component").then((m) => m.BubblesComponent),
          },
          {
            path: "**",
            title: "Page not found",
            loadComponent: () =>
              import("./pages/404/404.component").then((m) => m.PageNotFoundComponent),
          },
        ]),
      ],
    });
    title = TestBed.inject(Title);
    harness = await RouterTestingHarness.create();
  });

  it("sets title on home route", async () => {
    await harness.navigateByUrl("/", HomeComponent);
    expect(title.getTitle()).toBe(SITE_TITLE);
  });

  it("sets title on bubbles route with suffix", async () => {
    await harness.navigateByUrl("/bubbles", BubblesComponent);
    expect(title.getTitle()).toBe("Floating bubbles | " + SITE_TITLE);
  });
});
