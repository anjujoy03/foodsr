import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  constructor( private router: Router, private formBuilder: FormBuilder,private http:HttpClient) { }
  loginForm!: FormGroup;
  login: boolean=false;
  submitted: boolean=false;
  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({

      user_id: ['', Validators.required],
      password: ['', Validators.required],
      fname:[''],
      lname:[''],
      email:[''],
      phn_no:[''],
      conf:[''],

  });
  }
  get f() { return this.loginForm.controls; }
 
  gotoLogin(){
    this.login=!this.login
  }
  onSubmitsignup(): void{
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.http.post(environment.apiUrl + '/apiauth',this.loginForm.value).subscribe((response:any) => {
    //   console.log(response)
    //   localStorage.setItem('user_id',response['user_id'])
    //   localStorage.setItem('token',response['token'])
    //   if(response['user_type']=='HTL'){
    //     this.router.navigate([''])
    //   }
    //  else if(response['user_type']=='ADM'){
    //   this.router.navigate(['hotel/food'])
    //   }
    //   else{
    //     this.router.navigate(['admin/hotels'])
    //   }
      
        
    })

  }
  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.http.post(environment.apiUrl + '/apiauth',this.loginForm.value).subscribe((response:any) => {
      console.log(response)
      localStorage.setItem('user_id',response['user_id'])
      localStorage.setItem('token',response['token'])
      if(response['user_type']=='HTL'){
        this.router.navigate([''])
      }
     else if(response['user_type']=='ADM'){
      this.router.navigate(['hotel/food'])
      }
      else{
        this.router.navigate(['admin/hotels'])
      }
      
        
    })
   
  }
}

