import { Component } from '@angular/core';

@Component({
    selector: 'app-site-banner',
    templateUrl: './site-banner.component.html',
    styleUrls: ['./site-banner.component.scss'],
    standalone: false
})
export class SiteBannerComponent {
  isOpenBanner = false;
}
