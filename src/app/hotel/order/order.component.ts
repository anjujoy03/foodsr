import { Component, OnInit } from '@angular/core';
import { Config, Menu } from 'src/app/type';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  logactive: boolean=false;
  show=false;
  OrderList:any=[];
  OrderDetails:any=[];
  PriceDetails:any=[];


  constructor(private router:Router,private http:HttpClient) { }
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
      active: false,
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
      active: true,
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
this.getOrders();
  }
updateOrder(order_id:any,event:any){
  this.http.post(environment.apiUrl + '/apiorder_update_hotel',{order_id:order_id}).subscribe((response:any)=>{
    if(response['status']=='SUCCESS'){
      // this.OrderList=response['orders'];
   
    }
  })

}
ViewDetails(order_id:any){
  this.http.post(environment.apiUrl + '/apiorder_detilas',{order_id:order_id}).subscribe((response:any)=>{
    if(response['status']=='SUCCESS'){
      this.OrderDetails=response['orders'];
      this.PriceDetails=response['orders_list'];
      console.log(this.PriceDetails)
      

   
    }
  })
}



  getOrders(){

    this.http.post(environment.apiUrl + '/apiget_orders',{hotel_id:'lemon000653'}).subscribe((response:any)=>{
      if(response['status']=='SUCCESS'){
        this.OrderList=response['orders'];
     
      }
    })

 }


}
