import { TestBed } from '@angular/core/testing';
import { BubblesComponent } from './bubbles.component';
import { provideRouter } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';

describe('BubblesComponent', () => {
	beforeEach(async () => {
		const u = {
			getPatternCard: () => ({ id: 'bubbles', title: 'Floating bubbles', description: '', link: '', image: '' }),
			pushMetaTagsForPattern: jest.fn(),
			randInt: jest.fn().mockReturnValue(0),
			randomWords: jest.fn().mockReturnValue('Mock title'),
		} as unknown as UtilityService;

			await TestBed.configureTestingModule({
			imports: [BubblesComponent],
				providers: [provideRouter([]), { provide: UtilityService, useValue: u }],
		}).compileComponents();
	});

	it('renders 7 bubbles deterministically', () => {
		const fixture = TestBed.createComponent(BubblesComponent);
		fixture.detectChanges();
		const cards = fixture.componentInstance.cards;
		expect(cards.length).toBe(7);
		expect(cards[0].title).toBe('Mock title');
	});
});
