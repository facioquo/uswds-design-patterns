import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

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
