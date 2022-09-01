import { Component } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  signedId = false;

  constructor() {
    GoogleAuth.initialize();
  }

  async signIn() {
    const user = await GoogleAuth.signIn();
    this.signedId = true;
    console.log(user);
  }

  async signOut() {
    const resp = await GoogleAuth.signOut();
    this.signedId = false;
    console.log(resp);
  }

  async refresh() {
    const authObj = await GoogleAuth.refresh();
    console.log(authObj);
  }

}
