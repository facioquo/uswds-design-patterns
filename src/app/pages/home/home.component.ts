import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Card } from 'src/app/components/site-card/card.model';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public readonly u: UtilityService,
    private meta: Meta
  ) {
    this.meta.addTags([
      {
        name: 'description',
        content: 'Design patterns using the U.S. Web Design System.'
      }
    ]);
  }

  public cards: Card[] = [
    {
      id: 'card-catalog',
      title: 'Card catalog',
      description: 'A catalog of <strong>Cards</strong> with consistent vertical spacing and “show more” pagination.',
      link: '/card-catalog'
    }
  ];
}

