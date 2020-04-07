import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {isPlatformServer} from '@angular/common';

import {Subscription} from 'rxjs';


@Component({
  selector: 'app-blog-post-view',
  styleUrls: ['./blog-post-view.component.scss'],
  templateUrl: './blog-post-view.component.html'
})

export class BlogPostViewComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  private postId: string;

  post: string;
  notFound = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(async (params) => {
      this.postId = params['id'];
      this.post =  './assets/blog/post/' + this.postId + '.md';

      if (isPlatformServer(this.platformId)) {
      }
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onError($event) {
    this.notFound = true;
  }

}
