import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {
  items!: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label:'new',
          icon:'pi pi-fw pi-ellipsis-v',
          routerLink: "/newstories"
      },
      {
          label:'past',
          icon:'pi pi-fw pi-ellipsis-v',
          routerLink: "/past"
      },
      {
          label:'comments',
          icon:'pi pi-fw pi-ellipsis-v',
          routerLink: "/comments"
      },
      {
          label:'ask',
          icon:'pi pi-fw pi-ellipsis-v',
          routerLink: "/ask"
      },
      {
        label:'show',
        icon:'pi pi-fw pi-ellipsis-v',
        routerLink: "/show"
      },
      {
        label:'jobs',
        icon:'pi pi-fw pi-ellipsis-v',
        routerLink: "/jobs"
      },
      {
        label:'submit',
        icon:'pi pi-fw pi-ellipsis-v',
        routerLink: "/submit"
      }
  ];
  }

}
