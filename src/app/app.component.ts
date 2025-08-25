import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SiteIdentifierComponent } from "./components/site-identifier/site-identifier.component";
import { SiteBannerComponent } from "./components/site-banner/site-banner.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  imports: [RouterOutlet, SiteBannerComponent, SiteIdentifierComponent],
})
export class AppComponent {
  // TitleStrategy handles SEO meta; no extra init required here.
}
