import { Model } from './../model/model';
import { Injectable } from '@angular/core';
import {of as ObservableOf} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private data: Model[] = [
    { country: "Uganda", confirmed: 20000, deaths: 100, recovered: 1500, active: 500 },
    
    { country: "Kenya", confirmed:100478, deaths: 45678, recovered: 22379, active: 5779 },
    
    { country: "Tanzania", confirmed:35790, deaths:678, recovered: 1563, active: 890 },
    
    { country: "Ghana", confirmed:56899, deaths:6790, recovered:24780, active: 7890 },
    
    { country: "China", confirmed: 67890, deaths: 5680, recovered: 2345, active: 9065 },
    
    { country: "USA", confirmed:568023, deaths:679090, recovered:67879, active: 7890 },
    
    { country: "Russia", confirmed:123456, deaths:5689, recovered:6890, active: 8965}

  ]
  constructor() { }
  getGlobalData(){
    return ObservableOf(this.data)
 
}
}


