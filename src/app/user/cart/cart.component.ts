import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login.component';
import { ModalComponent } from 'src/app/modal/modal.component';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NEVER } from 'rxjs';
import Swal from 'sweetalert2';  


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  CartList=[];
  addons!: string;
  Total_price: number=0;
  number:number=0;
  max:number=30;
  min:number=0;

  
  constructor(public matDialog: MatDialog,private http:HttpClient) { }

  ngOnInit(): void {
    this.get_cart()
  }
  onToggleSidenav = () => {
    this.sidenavToggle.emit(); // Emit event to parent component so it can open/close sidenav
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

  get_cart(){
    console.log("====22534")
    this.http.post(environment.apiUrl + '/apiget_cart',{user_id:localStorage.getItem('user_id')}).subscribe((response:any) => {
      this.CartList=response['foods_list'];
      this.Total_price=response['total_price']
      console.log(this.CartList)

    })

  }
  delete_cart(cart_id:any){
    this.http.post(environment.apiUrl + '/apidelete_cart',{user_id:localStorage.getItem('user_id'),cart_id:cart_id}).subscribe((response:any) => {
      if(response['response']=='SUCCESS'){
        this.get_cart();
        // const index = this.CartList.indexOf(_id);
        // if (index > -1) {
        //   this.CartList.splice(index, 1);
          
        // }
       
        
      }

    })

  }
  add(number:any){
    console.log(number)
    if(parseInt(number['quantity'])<this.max){
    number['quantity']=parseInt(number['quantity'])+1;
    }

    this.http.post(environment.apiUrl + '/apiupdate_cart',{user_id:localStorage.getItem('user_id'),quantity:number['quantity'],bucket_id:number['bucket_id']}).subscribe((response:any) => {
      if(response['response']=='SUCCESS'){
        this.get_cart();
      }

    })
  
  

  }
  minus(number:any){
    
    if(parseInt(number['quantity'])>this.min){
    number['quantity']=parseInt(number['quantity'])-1;
    }
    if(parseInt(number['quantity'])==this.min){
     this.delete_cart(number['bucket_id'])

    }

    this.http.post(environment.apiUrl + '/apiupdate_cart',{user_id:localStorage.getItem('user_id'),quantity:number['quantity'],bucket_id:number['bucket_id']}).subscribe((response:any) => {
      if(response['response']=='SUCCESS'){
        this.get_cart();
      }
    })
  }
  order_now(){
    this.http.post(environment.apiUrl + '/apiorder_now',{user_id:localStorage.getItem('user_id'),total_price:this.Total_price,order_code:'QW1',data:this.CartList,total_count:this.CartList.length,addons:this.addons?this.addons:''}).subscribe((response:any) => {
      if(response['status']=='SUCCESS'){
        console.log(response['order_code'])
        console.log(response['token_number'])
        Swal.fire(
          'Good job! Your Order "'+response['order_code']+'" has been Recived',
          "Your  Token Number is  '"+response['token_number']+"'!",
          'success'
        )
        
      }

    })

  }
}
