import { TestBed } from "@angular/core/testing";
import { StickyMenuComponent } from "./sticky-menu.component";
import { provideRouter } from "@angular/router";
import { UtilityService } from "@services/utility.service";

describe("StickyMenuComponent", () => {
  beforeEach(async () => {
    const u = {
      getPatternCard: () => ({
        id: "sticky-menu",
        title: "Sticky process menu",
        description: "",
        link: "",
        image: "",
      }),
    } as unknown as UtilityService;

    await TestBed.configureTestingModule({
      imports: [StickyMenuComponent],
      providers: [provideRouter([]), { provide: UtilityService, useValue: u }],
    }).compileComponents();
  });

  it("creates component", () => {
    const fixture = TestBed.createComponent(StickyMenuComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
