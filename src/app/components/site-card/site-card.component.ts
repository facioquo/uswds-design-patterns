import { Component, Input } from "@angular/core";
import { type Card } from "./card.model";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-site-card",
  templateUrl: "./site-card.component.html",
  styleUrls: ["./site-card.component.scss"],
  imports: [NgOptimizedImage],
  standalone: true,
})
export class SiteCardComponent {
  @Input() card!: Card;
  @Input() i!: number;
}
