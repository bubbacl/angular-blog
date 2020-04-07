import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const FACTS_URL = 'https://non-srr-angular.firebaseio.com/facts.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.main.html',
  styleUrls: ['./app.main.scss']
})

export class MainComponent implements OnInit {
  facts: Observable<any>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private http: HttpClient
  ) {
    this.facts = this.http.get(FACTS_URL);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('Prod mode.');
    } else if (isPlatformBrowser(this.platformId)) {
      console.log('Dev mode.');
    }
  }
}
