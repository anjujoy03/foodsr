import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
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
}
