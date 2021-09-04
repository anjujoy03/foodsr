import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild,AfterViewInit, EventEmitter, Output } from '@angular/core';
import {DOCUMENT} from '@angular/common';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component'

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  @ViewChild('stickyMenu') menuElement!: ElementRef;
  sticky:boolean = false;
  elementposition: any;


  constructor( public matDialog: MatDialog){ }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    this.elementposition= this.menuElement.nativeElement.offsetTop;
  }
  onToggleSidenav = () => {
    this.sidenavToggle.emit(); // Emit event to parent component so it can open/close sidenav
  }

  @HostListener('window:scroll',['$event'])
  onWindowScroll(){
    const windowScroll=window.pageYOffset;
    if(windowScroll >= this.elementposition){
      this.sticky=true;
    }
    else{
      this.sticky=false;
    }
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
}
