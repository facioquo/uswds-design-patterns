import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  ngOnInit(): void {

    // remove after 2023
    // unregister our prior PWA service worker
    navigator.serviceWorker.getRegistration()
      .then((registration) => {
        if (registration) {
          registration.unregister();
        }
      });
  }
}
