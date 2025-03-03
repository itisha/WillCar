import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAppReady = false;

  ngOnInit() {
    setTimeout(() => {
      this.isAppReady = true;
    }, 1000);
  }
}
