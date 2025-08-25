import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { UtilityService } from "../utility.service";

describe("UtilityService", () => {
  let util: UtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilityService],
    });
    util = TestBed.inject(UtilityService);
  });

  // ...

  // title composition now handled by AppTitleStrategy

  // patternTitle removed; titles are handled by router TitleStrategy

  it("scrollToStart scrolls after timeout", fakeAsync(() => {
    const el: HTMLElement = document.createElement("div");
    el.id = "target";
    document.body.appendChild(el);
    // ensure scrollIntoView exists for spying with proper typing
    el.scrollIntoView = () => undefined;
    const spy = jest.spyOn(el, "scrollIntoView");

    util.scrollToStart("target", 100);
    tick(100);
    expect(spy).toHaveBeenCalledWith({ behavior: "smooth", block: "start", inline: "start" });
  }));
});
