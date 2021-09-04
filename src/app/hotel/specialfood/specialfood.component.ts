import { Component, OnInit } from '@angular/core';
import { Config, Menu } from 'src/app/type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specialfood',
  templateUrl: './specialfood.component.html',
  styleUrls: ['./specialfood.component.css']
})
export class SpecialfoodComponent implements OnInit {
  logactive: boolean=false;
  show=false;

  constructor(private router:Router) { }

  options: Config = { multi: false };
  menus: Menu[] = [
    {
      name: 'Dashboard',
      iconClass: '../../../assets/img/dashboard.png',
      active: false,
      submenu: [
        { name: 'Home', url: 'hotel/home' ,icon:''},
      
  
      ]
    },
   
    { 
      name: 'Food Details',
      iconClass: '../../../assets/img/product.png',
      active: true,
      submenu: [
        { name: 'Category', url: 'hotel/category' ,icon:''},
        { name: 'Food', url: 'hotel/food' ,icon:''},
        { name: 'Special Food', url: 'progress' ,icon:''},
        { name: 'Food Status', url: 'hotel/foodstatus' ,icon:''},

       

      ]
    },  
    //   { 
    //   name: 'Settings',
    //   iconClass: '../../../assets/img/settings.png',
    //   active: false,
    //   submenu: [
    //     { name: 'Users', url: 'shop/food' ,icon:''},
    //     { name: 'Delivery Settings', url: 'shop/delivery' ,icon:''},
    //     { name: 'Profile', url: 'shop/toy' ,icon:''},
    //     { name: 'Category', url: 'pets' ,icon:''},

       

    //   ]
    // },
    { 
      name: 'Orders',
      iconClass: '../../../assets/img/orders.png',
      active: false,
      submenu: [
        { name: 'Order detail', url: 'hotel/order' ,icon:''},
       
      ]
    },
    { 
      name: 'Reports',
      iconClass: '../../../assets/img/categories.png',
      active: false,
      submenu: [
        { name: 'Report Details', url: 'hotel/HOTELREPORT' ,icon:''},

      ]
    },

   
  ];
  Logout(){
    localStorage.clear();
    this.router.navigate(['login'])
  }
  accountdropdown(){
    this.logactive=!this.logactive;
  }
  toggle(){
    this.show=!this.show;
    console.log(this.show)
  }

  ngOnInit(): void {
  }

}
