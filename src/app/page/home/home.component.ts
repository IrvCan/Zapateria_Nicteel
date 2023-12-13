import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images: any[]=[
    { itemImageSrc: '../../../assets/image/nictel.jpg', thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg', alt: 'Description for Image 1', title: 'Title 1' },
    { itemImageSrc: '../../../assets/image/nictel.jpg', thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg', alt: 'Description for Image 2', title: 'Title 2' },
  ];

  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

}
