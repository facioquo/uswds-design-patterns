import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { Meta, Title } from "@angular/platform-browser";
import { UtilityService, URL_IMAGE_SOCIAL } from "../utility.service";
import { titleWithSuffix, patternTitle } from "../utility.service";

describe("UtilityService", () => {
	let util: UtilityService;
	let meta: Meta;
	let title: Title;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [Meta, Title, UtilityService],
		});
		util = TestBed.inject(UtilityService);
		meta = TestBed.inject(Meta);
		title = TestBed.inject(Title);
	});

	it("pushMetaTags sets tags and title from og:title", () => {
		util.pushMetaTags([
			{ property: "og:title", content: "Hello World" },
			{ property: "og:image", content: URL_IMAGE_SOCIAL },
			{ name: "description", content: "Desc" },
		]);

		expect(title.getTitle()).toBe("Hello World");
		expect(meta.getTag("property='og:image'")?.content).toBe(URL_IMAGE_SOCIAL);
		expect(meta.getTag("name='description'")?.content).toBe("Desc");
	});

	it("titleWithSuffix composes properly", () => {
		expect(titleWithSuffix("A", "B")).toBe("A | B");
		expect(titleWithSuffix("", "B")).toBe("B");
	});

	it("patternTitle returns pattern-specific title or UNKNOWN", () => {
		expect(patternTitle("bubbles")).toContain("Floating bubbles");
		expect(patternTitle("unknown")).toContain("UNKNOWN ID");
	});

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
