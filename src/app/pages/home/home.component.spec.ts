import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home.component';
import { UtilityService } from 'src/app/services/utility.service';

describe('HomeComponent', () => {
  it('pushes site meta tags on construct', () => {
    const pushMetaTags = jest.fn();
    TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([]), { provide: UtilityService, useValue: { pushMetaTags } }],
    });
  TestBed.createComponent(HomeComponent);
    expect(pushMetaTags).toHaveBeenCalled();
  });
});
