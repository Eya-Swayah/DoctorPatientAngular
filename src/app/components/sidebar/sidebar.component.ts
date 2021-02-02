import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string; 
    class: string;
}
export const ROUTES: RouteInfo[] = [  
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    
   // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
   { path: '/patient-list', title: 'Patients',  icon:'content_paste', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/typography', title: '',  icon:'', class: '' },
    { path: '/icons', title: '',  icon:'', class: '' },
    { path: '/user-profile', title: ' ',  icon:'', class: '' },
    { path: '/upgrade', title: '',  icon:'', class: 'active-pro' },
    { path: '/table-list', title: 'Appointments',  icon:'content_paste', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[]; 
  

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
