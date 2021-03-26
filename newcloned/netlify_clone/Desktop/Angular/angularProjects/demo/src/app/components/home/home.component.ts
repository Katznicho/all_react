import { Model } from './../../model/model';
import { DataServiceService } from './../../service/data-service.service';
import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalConfirmed: number = 0;
  totalRecovered: number = 0;
  totalDeaths: number = 0;
  totalActive: number = 0;
  globalData: Model[];
  changeCase:string = 'a'
  pieChart: GoogleChartInterface = {
    chartType:"PieChart"
  }
  columnChart: GoogleChartInterface = {
    chartType:"ColumnChart"
  }

  constructor(private DataService: DataServiceService) { }
 

  ngOnInit() {
    this.DataService.getGlobalData().subscribe(
      {
        next: (result) => {
          this.globalData = result;
          result.map(obj => {
            this.totalConfirmed += obj.confirmed;
                this.totalActive += obj.active;
               this.totalDeaths += obj.deaths;
               this.totalRecovered+=obj.recovered        
          })
          this.initChart(this.changeCase)
      }
    })  
  }

  initChart(caseType:string) {
    let datatable = []
  datatable.push(["Country", "Cases"])
    this.globalData.forEach(obj => {
      let value: number;
      if (caseType == 'c') {
        value = obj.confirmed
      }
      if (caseType == 'd') {
        value = obj.deaths
      }
      if (caseType == 'r') {
        value = obj.recovered
      }
      if (caseType == 'a') {
        value = obj.active
      }
    datatable.push([obj.country ,value])
    })
    console.log(datatable)
    this.pieChart = {
      chartType:"PieChart",
      dataTable:datatable,
      options: {
        height: 500,
        width:500
      }
    }
    this.columnChart = {
      chartType:"ColumnChart",
      dataTable:datatable,
      options: {
        height:500
      }
    }
  }

  updateChart(value:HTMLInputElement) {
    this.changeCase = value.value
    this.initChart(this.changeCase)
      
    }

}
