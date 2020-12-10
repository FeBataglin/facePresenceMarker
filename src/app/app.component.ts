import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { PoMenuItem } from '@po-ui/ng-components';
import { AngularFireAuth } from '@angular/fire/auth';

declare const myTest: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isHidden;
  clipboardCheckIcon = faClipboardCheck;
  menuItems: Array<PoMenuItem>;

  constructor(public router: Router, private afAuth: AngularFireAuth) { }

  private changeMenu() {
    this.menuItems = [
      { label: 'Dashboard', icon: 'po-icon-home', link: './dashboard', shortLabel: 'Dashboard'},
      { label: 'Reconhecer', icon: 'po-icon-camera', link: './recognition', shortLabel: 'Reconhecer' },
      {
        label: 'Cadastrar',
        icon: 'po-icon-user',
        shortLabel: 'Cadastrar',
        subItems: [
          { label: 'Cadastro de Instituição', link: './register/instituition' },
          { label: 'Cadastro de Cursos', link: './register/courses' },
          { label: 'Cadastro de Turmas', link: './register/classes' },
          { label: 'Cadastro de Disciplina', link: './register/disciplines' },
          { label: 'Cadastro de Responsável', link: './register/responsible' },
          { label: 'Cadastro de Alunos', link: './register/students' },
        ]
      },
      { label: 'Lista de Presença', icon: 'po-icon-list', link: './presenceList', shortLabel: 'Presenças' },
      { label: 'Chamada Manual', icon: 'po-icon-document-filled', link: './manualPresence', shortLabel: 'Manual' },
      { label: 'Sair', icon: 'po-icon-exit', action: this.logout.bind(this), shortLabel: 'Sair' },
    ];
  }

  logout() {
    this.afAuth.signOut().then(function() {
      console.log("Success to Signout")
    }).catch(function(error) {
      console.log("Fail to Signout")
    });
    this.router.navigateByUrl('/login')
  }

  ngOnInit() {
    this.changeMenu();
    if(window.location.href === "http://localhost:4200/#/login") {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
  }

}
