import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Config, Menu } from 'src/app/type';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
 



  displayedColumns: string[] = ['No', 'Category Name', 'Action'];
 

  logactive: boolean=false;
  show=false;
  isShown: boolean = false
  dataSource: any;
  filtertoggle:boolean=false;
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router,private dialog: MatDialog ) { }
  
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

  ViewDetails(cat_id:any){
    this.http.post(environment.apiUrl + '/apicategory_by_id',{cat_id:cat_id}).subscribe((response:any)=>{
      if(response['status']=='SUCCESS'){
        this.foodList=response['cats_list'];
        this.FoodForm.get('category_name')?.setValue(this.foodList[0].category_name);
        this.FoodForm.get('category_id')?.setValue(this.foodList[0].category_id)
     
      }
    })

  }
  Delete(cat_id:any){
    this.http.post(environment.apiUrl + '/apiget_categorey',{hotel_id:cat_id}).subscribe((response:any)=>{
      if(response['status']=='SUCCESS'){
        this.foodList=response['cats_list']
     
        this.dataSource = this.foodList;
      }
    })

  }
  onToggleFilter(){
   this.filtertoggle=!this.filtertoggle;
  }


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
 
  
  FoodForm!:FormGroup;
  foodList:any=[];

  ngOnInit(): void {
    this.FoodForm=this.formbuilder.group({

      category_name:['',Validators.required],
      category_id:[''],
      price:['',Validators.required],
      qty:[''],
      count:[''],
      numbers:[''],
      persons:[''],
      foodtype:[''],
      foodcategory:[''],
      foodimg:[''],
      hotel_id:['admin'],
      cat_id:[]


    });
    this.getCategory();
  }
  onSubmit(){

    // var formData=new FormData();
    // formData.append('food_name',this.FoodForm.controls['foodname'].value)
    // formData.append('hotel_id',this.FoodForm.controls['hotel_id'].value)
    // formData.append('price',this.FoodForm.controls['price'].value)
    // formData.append('quantity',this.FoodForm.controls['qty'].value)
    // formData.append('numbers',this.FoodForm.controls['numbers'].value)
    // formData.append('count',this.FoodForm.controls['count'].value)
    // formData.append('persons',this.FoodForm.controls['persons'].value)
    // formData.append('type',this.FoodForm.controls['foodtype'].value)
    // formData.append('category',this.FoodForm.controls['foodcategory'].value)
    // formData.append('cat_id',this.FoodForm.controls['cat_id'].value)

    this.http.post(environment.apiUrl + '/apiadd_category',this.FoodForm.value).subscribe((response:any)=>{
      if(response['status']=='SUCCESS'){
        this.getCategory()
      }
    })
    
  }
  getCategory(){


     this.http.post(environment.apiUrl + '/apiget_categorey',{hotel_id:'lemon000653'}).subscribe((response:any)=>{
       if(response['status']=='SUCCESS'){
         this.foodList=response['cats_list']      
         
       }
     })

  }

}

