import { Component, OnInit } from '@angular/core';
import { Config, Menu } from 'src/app/type';
import { Router } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import * as  Chart from 'chart.js';
import { ChartType } from 'chart.js';
import { SingleDataSet,  monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-hotelreport',
  templateUrl: './hotelreport.component.html',
  styleUrls: ['./hotelreport.component.css']
})
export class HotelreportComponent implements OnInit {


  

  doughnutChartLabels: Label[] = ['TOTAL CUSTOMERS', 'TOTAL INCOME', 'TOTAL ORDERS'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';


 
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN','JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  barChartType: Chart.ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33,45, 37, 60, 70, 46, 33], label: 'Monthly Income' }
  ];



  logactive: boolean=false;
  show=false;
  isShown: boolean = false ; 
  isincome: boolean = false ; 
  isbusiness: boolean = false ; 
  ispayment: boolean = false ; 


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
      active: false,
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
      active: true,
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
    incomeShow()
     {

      this.isincome = ! this.isincome;
      
      }
      businessShow()
      {
        this.isbusiness = ! this.isbusiness;
      }
      paymentShow(){
        this.ispayment = ! this.ispayment;
      }
  ngOnInit(): void {
  }

}
