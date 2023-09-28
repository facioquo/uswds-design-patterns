import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-hero-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: [
    './overlay.component.scss'
  ]
})
export class OverlayComponent implements OnInit {

  constructor(
    public readonly u: UtilityService,
    private meta: Meta
  ) {
    this.meta.addTags([
      {
        name: 'description',
        content: 'A hero section overlay with fade-in edge.'
      }
    ]);
  }

  ngOnInit(): void {

  }

}
