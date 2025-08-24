import { TestBed } from "@angular/core/testing";
import { HeroOverlayComponent } from "./hero-overlay.component";
import { provideRouter } from "@angular/router";
import { UtilityService } from "src/app/services/utility.service";

describe("HeroOverlayComponent", () => {
	beforeEach(async () => {
		const u = {
			getPatternCard: () => ({ id: "hero-overlay", title: "Hero callout overlay", description: "", link: "", image: "" }),
			pushMetaTagsForPattern: jest.fn(),
		} as unknown as UtilityService;

			await TestBed.configureTestingModule({
			imports: [HeroOverlayComponent],
				providers: [provideRouter([]), { provide: UtilityService, useValue: u }],
		}).compileComponents();
	});

	it("creates and initializes modal", () => {
		const fixture = TestBed.createComponent(HeroOverlayComponent);
		const cmp = fixture.componentInstance;
		expect(cmp).toBeTruthy();
	});
});
