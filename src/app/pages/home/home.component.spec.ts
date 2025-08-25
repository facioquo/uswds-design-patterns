import { TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";
import { HomeComponent } from "./home.component";
import { UtilityService } from "src/app/services/utility.service";

describe("HomeComponent", () => {
  it("creates component", () => {
    TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([]), { provide: UtilityService, useValue: {} }],
    });
    const fixture = TestBed.createComponent(HomeComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
