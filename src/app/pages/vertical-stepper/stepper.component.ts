import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-hero-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

  constructor(
    public readonly u: UtilityService,
    private meta: Meta
  ) {
    this.meta.addTags([
      {
        name: 'description',
        content: 'A vertical Step Indicator with matching sticky navigation menu..'
      }
    ]);
  }
}
