import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBookOpen, faChalkboard, faChalkboardTeacher, faClipboard, faClipboardCheck, faClipboardList, faFilm, faGraduationCap, faList, faUniversity, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  universityIcon = faUniversity;
  graduationCapIcon = faGraduationCap;
  teacherIcon = faChalkboardTeacher;
  notebookIcon = faBookOpen;
  chalkboardIcon = faChalkboard;
  studentsIcon = faUserGraduate;
  clipboardCheckIcon = faList;
  clipboardIcon = faClipboardList;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  insituitionRegister() {
    this.router.navigate(["register/instituition"])
  }

  coursesRegister() {
    this.router.navigate(["register/courses"])
  }

  classesRegister() {
    this.router.navigate(["register/classes"])
  }

  disciplinesRegister() {
    this.router.navigate(["register/disciplines"])
  }

  responsiblesRegister() {
    this.router.navigate(["register/responsible"])
  }

  studentsRegister() {
    this.router.navigate(["register/students"])
  }

  presenceList() {
    this.router.navigate(["presenceList"])
  }

  manualPresence() {
    this.router.navigate(["manualPresence"])
  }

}
