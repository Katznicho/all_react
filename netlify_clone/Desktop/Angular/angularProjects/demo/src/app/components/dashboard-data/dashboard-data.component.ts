import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-dashboard-data',
  templateUrl: './dashboard-data.component.html',
  styleUrls: ['./dashboard-data.component.css']
})
export class DashboardDataComponent implements OnInit {
  @Input() totalConfirmed: number;
  @Input() totalRecovered: number;
  @Input() totalActive: number;
  @Input() totalDeaths: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.totalConfirmed)
  }

}
