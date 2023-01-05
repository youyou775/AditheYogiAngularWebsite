import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';


declare var gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'adi Yoga';
  menuOn = false;

  constructor(router: Router) {
    const navEndEvent$ = router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    );
    navEndEvent$.subscribe(e => {
      if(e instanceof NavigationEnd ){
      gtag('config', 'G-XJD1Z1PXJK', {'page_path': e.urlAfterRedirects});
      }
    });
  }
}
