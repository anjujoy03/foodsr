import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: boolean=false;


  constructor( private router: Router, private formBuilder: FormBuilder,private http:HttpClient,public dialogRef: MatDialogRef<LoginComponent>) { }
  loginForm!: FormGroup;
  submitted: boolean=false;
  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({

      user_id: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }
 


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

 
  closeModal() {
    this.dialogRef.close();
  }

  gotoLogin(){
    this.login=!this.login
  }


}
