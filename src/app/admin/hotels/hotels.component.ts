import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Config, HomeMenu, Menu } from 'src/app/type';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotelDetils: any;

  logactive: boolean=false;
  show=false;

  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router) {}

  options: Config = { multi: false };
  menus: Menu[] = [
    {
      name: 'Dashboard',
      iconClass: '../../../assets/img/dashboard.png',
      active: true,
      submenu: [
        { name: 'Home', url: 'progress' ,icon:''},
      
  
      ]
    },
    { 
      name: 'Hotel Details',
      iconClass: '../../../assets/img/shop.png',
      active: false,
      submenu: [
        { name: 'Hotel', url: 'admin/hotels' ,icon:''},
        // { name: 'Special Food', url: 'hotel/specialfood' ,icon:''},

       

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
        { name: 'Order detail', url: 'progress' ,icon:''},
       
      ]
    },
    { 
      name: 'Reports',
      iconClass: '../../../assets/img/categories.png',
      active: false,
      submenu: [
        { name: 'Report Details', url: 'progress' ,icon:''},

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
  HotelForm!: FormGroup;
  myFiles:any=[];
  hotelList:any=[];


    ngOnInit(): void {
      this.HotelForm = this.formBuilder.group({
        username: ['', Validators.required],
        phone: ['', Validators.required],
        email:['', Validators.required],
        hotelname: ['', Validators.required],
        password: ['', Validators.required],
        desc:['', Validators.required],
        district: ['', Validators.required],
        state: ['', Validators.required],
        place: ['', Validators.required],
        phone2: ['', Validators.required],
        udyamnumber: ['', Validators.required],
        pancardnumber: ['', Validators.required],
        gstnumber: ['', Validators.required],
        website: ['', Validators.required],
        hotel_image:[],
        premium:[],
        hotel_time:[],
        address:[],
        
        
        pincode:[],
        permission:['',],
        image:[],
       });
       this.getHotels();
  }
  
  get f() { return this.HotelForm.controls; }

  onSubmit() {
    console.log("=====");
    console.log(this.HotelForm.controls.values);
    

      
    var formData = new FormData();
   
    // for(let i=0;i<this.myFiles.length;i++){
    //   console.log(this.myFiles[i])
    //   formData.append('myfile',this.myFiles[i])
    // }
    // formData.append('feature',this.FeaturedImge)
  
    
    // formData.append('filetypes',JSON.stringify(this.myFilesType))
  

    
  
   
       
       formData.append('username',this.HotelForm.controls['username'].value)
       formData.append('phone',this.HotelForm.controls['phone'].value)
       formData.append('email',this.HotelForm.controls['email'].value)
       formData.append('hotelname',this.HotelForm.controls['hotelname'].value)
       formData.append('password',this.HotelForm.controls['password'].value)
       formData.append('desc',this.HotelForm.controls['desc'].value)
       formData.append('district',this.HotelForm.controls['district'].value)
       formData.append('state',this.HotelForm.controls['state'].value)
       formData.append('place',this.HotelForm.controls['place'].value)
       formData.append('phone2',this.HotelForm.controls['phone2'].value)
       formData.append('udyamnumber',this.HotelForm.controls['udyamnumber'].value)
       formData.append('pancardnumber',this.HotelForm.controls['pancardnumber'].value)
       formData.append('website',this.HotelForm.controls['website'].value)
       formData.append('gstnumber',this.HotelForm.controls['gstnumber'].value)
       formData.append('pincode',this.HotelForm.controls['pincode'].value)
       formData.append('premium',this.HotelForm.controls['premium'].value)
       formData.append('hotel_time',this.HotelForm.controls['hotel_time'].value)
       formData.append('permission',this.HotelForm.controls['permission'].value)
  
       
  
    //    console.log(formData)
      this.http.post(environment.apiUrl + '/apisavehotels',this.HotelForm.value).subscribe(response => {
      
        
      })
  }
  viewDetails(_value:any){
    console.log("----------")
    this.http.post(environment.apiUrl + '/apiget_hotelsdetails',{hotel_id:_value}).subscribe((response:any) => {
      if(response['status'] =='SUCCESS'){
        this.hotelDetils=response['hotel_details']
        this.HotelForm.get('hotelname')?.setValue(this.hotelDetils[0].hotel_name);
        this.HotelForm.get('username')?.setValue(this.hotelDetils[0].hotel_internal_id);
        this.HotelForm.get('phone')?.setValue(this.hotelDetils[0].phone);
        this.HotelForm.get('email')?.setValue(this.hotelDetils[0].email);
        this.HotelForm.get('password')?.setValue(this.hotelDetils[0].password);
        this.HotelForm.get('desc')?.setValue(this.hotelDetils[0].desc);
        this.HotelForm.get('district')?.setValue(this.hotelDetils[0].district);
        this.HotelForm.get('state')?.setValue(this.hotelDetils[0].state);
        this.HotelForm.get('place')?.setValue(this.hotelDetils[0].place);
        this.HotelForm.get('phone2')?.setValue(this.hotelDetils[0].phone2);
        this.HotelForm.get('udyamnumber')?.setValue(this.hotelDetils[0].udyamnumber);
        this.HotelForm.get('pancardnumber')?.setValue(this.hotelDetils[0].pancardnumber);
        this.HotelForm.get('website')?.setValue(this.hotelDetils[0].website);
        this.HotelForm.get('gstnumber')?.setValue(this.hotelDetils[0].gstnumber);
        this.HotelForm.get('pincode')?.setValue(this.hotelDetils[0].pincode);
        this.HotelForm.get('premium')?.setValue(this.hotelDetils[0].premium);
        this.HotelForm.get('hotel_time')?.setValue(this.hotelDetils[0].hotel_time);
        this.HotelForm.get('permission')?.setValue(this.hotelDetils[0].permission);
        this.HotelForm.get('hotel_id')?.setValue(this.hotelDetils[0].hotel_id);
   
     
      }
  
});
  }


  Delete(hotel_id:any){
    this.http.post(environment.apiUrl + '/apidelete_hotel',{hotel_id:hotel_id}).subscribe((response:any) => {
      if(response['status'] =='SUCCESS'){
        this.hotelList=response['hotel_list']
      }
   
      
  })

  }

  getHotels(){
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
   });

    
    
      this.http.post(environment.apiUrl + '/apiget_hotels',{headers:reqHeader}).subscribe((response:any) => {
        if(response['status'] =='SUCCESS'){
          this.hotelList=response['hotel_list']
        }
     
        
    })

  }
}

