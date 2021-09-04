import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Config, Menu } from 'src/app/type';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, NG_ASYNC_VALIDATORS, Validators } from '@angular/forms';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  logactive: boolean=false;
  show=false;
  filtertoggle:boolean=false;
  containers=[0];
  isShown: boolean = false ; 
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router ) { }
  
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

  ViewDetails(food_id:any){
    this.http.post(environment.apiUrl + '/apifoods_details',{food_id:food_id}).subscribe((response:any)=>{
      if(response['status']=='SUCCESS'){
        this.foodList=response['foods_list'];
        this.FoodForm.get('food_name')?.setValue(this.foodList[0].name);
        this.FoodForm.get('desc')?.setValue(this.foodList[0].desc);
        this.FoodForm.get('category_name')?.setValue(this.foodList[0].category_id);

        const data =this.FoodForm.get('data') as FormArray

        for(let item=0;item<this.foodList.length;item++){
        
        const controlArray = <FormArray> this.FoodForm.get('data');
       controlArray.controls[0].get('food_name')?.setValue(this.foodList[item].food_name);
       controlArray.controls[0].get('food_price')?.setValue(this.foodList[item].food_price);
       controlArray.controls[0].get('food_name')?.setValue(this.foodList[item].food_name);
       controlArray.controls[0].get('size_name')?.setValue(this.foodList[item].food_sizescol);
       controlArray.controls[0].get('food_size_id')?.setValue(this.foodList[item].food_size_id);

        }

        // this.FoodForm.get('category_name')?.setValue(this.foodList[0].category_name);
        // this.FoodForm.get('category_id')?.setValue(this.foodList[0].category_id)
     
      }
    })

  }
  Delete(food_id:any){
    this.http.post(environment.apiUrl + '/apidelete_food',{food_id:food_id}).subscribe((response:any)=>{
      if(response['status']=='SUCCESS'){
        this.foodList=response['cats_list']
     
       
      }
    })

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
  onToggleFilter(){
    this.filtertoggle=!this.filtertoggle;
   }
   toggleShow() {

    this.isShown = ! this.isShown;
    
    }
 
  FoodForm!:FormGroup;
  foodList:any=[];
  slectList:any=[];

  ngOnInit(): void {
    this.FoodForm=this.formbuilder.group({

      food_name:['',Validators.required],
      desc:['',Validators.required],
      category_name:[''],
      user_id:['lemon000653'],
      food_id:[],
      data:this.formbuilder.array([
        this.createDataFormGroup()
    ])
      
    });
 




    this.getFoods();
    this.getCategory();
  }
  getControls(){
 
    return (<FormArray>this.FoodForm.get('data')).controls;
   
  }
  onSubmit(){

    var formData=new FormData();
    formData.append('food_name',this.FoodForm.get('foodname')?.value);
    formData.append('desc',this.FoodForm.get('desc')?.value);
    formData.append('data',this.FoodForm.get('data')?.value);
    formData.append('user_id',this.FoodForm.get('user_id')?.value);


    this.http.post(environment.apiUrl + '/apiadd_food',this.FoodForm.value).subscribe(response=>{

    })
    
  }
  getFoods(){

     this.http.post(environment.apiUrl + '/apifoods_hotels',{user_id:'lemon000653'}).subscribe((response:any)=>{
       if(response['status']=='SUCCESS'){
         this.foodList=response['foods_list'];
         console.log(this.foodList)
       }
     })

  }
  createDataFormGroup(){
    return  this.formbuilder.group({
      food_name:[''],
      size_name:[''],
      food_price:[''],
      image:[''],
      food_size_id:[],
       
      })
  }
  ADD(){
    const data = this.FoodForm.get('data') as FormArray
    data.push(this.createDataFormGroup())
    this.containers.push(this.containers.length)
  }
  Remove(i:number){
    const control = <FormArray>this.FoodForm.get('data')
    control.removeAt(i);

}
  getCategory(){


    this.http.post(environment.apiUrl + '/apiget_categorey',{hotel_id:'lemon000653'}).subscribe((response:any)=>{
      if(response['status']=='SUCCESS'){
        this.slectList=response['cats_list']
        console.log( this.slectList)
     
  
      }
    })

 }

}
