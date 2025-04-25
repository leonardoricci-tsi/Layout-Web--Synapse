import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  imports: [],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  constructor(private router: Router) {

  }
  navigateToHome(){
      this.router.navigate(['home'])

    }

}
