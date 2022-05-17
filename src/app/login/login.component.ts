import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  message: string = "Vous êtes déconnecté. (picachu/picachu)";
  name!: string;
  password!: string;
  auth!:AuthService;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth = this.authService
  }
  

  setMessage(): void {
    if(this.auth.isLoggedIn) {
      this.message = 'Vous êtes connecté.';
    } else {
      this.message = 'Indentifiant ou mot de passe incorrect.'
    }
  }

  login(): void {
    this.message = 'Tentative de connexion en cours...';
    this.auth.login(this.name, this.password)
      .subscribe((isLoggedIn:boolean) => {
        this.setMessage();
        if(this.auth.isLoggedIn) {
          this.router.navigate(['/pokemons']);
        } else {
          this.password = '';
          this.router.navigate(['/login'])
        }
      })
  }

  logout(): void {
    this.auth.logout();
    this.message = "Vous vous êtes déconnecté";
  }
}
