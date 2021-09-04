import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from '../../../environments/environment'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  
  constructor(private http:HttpClient) {}


  ngOnInit(): void {
  }

  getList()
  {
    this.http.post(environment.apiUrl + '/apisavehotels',{'id':'reverse'}).subscribe(response => {
      
        
    })
  }
 
}
