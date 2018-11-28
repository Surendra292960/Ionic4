import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Login',
      url: '/Login',
      icon: 'person'
    },
    {
      title: 'Register',
      url: '/Register',
      icon: 'person'
    },
    {
      title: 'Tickets',
      url: '/Tickets',
      icon: 'person'
    },
    {
      title: 'Tabs',
      url: '/tabs',
      icon: 'person'
    },
    {
      title: 'People',
      url: '/people',
      icon: 'person'
    },
    {
      title: 'Films',
      url: '/films',
      icon: 'person'
    },
    {
      title: 'Planets',
      url: '/planets',
      icon: 'person'
    },
    {
      title: 'FilmDetail',
      url: '/filmDetails',
      icon: 'person'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
