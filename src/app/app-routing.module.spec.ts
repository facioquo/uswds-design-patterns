import { TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";
import { RouterTestingHarness } from "@angular/router/testing";
import { Title } from "@angular/platform-browser";
import { SITE_TITLE, patternTitle, titleWithSuffix } from "./services/utility.service";
import { HomeComponent } from "./pages/home/home.component";
import { BubblesComponent } from "./pages/bubbles/bubbles.component";

describe("Routing titles", () => {
	let harness: RouterTestingHarness;
	let title: Title;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			providers: [
				provideRouter([
					{ path: "", title: SITE_TITLE, loadComponent: () => import("./pages/home/home.component").then(m => m.HomeComponent) },
					{ path: "bubbles", title: patternTitle("bubbles"), loadComponent: () => import("./pages/bubbles/bubbles.component").then(m => m.BubblesComponent) },
					{ path: "**", title: titleWithSuffix("Page not found"), loadComponent: () => import("./pages/404/404.component").then(m => m.PageNotFoundComponent) },
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

	it("sets title on bubbles route", async () => {
		await harness.navigateByUrl("/bubbles", BubblesComponent);
		expect(title.getTitle()).toBe(patternTitle("bubbles"));
	});
});
