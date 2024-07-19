import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatSidenavModule, 
    MatButtonModule, 
    MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit {

  @ViewChild('sidenav') public sidenav: MatSidenav | undefined;

  constructor() {

  }
  ngAfterViewInit(): void {
    this.sidenav?.open();
  }

}
