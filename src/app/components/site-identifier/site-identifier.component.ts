import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-site-identifier",
  templateUrl: "./site-identifier.component.html",
  styleUrls: ["./site-identifier.component.scss"],
  imports: [RouterLink, NgOptimizedImage],
})
export class SiteIdentifierComponent {}
