import { Component, OnInit,ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
  public  scannerEnabled: boolean = true;
  information!: string;

  constructor() { }

  ngOnInit(): void {
  }

  
  public scanSuccessHandler($event: any) {
    console.log("====")

    console.log($event)
    this.scannerEnabled = false;

  }


  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
    this.information = "No se ha detectado información de ningún código. Acerque un código QR para escanear.";
  }

}


