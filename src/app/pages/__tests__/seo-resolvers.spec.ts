import { TestBed } from "@angular/core/testing";
import { Meta } from "@angular/platform-browser";
import { provideRouter, Router, TitleStrategy } from "@angular/router";
import { Component } from "@angular/core";
import { AppTitleStrategy } from "@services/app-title.strategy";

@Component({ selector: "app-t", template: "", standalone: true })
class TestHostComponent {}

describe("SEO via TitleStrategy + route data", () => {
  it("resolve titles and meta and apply to Meta service", async () => {
    await TestBed.configureTestingModule({
      providers: [
        Meta,
        { provide: TitleStrategy, useClass: AppTitleStrategy },
        provideRouter([
          {
            path: "",
            title: "Home",
            data: { meta: { description: "design pattern idea book" } },
            component: TestHostComponent,
          },
          {
            path: "bubbles",
            title: "Floating bubbles",
            data: {
              meta: {
                description: "floating collection of bubble",
                image: "/assets/thumbnails/bubbles.png?v=YYYY.MM.DD",
              },
            },
            component: TestHostComponent,
          },
        ]),
      ],
    }).compileComponents();

    const meta = TestBed.inject(Meta);
    const router = TestBed.inject(Router);

    await router.navigateByUrl("/");
    expect(meta.getTag("name='description'")?.content).toContain("design pattern idea book");

    await router.navigateByUrl("/bubbles");
    expect(meta.getTag("name='description'")?.content).toContain("floating collection of bubble");
    expect(meta.getTag("property='og:image'")?.content).toContain("bubbles.png");
  });
});
