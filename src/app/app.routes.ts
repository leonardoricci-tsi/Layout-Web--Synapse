import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path:"", component: LoginComponent
    },
    {
        path:"cadastrar", component: CadastrarComponent
    },
    {
        path:"home", component:HomeComponent
    }
]
