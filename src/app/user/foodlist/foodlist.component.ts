import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login.component';
import { ModalComponent } from 'src/app/modal/modal.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackBarService} from '../../snack-bar.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  favoriteSeason!: string;
  FoodList:any=[];
  catList:any=[];
  CartList:any=[];
  CartID:any=[];
  TemkpList:any=[];
  public ParamsID:any;

  constructor(public matDialog: MatDialog,public snackBar: SnackBarService,private http:HttpClient,private activatedRoute:ActivatedRoute) { 
    console.log(this.activatedRoute);
    this.ParamsID = activatedRoute.snapshot.params.id;

  }

  ngOnInit(): void {
  
 
 this.get_foods();
 this.get_categories();

  }
  onToggleSidenav = () => {
    this.sidenavToggle.emit(); // Emit event to parent component so it can open/close sidenav
  }
 
  seasons: string[] = ['Lunch', 'Snacks', 'Mandi', 'Breakfast'];


  formatLabel(value: number) {
    if (value >= 10000) {
      return Math.round(value / 1000);
    }

    return value;
  }

  updatesettings(event:any){
    this.FoodList=this.TemkpList.filter((obj:any)=>{
      return obj.food_price>=event.value;
    });
    
  }
  opentrigger(message:string, action:string,item:any)
  {
    console.log()
    item['saved']=!item['saved'];
  

   this.http.post(environment.apiUrl + '/apiadd_to_cart',{user_id:localStorage.getItem('user_id'),food_id:item['food_id'],hotel_id:item['hotel_id'],quantity:'1',price:item['food_price'],size:item['food_size_id']}).subscribe((response:any) => {
    
    if(response['status']=='SUCCESS'){

this.snackBar.openSnackBar(message, action);
    }
 
    

    //this.snackBar.openSnackBar(message, action);
    
      
  })

  }

  deletetrigger(message:string, action:string,item:any)
  {
    console.log()
    item['saved']=!item['saved'];
    this.http.post(environment.apiUrl + '/apidelete_cart',{user_id:localStorage.getItem('user_id'),cart_id:item['cart_id']}).subscribe((response:any) => {
      if(response['status']=='SUCCESS'){
        this.get_foods();
      
      }

    })
    
   this.snackBar.openSnackBar(message, action);
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(LoginComponent, dialogConfig);
  }

  get_foods(){

  this.http.post(environment.apiUrl + '/apiget_foods',{user_id:this.ParamsID,cust_id:localStorage.getItem('user_id')}).subscribe((response:any) => {
    
    this.CartList=response['cart_list'];
    this.TemkpList=response['foods_list'] 

    for(let item of response['foods_list']){
      for(let data of response['cart_list']){
        if(item['food_id']==data['food_id']){
          console.log("=====")
          item['saved']=true;
        }
        else{
          item['saved']=false;
        }
      }
      

    }
    this.FoodList=response['foods_list'];
    console.log(this.FoodList);
    }
 
  )}
  

  
  radioChange(event:any){
    this.FoodList=this.TemkpList.filter((obj:any)=>{
return obj.category_id==event.value;
    })



  }
  get_cart(){
    this.http.post(environment.apiUrl + '/apiget_cart',{user_id:localStorage.getItem('user_id')}).subscribe((response:any) => {
      this.CartList=response['foods_list'];


    })

  }
  get_categories(){
    this.http.post(environment.apiUrl + '/apiget_categories',{user_id:this.ParamsID}).subscribe((response:any) => {
      this.catList=response['category_list'];
        
    })
  
    }
}
