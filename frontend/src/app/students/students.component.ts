import { Component, OnInit } from '@angular/core';
import { Student } from './student'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  student: Student = {
    id: 1,
    name: 'Windstorm'
  };

}