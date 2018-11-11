import { Component } from '@angular/core';
import { HeaderService } from './shared/layout/header/header.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeaderService]
})
export class AppComponent {
  title = 'axefake-frontend';
  message: string;
  subscription: Subscription;

  constructor(public headerService: HeaderService){}

  ngOnInit() {
    this.subscription = this.headerService.message.subscribe(
      (message) => {
        this.message = message;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
