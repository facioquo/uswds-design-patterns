import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  scrollToStart(id: string) {
    setTimeout(() => {
      const element = document.getElementById(id);
      element!.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    }, 200);
  }

  scrollToEnd(id: string) {
    setTimeout(() => {
      const element = document.getElementById(id);
      element!.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
    }, 200);
  }
}

