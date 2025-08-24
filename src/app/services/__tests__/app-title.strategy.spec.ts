import { TestBed } from "@angular/core/testing";
import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppTitleStrategy } from "../app-title.strategy";

@Injectable()
class TestStrategy extends AppTitleStrategy {
  private next = "";
  setNextTitle(t: string): void {
    this.next = t;
  }
  override buildTitle(_snapshot: import("@angular/router").RouterStateSnapshot): string {
    return this.next;
  }
}

describe("AppTitleStrategy", () => {
  it("sets document title with suffix using buildTitle value", () => {
    TestBed.configureTestingModule({
      providers: [Title, { provide: AppTitleStrategy, useClass: TestStrategy }],
    });
    const title = TestBed.inject(Title);
    const setSpy = jest.spyOn(title, "setTitle");
    const strategy = TestBed.inject(AppTitleStrategy) as TestStrategy;
    strategy.setNextTitle("Hello World");

    strategy.updateTitle({} as unknown as import("@angular/router").RouterStateSnapshot);

    expect(setSpy).toHaveBeenCalledWith("Hello World | Idea book: design patterns for USWDS sites");
  });
});
