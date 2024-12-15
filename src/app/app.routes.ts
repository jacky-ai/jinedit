import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'',component:WelcomeComponent,title:'home page'}, 
    {path:'signup',component:SignupComponent,title:'sign up'}, 
    {path:'login',component:LoginComponent,title:'log in'}, 
    {path:'aboutus',component:AboutusComponent,title:'about us'}, 
    {path:'service',component:ServiceComponent,title:'service'}, 
    {path:'contact',component:ContactComponent,title:'contact us'}, 
    

];
