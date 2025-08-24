import { TestBed } from '@angular/core/testing';
import { PageNotFoundComponent } from './404.component';
import { provideRouter } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';

describe('PageNotFoundComponent', () => {
  it('pushes 404 meta tags on construct', () => {
    const pushMetaTags = jest.fn();
    TestBed.configureTestingModule({
      imports: [PageNotFoundComponent],
      providers: [provideRouter([]), { provide: UtilityService, useValue: { pushMetaTags } }],
    });
    TestBed.createComponent(PageNotFoundComponent);
    expect(pushMetaTags).toHaveBeenCalled();
  });
});
