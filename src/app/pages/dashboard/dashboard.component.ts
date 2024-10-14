import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../../services/master.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  dashboardData: any;

  masterServ = inject(MasterService);

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.masterServ.getDashboardData().subscribe(
      (res: any) => {
        this.dashboardData = res;
      },
      (err) => {
        alert('Error while gettingthe Dashboard Data');
      }
    );
  }
}
