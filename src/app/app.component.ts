import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  get showSidebarMenu(): boolean {
    let str = window.location.href;
    let param = str.split('/');
    return param.includes('tab2');
  }
  get showSidebarMenuForProject(): boolean {
    let str = window.location.href;
    let param = str.split('/');
    return param.includes('tab3');
  }

  get showSidebarMenuForBilling(): boolean {
    let str = window.location.href;
    let param = str.split('/');
    return param.includes('billing');
  }
}
