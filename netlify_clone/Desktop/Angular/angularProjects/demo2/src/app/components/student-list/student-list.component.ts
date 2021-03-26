import { StudentsService } from './../../service/students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students:any[]
  selectedStudent: boolean;
  selectedStudentDetails: { id, name, eamil, details }
  adminPassword: string = '1234';

  constructor(private studentService:StudentsService) { }

  ngOnInit() {
    this.students = this.studentService.getStudents()
    this.selectedStudent = false;
  }
  showDetails(student) {
    this.selectedStudent = true;
    this.selectedStudentDetails = { ...student }  
  }
  onDelete(id) {
    const value = prompt('Enter AdminPassword')
    if (value === this.adminPassword) {
     this.students =  this.students.filter(student=>student.id !== id)

    }
    else {
      alert('wrong password provided')
    }

  }


}
