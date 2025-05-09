import { Component, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
    selector: 'app-pattern-header',
    templateUrl: './pattern-header.component.html',
    styleUrls: ['./pattern-header.component.scss'],
    standalone: false
})
export class PatternHeaderComponent {
  @Input() patternName: string = "";

  constructor(
    public readonly u: UtilityService
  ) { }
}
