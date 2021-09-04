import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footbar-mobile',
  templateUrl: './footbar-mobile.component.html',
  styleUrls: ['./footbar-mobile.component.css']
})
export class FootbarMobileComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSidenav = () => {
    this.sidenavToggle.emit(); // Emit event to parent component so it can open/close sidenav
  }
}
