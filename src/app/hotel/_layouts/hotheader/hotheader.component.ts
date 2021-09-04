import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hotheader',
  templateUrl: './hotheader.component.html',
  styleUrls: ['./hotheader.component.css']
})
export class HotheaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
