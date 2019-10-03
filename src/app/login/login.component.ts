import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'fp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  path: number;
  entering: boolean;

  email: string;
  password: string;

  constructor(private snackBar: MatSnackBar,
              private router: Router) { }


  ngOnInit() {
    this.path = Math.trunc(Math.random() * (1 - 7) + 7);
    console.log(this.path);
    this.entering = false;
  }

  login() {
    this.entering = true;
    setTimeout(() => {
      if (this.email === 'a@a.com' && this.password === '1234') {
        this.successSnackBar();
        setTimeout(() => {
          this.router.navigate(['/panel']);
        }, 2000);
      } else {
        this.errorSnackBar();
        this.entering = false;
      }
    }, 2000);
  }

  errorSnackBar() {
      this.snackBar.open('Usuário ou senha inválidos. Por favor verifique seus dados e tente novamente.', null, {
        duration: 3000,
        panelClass: ['snack-fail']
      });
  }

  successSnackBar() {
      this.snackBar.open('Você está sendo direcionado para o painel.', null, {
        duration: 5000,
        panelClass: ['snack-ok']
      });
  }
}
