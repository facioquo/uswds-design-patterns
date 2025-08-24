import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CardCatalogComponent } from './card-catalog.component';
import { UtilityService } from 'src/app/services/utility.service';

describe('CardCatalogComponent', () => {
  let u: UtilityService;

  beforeEach(async () => {
    u = {
      getPatternCard: () => ({ id: 'card-catalog', title: 'Card catalog', description: '', link: '', image: '' }),
      pushMetaTagsForPattern: jest.fn(),
      randomWords: jest.fn().mockReturnValue('Title'),
      randInt: jest.fn().mockReturnValue(0),
      scrollToStart: jest.fn(),
      scrollToEnd: jest.fn(),
    } as unknown as UtilityService;

    await TestBed.configureTestingModule({
      imports: [CardCatalogComponent],
      providers: [provideRouter([]), { provide: UtilityService, useValue: u }],
    }).compileComponents();
  });

  it('initializes first page with default size', () => {
    const fixture = TestBed.createComponent(CardCatalogComponent);
    fixture.detectChanges();
    const cmp = fixture.componentInstance;
    expect(cmp.page).toBe(1);
    expect(cmp.cards.length).toBe(cmp.pageSize);
  });

  it('updates page size and scrolls to end on change', fakeAsync(() => {
    const fixture = TestBed.createComponent(CardCatalogComponent);
    fixture.detectChanges();
    const cmp = fixture.componentInstance;
    cmp.pageSize = 12;
    cmp.changePageSize();
    expect(u.scrollToEnd).toHaveBeenCalledWith('settings', 0);
  }));
});
