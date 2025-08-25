import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-site-banner",
  templateUrl: "./site-banner.component.html",
  styleUrls: ["./site-banner.component.scss"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteBannerComponent {
  isOpenBanner = false;
}
