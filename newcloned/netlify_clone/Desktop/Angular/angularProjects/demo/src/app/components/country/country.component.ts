import { Model } from './../../model/model';
import { GoogleChartInterface } from 'ng2-google-charts';
import { DataServiceService } from './../../service/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries: string[] = []
  totalConfirmed: number = 0;
  totalRecovered: number = 0;
  totalDeaths: number = 0;
  totalActive: number = 0;
  con: string;
  selectedCountry:Model[]
  lineChart: GoogleChartInterface = {
    chartType:"LineChart"
  }
  constructor(private DataService:DataServiceService) { }

  ngOnInit() {
    this.DataService.getGlobalData().subscribe(data=>{
      data.map(obj=>{
        this.countries.push(obj.country)
      })
    })
    console.log(this.countries)
  }
  getValue(event) {
    this.DataService.getGlobalData().subscribe(data => {
      data.map(obj => {
        if (obj.country === event.target.value) {
          this.con = obj.country;
          this.totalActive = obj.active;
          this.totalConfirmed = obj.confirmed;
          this.totalDeaths = obj.deaths;
          this.totalRecovered = obj.recovered
          
        }
      })
    })
  }

  updateChart() {
    let datable = []
    datable.push([this.con, 'cases'])
    this.selectedCountry.map(obj => {
      datable.push([this.con, obj.confirmed])
    })
    this.lineChart = {
      chartType: 'LineChart',
      dataTable: datable,
      options: {
        height:500
      }
    }
  }
}
