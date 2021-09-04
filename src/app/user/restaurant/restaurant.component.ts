import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild,AfterViewInit, EventEmitter, Output } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../../login/login.component';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  hotlList:any=[];

  constructor(public matDialog: MatDialog,private http:HttpClient) { }

  ngOnInit(): void {
    this.get_hotels();
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


  get_hotels(){
    this.http.post(environment.apiUrl + '/apigetuserhotels',{user_id:localStorage.getItem('user_id')}).subscribe((response:any) => {
      this.hotlList=response['hotel_list'];


    })

  }
}
