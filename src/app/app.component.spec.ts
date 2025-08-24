import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UtilityService } from './services/utility.service';
import { Meta, Title } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [UtilityService, Meta, Title, provideRouter([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
