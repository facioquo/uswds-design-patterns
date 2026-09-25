import { TestBed } from "@angular/core/testing";
import { UtilityService } from "../utility.service";

describe("UtilityService", () => {
  let util: UtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilityService]
    });
    util = TestBed.inject(UtilityService);
  });

  afterEach(() => {
    vi.useRealTimers();
    document.body.replaceChildren();
  });

  it("scrollToStart scrolls after timeout", () => {
    vi.useFakeTimers();
    const el: HTMLElement = document.createElement("div");
    el.id = "target";
    document.body.appendChild(el);
    el.scrollIntoView = () => undefined;
    const spy = vi.spyOn(el, "scrollIntoView");

    util.scrollToStart("target", 100);
    vi.advanceTimersByTime(100);
    expect(spy).toHaveBeenCalledWith({ behavior: "smooth", block: "start", inline: "start" });
  });
});
