import { Component } from '@angular/core';
//import {FormGroup , FormArray ,FormBuilder, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "nicolas";
  name: string;
  
  ngOnInit() {
    this.name = ""
  }

  }
