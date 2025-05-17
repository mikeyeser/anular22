import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { MycartComponent } from './mycart/mycart.component';


export const routes: Routes = [
    {path: "", redirectTo: 'home', pathMatch: "full"},
    {path: "home", component : HomeComponent},
    {path: "main", component : MainComponent},
    {path: "about", component : AboutComponent},
    {path: "menu", component : MenuComponent},
    {path: "mycart", component : MycartComponent}
];
