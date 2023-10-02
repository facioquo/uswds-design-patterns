import { Component, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-pattern-footer',
  templateUrl: './pattern-footer.component.html',
  styleUrls: ['./pattern-footer.component.scss']
})
export class PatternFooterComponent {
  @Input() githubFolder: string = "";

  constructor(
    public readonly u: UtilityService
  ) { }
}
