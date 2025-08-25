import { TestBed } from "@angular/core/testing";
import { PageNotFoundComponent } from "./404.component";
import { provideRouter } from "@angular/router";
import { Meta } from "@angular/platform-browser";

describe("PageNotFoundComponent", () => {
  it("sets robots noindex on construct", () => {
    TestBed.configureTestingModule({
      imports: [PageNotFoundComponent],
      providers: [provideRouter([]), Meta],
    });
    TestBed.createComponent(PageNotFoundComponent);
    const meta = TestBed.inject(Meta);
    expect(meta.getTag("name='robots'")?.content).toBe("noindex, nofollow");
  });
});
