import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  items: MenuItem[] = [
    { label: 'Home', icon: PrimeIcons.HOME, url:''},
    { label: 'Admin', icon: PrimeIcons.DESKTOP, routerLink:'/admin'},
    { label: 'gallery', icon: PrimeIcons.IMAGES, url:'/admin'},
    { label: 'about', icon: PrimeIcons.USERS, url:'/admin'},
    { label: 'myCar', icon: PrimeIcons.CART_PLUS, url:'/admin'},

    { label: 'sign-in', icon: PrimeIcons.ID_CARD, url:'/admin', items: [
      { label: 'sign-in', icon: PrimeIcons.SIGN_IN},
      { label: 'sign-up', icon: PrimeIcons.USER_PLUS}
    ]},
    { label: 'sign-out', icon: PrimeIcons.SIGN_OUT, url:'/admin'},
  ];

}
