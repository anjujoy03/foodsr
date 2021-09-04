import { Component, OnInit } from '@angular/core';
import { Config, Menu } from 'src/app/type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodstatus',
  templateUrl: './foodstatus.component.html',
  styleUrls: ['./foodstatus.component.css']
})
export class FoodstatusComponent implements OnInit {

  logactive: boolean=false;
  show=false;
  isShown: boolean = false ; 


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
  toggleShow() {

    this.isShown = ! this.isShown;
    
    }
  ngOnInit(): void {
  }

}
