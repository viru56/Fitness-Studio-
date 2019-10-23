import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Title, } from '@angular/platform-browser';
import { environment as env } from '@env/environment';
@Injectable({
  providedIn: 'root'
})
export class TitleService {
  constructor(
    private title: Title
  ) {}

  setTitle(
    snapshot: ActivatedRouteSnapshot
  ) {
    let lastChild = snapshot;
    while (lastChild.children.length) {
      lastChild = lastChild.children[0];
    }
    const { title } = lastChild.data;
    if (title) {
      this.title.setTitle(`${env.appName}:${title}`)
    } else {
      this.title.setTitle(env.appName);
    }
  }
}
